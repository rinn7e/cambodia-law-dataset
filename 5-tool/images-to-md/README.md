# Images to MD

A CLI tool to extract text from images in a directory using Google Cloud Vision API.

## Prerequisites

- Haskell Stack (LTS 23.28)
- Google Cloud Platform Project with Cloud Vision API enabled.
- Service Account JSON key.
- Setup `GOOGLE_APPLICATION_CREDENTIALS` environment variable pointing to your key, or pass it via CLI.

## Installation

```bash
stack build
```

## Usage

```bash
stack run -- --input-dir <DIR> --output-dir <DIR> --credentials <FILE>

# Example
stack run -- --input-dir input --output-dir output --credentials key.json
```

### Options

- `-i, --input-dir DIR`: Directory containing images (jpg, png, etc.)
- `-o, --output-dir DIR`: Directory to save text files.
- `-c, --credentials FILE`: Path to service account key file.
- `-n, --limit INT`: Limit number of files to process (Optional).

### Example

```bash
stack run -- -i ./my-images -o ./output-text -c key.json
```

## Progression

The tool displays progress as it processes files:
`[1/10] Processing image1.png... Done.`
