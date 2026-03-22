# Cambodia Law Dataset

## List of processed documents

- [constitution-រដ្ឋធម្មនុញ្ញ-11-09-2015](./laws/constitution-រដ្ឋធម្មនុញ្ញ-11-09-2015.md)

## Disclaimer
This project is intended for learning and research purposes only.
It must not be used for legal advice or legal decision-making.

## Overview
Cambodian legal documents are typically published in PDF format, which makes them difficult to process programmatically. PDFs often lack reliable structure and are especially challenging for text extraction in Khmer.

This project converts Cambodian law documents into Markdown format. Markdown preserves structure while remaining readable, making the data suitable for analysis, parsing, and educational use.


## Motivation
Khmer text is difficult for standard OCR tools to recognize accurately, particularly in scanned PDFs or documents using non-standard fonts. To improve accuracy, text extraction often relies on image-based tools such as Google Images or Google Lens, followed by manual review and cleanup before formatting the content in Markdown.

This approach prioritizes correctness and clarity over full automation.

TODO:
- Consider using google cloud vision to get all text at once
- Then do a cleanup manually by adding markdown style to the document, and compare any incorrect text to the original pdf
(Do it side by side)
- Add a program that convert a pdf, to a list of image, the feed into google cloud vision, then
extract all the text into raw-output.txt
- Create a dir containing:
  - original.pdf
  - raw-output.txt
  - cleanup.md
- Do raw output for as many documents as possible, then propose community help to do the cleanup.md

## Goal
The goal of this project is to build a complete and structured dataset containing all Cambodian laws in Markdown format.

## Data Format
Each law is stored as a Markdown file with consistent structure, typically including:
- Title
- Chapters
- Articles
- Sections

This structure allows the dataset to be both human-readable and machine-parsable.

## License
MIT License


Copyright (c) 2026 Moremi Vannak

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



