# Prompt 4: Complex Shared Components (Config Pattern)

For more complex components, we will use a **Configuration Object Pattern**. Instead of passing many individual props, pass a single `config` object. Use `fp-ts/Option` for optional fields where appropriate.

## Components to Create

1.  **Button** (`src/component/button.tsx`)
    *   `ButtonConfig`: `{ id, buttonStyle, size, label, state, padding, class }`
    *   `defaultButton()`: Factory for default config.
    *   Styles: Primary, Default, Danger, Ghost.
    *   States: Enabled, Disabled, Loading.

2.  **Navbar** (`src/component/navbar.tsx`)
    *   `NavbarConfig`: `{ brand, links, linksAlignment, slotAfterBrand, slotEnd }`
    *   Renders a sticky top navigation bar.

3.  **Sidebar** (`src/component/sidebar.tsx`)
    *   `SidebarConfig`: `{ groups: { title?, items: { label, href, active }[] }[] }`
    *   Renders a vertical navigation menu, usually for documentation.

4.  **Article** (`src/component/article.tsx`)
    *   `ArticleConfig`: `{ title: Option<string>, content: ReactNode, class? }`
    *   Renders a content block with a title and body.

5.  **Card** (`src/component/card.tsx`)
    *   `CardConfig`: `{ title: Option<string>, description, icon, content, hoverEffect }`
    *   Renders a card with optional icon and hover effects.

6.  **Footer** (`src/component/footer.tsx`)
    *   `FooterConfig`: `{ columns: { title, content }[] }`
    *   Renders a multi-column footer.

## Implementation Details
- Ensure all config interfaces are exported.
- Provide `default...` helper functions to create basic configs.
- Validates types with TypeScript.
- Update `src/component/index.ts` to export these new components.
