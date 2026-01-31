module Main where

import Lib
import Options.Applicative
import Data.Semigroup ((<>))


opts :: Parser Options
opts = Options
  <$> strOption
      ( long "input-dir"
     <> short 'i'
     <> metavar "DIR"
     <> help "Directory containing images" )
  <*> strOption
      ( long "output-dir"
     <> short 'o'
     <> metavar "DIR"
     <> help "Directory to save extracted text" )
  <*> strOption
      ( long "credentials"
     <> short 'c'
     <> metavar "FILE"
     <> help "Path to Google Service Account JSON key" )
  <*> optional (option auto
      ( long "limit"
     <> short 'n'
     <> metavar "INT"
     <> help "Limit number of files to process" ))

main :: IO ()
main = do
  options <- execParser optsWithHelp
  run options
  where
    optsWithHelp = info (opts <**> helper)
      ( fullDesc
     <> progDesc "Extract text from images in a directory using Google Cloud Vision"
     <> header "images-to-md - Extract text from images to markdown/text" )

