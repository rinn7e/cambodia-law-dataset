{-# LANGUAGE DataKinds #-}
{-# LANGUAGE FlexibleContexts #-}
{-# LANGUAGE GADTs #-}
{-# LANGUAGE LambdaCase #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE ScopedTypeVariables #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE TypeOperators #-}

module Lib
  ( run
  , ImageFormat(..)
  , PdfConverterOptions(..)
  ) where

import Control.Monad (void)
import Data.Text (Text)
import qualified Data.Text as T
import Effectful
import Effectful.FileSystem
import qualified System.Process.Typed as P
import System.FilePath ((</>))
import qualified Text.Printf as Printf
import Data.ByteString.Lazy (ByteString)
import qualified Data.ByteString.Lazy.Char8 as BL
import qualified Data.ByteString.Char8 as BS
import Data.Char (isDigit)
import System.IO (hFlush, stdout, hGetLine, Handle)
import System.Exit (ExitCode(..))
import Control.Monad (forever, when)
import Control.Exception (try, SomeException)

-- | Get the number of pages in the PDF using pdfinfo
getPageCount :: (IOE :> es) => FilePath -> Eff es (Maybe Int)
getPageCount pdfPath = do
  (exitCode, stdoutOutput, _) <- liftIO $ P.readProcess $ P.proc "pdfinfo" [pdfPath]
  case exitCode of
    ExitSuccess -> pure $ parsePageCount stdoutOutput
    _           -> pure Nothing

parsePageCount :: ByteString -> Maybe Int
parsePageCount output = 
  let lines = BL.lines output
      pageLine = filter (BL.isPrefixOf "Pages:") lines
  in case pageLine of
       (x:_) -> case BL.words x of
                  (_:count:_) -> readMaybe (BL.unpack count)
                  _           -> Nothing
       _     -> Nothing

-- | Safe read
readMaybe :: Read a => String -> Maybe a
readMaybe s = case reads s of
                [(x, "")] -> Just x
                _         -> Nothing

-- | Parse progress line from pdftoppm
-- Output format example: "1 1 output-1.png" (PageNum TotalPages Filename)
-- But sometimes it just prints "Page-Num Filename" depending on version.
-- Let's just try to parse the first number.
parseProgress :: String -> Maybe Int
parseProgress line = 
  case words line of
    (n:_) | all isDigit n -> readMaybe n
    _                     -> Nothing



-- | Supported image formats for pdftoppm
data ImageFormat
  = Png
  | Jpeg
  | Tiff
  deriving (Show, Eq)

-- | Options for the converter
data PdfConverterOptions = PdfConverterOptions
  { optInputPdf :: FilePath
  , optOutputDir :: FilePath
  , optOutputPrefix :: Maybe String
  , optFormat :: ImageFormat
  } deriving (Show, Eq)

-- | Main entry point for the library logic
run :: PdfConverterOptions -> IO ()
run opts = runEff $ do
  -- We need FileSystem to create directories and IOE to run processes
  runFileSystem $ convertPdf opts

-- | The core conversion logic using Effectful
convertPdf 
  :: (FileSystem :> es, IOE :> es)
  => PdfConverterOptions 
  -> Eff es ()
convertPdf opts = do
  -- Ensure output directory exists
  createDirectoryIfMissing True (optOutputDir opts)
  
  -- Get page count
  mPageCount <- getPageCount (optInputPdf opts)
  case mPageCount of
    Just c  -> liftIO $ putStrLn $ "Total pages: " ++ show c
    Nothing -> liftIO $ putStrLn "Could not determine page count. Proceeding..."

  -- Construct the command
  let formatFlag = case optFormat opts of
        Png  -> "-png"
        Jpeg -> "-jpeg"
        Tiff -> "-tiff"
      
      prefix = case optOutputPrefix opts of
        Just p  -> p
        Nothing -> "page"
      
      outputPathPrefix = optOutputDir opts </> prefix
      
      -- pdftoppm args: -progress [options] PDF-file [PPM-root]
      -- We assume -progress prints to stderr.
      args = ["-progress", formatFlag, optInputPdf opts, outputPathPrefix]
      
      processConfig = P.setStderr P.createPipe $ P.proc "pdftoppm" args

  -- Run the process and consume stderr for progress
  exitCode <- liftIO $ P.withProcessWait processConfig $ \p -> do
    let errH = P.getStderr p
    runEff $ processOutput mPageCount errH
    P.waitExitCode p

  case exitCode of
    ExitSuccess -> liftIO $ putStrLn "\nDone."
    ExitFailure c -> liftIO $ putStrLn $ "\npdftoppm failed with exit code: " ++ show c

processOutput :: (IOE :> es) => Maybe Int -> Handle -> Eff es ()
processOutput totalPages h = liftIO $ do
  -- We try to read lines loop. 
  -- Note: hGetLine might block.
  go
  where
    go = do
      eof <- try (hGetLine h) :: IO (Either SomeException String)
      case eof of
        Left _ -> return () -- EOF or error
        Right line -> do
          -- pdftoppm -progress outputs: PageNum TotalPages Filename (sometimes)
          -- or just PageNum ...
          -- The example output was "1 1 test_output-1.ppm"
          case parseProgress line of
             Just p -> do
               let progressStr = case totalPages of
                     Just t -> 
                       let pct = (fromIntegral p / fromIntegral t) * 100 :: Double
                       in Printf.printf "\rProcessing page %d/%d (%.0f%%)" p t pct
                     Nothing -> 
                       "\rProcessing page " ++ show p
               putStr progressStr
               hFlush stdout
             Nothing -> return () -- Ignore lines we can't parse
          go

