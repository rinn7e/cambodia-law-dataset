{-# LANGUAGE OverloadedStrings #-}

module Main (main) where

import Lib
import Options.Applicative

-- | Parser for ImageFormat
imageFormatParser :: Parser ImageFormat
imageFormatParser = flag' Png (long "png" <> help "Output as PNG (default)")
                <|> flag' Jpeg (long "jpeg" <> help "Output as JPEG")
                <|> flag' Tiff (long "tiff" <> help "Output as TIFF")
                <|> pure Png -- Default to Png if nothing specified, but we need to be careful with Alternative

-- This might handle defaults better:
imageFormatOption :: Parser ImageFormat
imageFormatOption = option (eitherReader parseFormat)
  ( long "format"
 <> short 'f'
 <> metavar "FORMAT"
 <> help "Output format: png, jpeg, or tiff"
 <> value Png
 <> showDefault
  )
  where
    parseFormat "png"  = Right Png
    parseFormat "jpeg" = Right Jpeg
    parseFormat "tiff" = Right Tiff
    parseFormat other  = Left $ "Unknown format: " ++ other

-- | Parser for PdfConverterOptions
optionsParser :: Parser PdfConverterOptions
optionsParser = PdfConverterOptions
  <$> strArgument
      ( metavar "INPUT_PDF"
     <> help "Path to the input PDF file"
      )
  <*> strOption
      ( long "output-dir"
     <> short 'o'
     <> metavar "DIR"
     <> help "Directory to save the output images"
     <> value "."
     <> showDefault
      )
  <*> optional (strOption
      ( long "prefix"
     <> short 'p'
     <> metavar "PREFIX"
     <> help "Prefix for the output image filenames"
      ))
  <*> imageFormatOption

-- | Run the CLI
main :: IO ()
main = do
  options <- execParser optsWithHelp
  run options
  where
    optsWithHelp = info (optionsParser <**> helper)
      ( fullDesc
     <> progDesc "Convert a PDF file into a list of images using pdftoppm"
     <> header "pdf-to-images - A PDF to Image converter in Haskell"
      )
