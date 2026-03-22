# Prompt 05: Element Showcase Pages

Create the interactive gallery pages that demonstrate every UI component in the system.

## Analysis Targets
- `src/page/text-page.tsx`
- `src/page/list-page.tsx`
- `src/page/form-page.tsx`
- `src/page/table-page.tsx`
- `src/page/interactive-page.tsx`
- `src/page/media-page.tsx`
- `src/page/semantic-page.tsx`
- `src/page/misc-page.tsx`
- `src/page/home-page.tsx`

## Instructions

1.  **Home Page**
    *   `src/page/home-page.tsx`: A landing page introducing the design system using `Showcase`, `Heading`, and `Button`.

2.  **Showcase Pages**
    *   Create individual pages for each key category.
    *   `TextElements`: Headings, inline text, code blocks.
    *   `ListElements`: Nested lists, description lists.
    *   `FormElements`: All inputs, interactive state examples (controlled inputs).
    *   `TableElements`: Complex table examples.
    *   `InteractiveElements`: Dialogs (modal/non-modal), Details, Popovers.
    *   `SemanticElements`: Article, Section, Aside structure.

3.  **Routing Integration**
    *   Ensure these pages correspond to the Routes defined in Prompt 02.
    *   Update `src/app.tsx` imports and `renderRoute` to display these pages.
