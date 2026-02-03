# Prompt 1: Project Setup

You are an expert Frontend Engineer. Your task is to set up a new React project called `z-crimson-ui` from scratch.

## Tech Stack
- **Framework**: React 19.1 + Vite 6.x
- **Language**: TypeScript 5.7
- **Styling**: Tailwind CSS v4.1 (using `@theme` directive)
- **State Management**: `react-tea-cup` (Elm Architecture)
- **Functional Programming**: `fp-ts`

## Step 1: Initialize Project
Create a new project using Vite with React and TypeScript.
Initialize `git`.

## Step 2: Dependencies
Install the following dependencies:
- `fp-ts`: ^2.16.9
- `react-tea-cup`: 5.1.1
- `react`: ^19.1.0
- `react-dom`: ^19.1.0

Dev dependencies:
- `tailwindcss`: ^4.1.0
- `@tailwindcss/vite`: ^4.1.0
- `typescript`: ~5.7.3
- `vite`: ^6.1.0

## Step 3: Configuration Files

### `vite.config.ts`
Configure Vite to use `@tailwindcss/vite` and alias `@` to `./src`.

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'url'

export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
```

### `tsconfig.json`
Ensure Strict mode is on and setup path alias `@/*`.

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src"]
}
```

### `src/index.css`
Setup the global styles and the GitHub-inspired theme using Tailwind CSS v4 `@theme`.

```css
@import 'tailwindcss';

@theme {
  /* GitHub Primer Color Palette - Light Mode Base */
  --color-canvas-default: #ffffff;
  --color-canvas-subtle: #f6f8fa;
  --color-canvas-inset: #eff2f5;

  --color-fg-default: #1f2328;
  --color-fg-muted: #656d76;
  --color-fg-subtle: #6e7781;
  
  --color-border-default: #d0d7de;
  --color-border-muted: #d8dee4;

  --color-accent-fg: #0969da;
  --color-accent-emphasis: #0969da;
  --color-accent-muted: rgba(84, 174, 255, 0.4);
  --color-accent-subtle: #ddf4ff;

  /* Add other colors (success, danger, attention, done) following GitHub Primer system */
  
  /* Typography */
  --font-family-sans: 'Outfit', -apple-system, system-ui, sans-serif;
  --font-family-brand: 'Space Grotesk', sans-serif;
}

/* Dark Mode Theme Override */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme='light']) {
    --color-canvas-default: #0d1117;
    --color-canvas-subtle: #161b22;
    --color-canvas-inset: #010409;
    
    --color-fg-default: #e6edf3;
    --color-fg-muted: #8d96a0;
    
    --color-border-default: #30363d;
    --color-border-muted: #21262d;
    
    --color-accent-fg: #58a6ff;
    --color-accent-emphasis: #1f6feb;
    /* ... adjust other variables for dark mode */
  }
}

/* Base Styles */
html {
  font-family: var(--font-family-sans);
  color: var(--color-fg-default);
  background-color: var(--color-canvas-default);
}
```

## Step 4: Font Setup
In `index.html`, add the Google Fonts: 'Outfit' (sans) and 'Space Grotesk' (brand).
