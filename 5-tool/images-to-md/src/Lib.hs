{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE ScopedTypeVariables #-}
{-# LANGUAGE FlexibleContexts #-}
{-# LANGUAGE TypeOperators #-}
{-# LANGUAGE GADTs #-}
{-# LANGUAGE DuplicateRecordFields #-}
{-# LANGUAGE OverloadedRecordDot #-}

module Lib
    ( run
    , Options(..)
    ) where

import Effectful
import Effectful.Dispatch.Dynamic
import Control.Monad (forM_)
import Control.Monad.IO.Class (liftIO)
import qualified Data.Text as T
import qualified Data.Text.IO as TIO
import System.Directory
import System.FilePath
import System.Environment (setEnv)
import Control.Lens ((&), (.~), (<&>), (?~), view)
import Data.Function ((&))
import qualified Gogol as Google
import Data.List (sort)
import Gogol hiding (send)
import Gogol.Vision hiding (send)
import qualified Data.ByteString as BS
import Gogol.Vision.Types
import Gogol.Vision.Images.Annotate
import System.IO (hFlush, stdout)

data Options = Options
  { inputDir  :: FilePath
  , outputDir :: FilePath
  , apiKeyPath :: FilePath
  , fileLimit :: Maybe Int
  }

-- | Effect for Vision API
data Vision :: Effect where
  ExtractText :: FilePath -> Vision m T.Text

type instance DispatchOf Vision = Dynamic

-- | Run Vision effect using Gogol
runVision :: (IOE :> es) => FilePath -> Eff (Vision : es) a -> Eff es a
runVision apiKeyPath m = do
    -- If apiKeyPath file provided, set env var (Gogol checks this)
    -- If apiKeyPath file provided, set env var (Gogol checks this)
    liftIO $ putStrLn $ "Loading credentials from: " ++ apiKeyPath
    exists <- liftIO $ doesFileExist apiKeyPath
    if not exists
        then error $ "Credentials file not found at: " ++ apiKeyPath
        else do
            absPath <- liftIO $ makeAbsolute apiKeyPath
            liftIO $ setEnv "GOOGLE_APPLICATION_CREDENTIALS" absPath

    -- Create env
    logger <- liftIO $ newLogger Debug stdout
    -- Scopes are inferred by GHC from the usage in 'handle'
    -- We need to explicit scope to resolve ambiguity
    env :: Env '[CloudPlatform'FullControl] <- liftIO $ newEnv <&> (envLogger .~ logger)
    
    interpret (handle env) m
  where
    handle :: (IOE :> es) => Env '[CloudPlatform'FullControl] -> LocalEnv localEs es -> Vision (Eff localEs) b -> Eff es b
    handle env _ (ExtractText path) = liftIO $ do
        fileContent <- BS.readFile path 
        
        -- Construct request using 1.0.0.0 types (v1p2beta1)
        -- We use record update syntax with DuplicateRecordFields
        
        -- explicit naming to help type inference if needed, but context should suffice
        let img :: GoogleCloudVisionV1p2beta1Image
            img = newGoogleCloudVisionV1p2beta1Image 
                { content = Just (Base64 fileContent) }
            
            -- Feature type wrapper
            ft = GoogleCloudVisionV1p2beta1Feature_Type "DOCUMENT_TEXT_DETECTION"
            
            feature :: GoogleCloudVisionV1p2beta1Feature
            feature = newGoogleCloudVisionV1p2beta1Feature
                { type' = Just ft }
            
            req :: GoogleCloudVisionV1p2beta1AnnotateImageRequest
            req = newGoogleCloudVisionV1p2beta1AnnotateImageRequest
                { image = Just img
                , features = Just [feature]
                }
                
            batch :: GoogleCloudVisionV1p2beta1BatchAnnotateImagesRequest
            batch = newGoogleCloudVisionV1p2beta1BatchAnnotateImagesRequest
                { requests = Just [req] }
        
        -- Run request
        resp <- runResourceT . Google.send env $ newVisionImagesAnnotate batch
        
        -- Response handling
        let resps = resp.responses
        case resps of
            Just (r:_) -> do
                let annotation = r.fullTextAnnotation
                case annotation of
                    Just ta -> return $ maybe "" id ta.text
                    Nothing -> return ""
            _ -> return ""

-- | Main Application Logic
run :: Options -> IO ()
run Options{..} = runEff . runVision apiKeyPath $ do
    liftIO $ createDirectoryIfMissing True outputDir
    files <- liftIO $ listDirectory inputDir
    let imageExtensions = [".jpg", ".jpeg", ".png", ".bmp", ".webp"]
    let allImageFiles = sort $ filter (\f -> takeExtension f `elem` imageExtensions) files
    
    let imageFiles = case fileLimit of
            Just n -> take n allImageFiles
            Nothing -> allImageFiles
    
    let total = length imageFiles
    liftIO $ putStrLn $ "Found " ++ show (length allImageFiles) ++ " images. Processing " ++ show total ++ "."

    forM_ (zip [1..] imageFiles) $ \(idx, file) -> do
        let inputPath = inputDir </> file
            outputPath = outputDir </> (takeBaseName file ++ ".md")
            -- Progression
            progress = "[" ++ show idx ++ "/" ++ show total ++ "]"
        
        liftIO $ putStr $ progress ++ " Processing " ++ file ++ "... "
        liftIO $ hFlush stdout
        
        -- Call Vision API
        text <- extractText inputPath
        
        -- Save
        liftIO $ TIO.writeFile outputPath text
        liftIO $ putStrLn "Done."

-- | Helper to call the effect
extractText :: (Vision :> es) => FilePath -> Eff es T.Text
extractText path = send (ExtractText path)

