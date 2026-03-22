# Prompt 03: Basic Shared Components

Create the foundational, stateless UI components.

## Analysis Targets
- `src/component/text.tsx`
- `src/component/heading.tsx`
- `src/component/list.tsx`
- `src/component/code.tsx`
- `src/component/form.tsx`
- `src/component/table.tsx`
- `src/component/showcase.tsx`
- `src/component/index.ts` (partial)

## Instructions

1.  **Text & Typography**
    *   `src/component/text.tsx`: `Text`, `Link`, `Blockquote`.
    *   `src/component/heading.tsx`: `Heading` (levels 1-6).
    *   `src/component/code.tsx`: `Code` (inline), `Pre` (block), `Kbd`.

2.  **Lists**
    *   `src/component/list.tsx`: `Ul`, `Ol`, `Li`, `Dl`, `Dt`, `Dd`.

3.  **Form Elements**
    *   `src/component/form.tsx`:
        *   `Input`, `Select`, `Textarea` (with base styles).
        *   `Label`, `Checkbox`, `Radio`.
        *   `Fieldset` with legend.

4.  **Structure & Layout**
    *   `src/component/table.tsx`: `Table`, `Thead`, `Tbody`, `Tr`, `Th`, `Td`.
    *   `src/component/showcase.tsx`: A wrapper to display demo components with a title and description.

5.  **Component Index**
    *   Create `src/component/index.ts` and export all created components.
