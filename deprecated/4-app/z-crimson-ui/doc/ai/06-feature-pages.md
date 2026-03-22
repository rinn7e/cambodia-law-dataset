# Prompt 06: Application Features

Build the specific application features: Mock Pages and the Cambodia Law Sub-site.

## Analysis Targets
- `src/page/mock/product-page/product-page.tsx`
- `src/page/mock/doc-page/doc-page.tsx`
- `src/page/mock/all-elements-page/all-elements-page.tsx`
- `src/website/cambodia-law/law-navbar.tsx`
- `src/website/cambodia-law/law-footer.tsx`
- `src/website/cambodia-law/law-index-page.tsx`
- `src/website/cambodia-law/constitution-page.tsx`
- `src/website/cambodia-law/traffic-law-page.tsx`
- `src/website/cambodia-law/index.ts`

## Instructions

1.  **Mock Pages**
    *   `src/page/mock/product-page/product-page.tsx`: A complete landing page using `Navbar` (config), `Card` grid, and Hero section.
    *   `src/page/mock/doc-page/doc-page.tsx`: A documentation layout with `Sidebar` and `Article`.
    *   `src/page/mock/all-elements-page/all-elements-page.tsx`: Aggregation of all showcases.

2.  **Cambodia Law Sub-site**
    *   Create `src/website/cambodia-law/` directory.
    *   `law-navbar.tsx`: Specialized Navbar configuration.
    *   `law-index-page.tsx`: Landing page with cards linking to laws.
    *   `traffic-law-page.tsx` & `constitution-page.tsx`: Full content pages using `Sidebar` (chapters) and `Article` (legal text).

3.  **Routing & Export**
    *   Export the main `LawIndexPage` container from `src/website/cambodia-law/index.ts`.
    *   Update `src/app.tsx` to handle the `WebsiteCambodiaLaw` route and its sub-routes.
