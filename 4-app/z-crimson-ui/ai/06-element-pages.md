# Prompt 6: Element Showcase Pages

Create the individual showcase pages for each HTML element category. These pages reside in `src/page/` and demonstrate the shared components.

## Data Requirement
- For `ListPage`, create dummy data (e.g., lists of languages, frameworks).
- For `FormPage`, use `useState` for interactive examples (range slider, color picker).
- For `TablePage`, generate mock tabular data (e.g., user definitions).

## Pages to Create

1.  **Text Elements Page** (`src/page/text-page.tsx`)
    *   Showcase Headings (h1-h6).
    *   Showcase Paragraphs, Blockquotes.
    *   Showcase Inline elements (span, strong, em, code, kbd, mark, time).
    *   Showcase Links (`Link`).

2.  **List Elements Page** (`src/page/list-page.tsx`)
    *   Showcase `Ul`, `Ol`, `Dl`.
    *   Demonstrate nested lists.
    *   Demonstrate custom styled lists (e.g., with icons).

3.  **Form Elements Page** (`src/page/form-page.tsx`)
    *   Showcase all `Input` types (text, password, date, file, range, color).
    *   Showcase `Select` and Datalists.
    *   Showcase `Checkbox` and `Radio` buttons.
    *   Showcase `Textarea`.
    *   Showcase `Button` variants.
    *   Showcase `Fieldset` group.

4.  **Table Elements Page** (`src/page/table-page.tsx`)
    *   Create a rich table using `Table`, `Thead`, `Tbody`, `Tr`, `Th`, `Td`.
    *   Include a caption and tfoot.

5.  **Interactive Elements Page** (`src/page/interactive-page.tsx`)
    *   Showcase `details`/`summary` (native accordion).
    *   Showcase `dialog` (modal and non-modal) using `ref.showModal()`.
    *   Showcase `popover` (using native `popover` attribute).

6.  **Media Elements Page** (`src/page/media-page.tsx`)
    *   Showcase Images (`img`, `picture`) with captions.
    *   Showcase Audio (`audio`) and Video (`video`).
    *   Showcase `canvas` (draw a simple shape).
    *   Showcase `svg` icons.

7.  **Semantic Elements Page** (`src/page/semantic-page.tsx`)
    *   Showcase `article`, `section`, `nav`, `aside`, `header`, `footer`.
    *   Use `Card` and `Article` shared components to demonstrate these in context.

8.  **Misc Elements Page** (`src/page/misc-page.tsx`)
    *   Showcase `progress` and `meter`.
    *   Showcase standard `hr`.

## Integration
Ensure all these components are exported and registered in the Router (from Prompt 02).
