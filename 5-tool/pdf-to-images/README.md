# pdf-to-images

A Haskell CLI tool to convert PDF files into images (PNG, JPEG, TIFF) using `pdftoppm`.

## Prerequisites

- **Stack**: The Haskell Tool Stack.
- **poppler-utils**: You must have `poppler-utils` installed on your system, as this tool relies on `pdftoppm`.

  ```bash
  # Debian/Ubuntu
  sudo apt-get install poppler-utils

  # macOS
  brew install poppler
  ```

## Installation

```bash
stack build
```

## Usage

```bash
stack run -- <INPUT_PDF> [OPTIONS]
```

### Options

| Option | Shorthand | Description | Default |
|path|path|path|path|
| `--output-dir DIR` | `-o` | Directory to save the output images | `.` |
| `--prefix PREFIX` | `-p` | Prefix for the output image filenames | `page` |
| `--format FORMAT` | `-f` | Output format: `png`, `jpeg`, `tiff` | `png` |
| `--png` | | Output as PNG (flag) | |
| `--jpeg` | | Output as JPEG (flag) | |
| `--tiff` | | Output as TIFF (flag) | |

### Examples

Convert `document.pdf` to PNG images in the `images` directory:
```bash
stack run -- document.pdf -o images
```

Convert with a custom prefix `slide`:
```bash
stack run -- document.pdf -o slides -p slide
```
# This will generate slides/slide-1.png, slides/slide-2.png, etc.

Convert to JPEG:
```bash
stack run -- document.pdf -o images -f jpeg
# OR
stack run -- document.pdf -o images --jpeg
```
