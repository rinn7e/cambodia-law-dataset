# Prompt 5: Pages and Website Content

Now that we have the architecture and components, let's build the actual pages.

## Mock Pages (`src/page/mock/`)

1.  **Product Page** (`src/page/mock/product-page/product-page.tsx`)
    *   Use `Navbar` (Config) for a product header.
    *   Create a Hero section with large text and CTA buttons.
    *   Create a Features Grid using `Card` components.
    *   Create a simple Footer.

2.  **Documentation Page** (`src/page/mock/doc-page/doc-page.tsx`)
    *   Use `Sidebar` (Config) for navigation.
    *   Use `Article` (Config) for documentation content.

3.  **All Elements Page** (`src/page/mock/all-elements-page/all-elements-page.tsx`)
    *   A massive showcase page that imports and displays every single component (`Text`, `Form`, `Table`, etc.) to demonstrate the design system.

## Website Sub-app: Cambodia Law (`src/website/cambodia-law/`)

This is a specific "sub-site" implementation within the app.

1.  **Structure**:
    *   `law-navbar.tsx`: Specialized Navbar for this section.
    *   `law-footer.tsx`: specialized Footer.
    *   `law-index-page.tsx`: Landing page with cards linking to specific laws.

2.  **Law Pages** (`traffic-law-page.tsx`, `constitution-page.tsx`)
    *   Layout: Flex row.
    *   **Left**: `Sidebar` (Config) showing chapters/articles navigation.
    *   **Right**: Main content area using `Article` (Config) components to render the legal text.
    *   Use `fp-ts/Option` to handle Article titles.

## Router Association
Ensure these pages are correctly imported in `src/app.tsx` and associated with their respective routes in the `renderRoute` function.
