# Prompt 3: Basic Shared Components

Create the foundational UI components in `src/component/`. These should be simple functional components using Tailwind CSS classes.

## Components to Create

1.  **Text Elements** (`src/component/text.tsx`)
    *   `Text`: Paragraph with standard text color.
    *   `Link`: Anchor tag with accent color and hover effect.
    *   `Blockquote`: Styled blockquote with a left border.

2.  **Headings** (`src/component/heading.tsx`)
    *   `Heading`: Accepts a `level` prop (1-6) and renders the appropriate HTML tag with semantic sizes.

3.  **Basic Lists** (`src/component/list.tsx`)
    *   `Ul`, `Ol`, `Li`: Standard styled lists using `list-disc`/`list-decimal`.
    *   `Dl`, `Dt`, `Dd`: Definition lists.

4.  **Code** (`src/component/code.tsx`)
    *   `Code`: Inline code with monospaced font and background.
    *   `Pre`: Block code container.
    *   `Kbd`: Styled keyboard shortcut key.

5.  **Form Elements** (`src/component/form.tsx`)
    *   `Input`, `Select`, `Textarea`: Standard inputs with focus rings and borders.
    *   `Label`: Block label.
    *   `Checkbox`, `Radio`: Accent-colored inputs.
    *   `Fieldset`: Bordered container with legend.

6.  **Table** (`src/component/table.tsx`)
    *   `Table`, `Thead`, `Tbody`, `Tr`, `Th`, `Td`: Composable table components with styled borders and headers.

7.  **Showcase** (`src/component/showcase.tsx`)
    *   A container component to display examples, allowing a title and description.

## Export
Create `src/component/index.ts` to export all components.
