# Prompt 04: Configurable Shared Components

Create high-level components using the Configuration Object Pattern for maximum flexibility.

## Analysis Targets
- `src/component/button.tsx`
- `src/component/navbar.tsx`
- `src/component/sidebar.tsx`
- `src/component/article.tsx`
- `src/component/card.tsx`
- `src/component/footer.tsx`
- `src/component/index.ts` (update)

## Instructions

1.  **Button**
    *   `src/component/button.tsx`.
    *   Define `ButtonConfig` (id, style, size, label, state, padding).
    *   Implement `defaultButton()` factory.
    *   Ensure styles match the design system (primary, outline, ghost, etc.).

2.  **Navigation Components**
    *   `src/component/navbar.tsx`: Accepts `NavbarConfig` (brand, links, alignment, slots).
    *   `src/component/sidebar.tsx`: Accepts `SidebarConfig` (grouped key-value navigation items).
    *   `src/component/footer.tsx`: Accepts `FooterConfig` (multicolumn links/text).

3.  **Content Containers**
    *   `src/component/article.tsx`: Accepts `ArticleConfig` (title, content). Use `fp-ts/Option` for the title.
    *   `src/component/card.tsx`: Accepts `CardConfig` (title, description, icon, content, hoverEffect).

4.  **Export**
    *   Update `src/component/index.ts` to export these new components and their config types.
