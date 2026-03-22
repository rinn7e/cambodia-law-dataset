# Prompt 01: Project Setup

Establish the foundation of the `z-crimson-ui` library and showcase application.

## Analysis Targets
- `package.json`
- `vite.config.ts`
- `tsconfig.json`
- `index.html`
- `src/index.css`

## Instructions

1.  **Initialize Project**
    *   Create a React 19 + TypeScript project using Vite.
    *   Initialize a git repository.

2.  **Dependencies**
    *   Install runtime dependencies: `react`, `react-dom`, `react-tea-cup`, `fp-ts`.
    *   Install dev dependencies: `tailwindcss`, `@tailwindcss/vite`, `vite`, `typescript`, `@types/react`, `@types/react-dom`.
    *   Ensure exact versions match `package.json`.

3.  **Vite Configuration**
    *   Update `vite.config.ts` to use `@tailwindcss/vite` plugin.
    *   Configure path alias `@` to point to `./src`.

4.  **TypeScript Configuration**
    *   Update `tsconfig.json` to enable strict mode and support the `@/*` path alias.

5.  **Global Styles & Theme**
    *   Create `src/index.css` implementing the GitHub-inspired design system.
    *   Use Tailwind CSS v4 `@theme` directive to define CSS variables for:
        *   Colors (`canvas`, `fg`, `accent`, `success`, `attention`, `danger`).
        *   Typography (`font-family-sans`, `font-family-brand`).
        *   Spacing, Shadows, Border Radius.
    *   Implement Dark Mode using `prefers-color-scheme` and a `data-theme` override.

6.  **HTML Setup**
    *   Update `index.html` to include Google Fonts ('Outfit' and 'Space Grotesk').
    *   Set appropriate meta tags and title.
