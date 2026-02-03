# Prompt 2: Core Architecture (TEA + Global Types)

Now that the project is set up, let's implement the core architecture using The Elm Architecture (TEA) pattern with `react-tea-cup`.

## Step 1: Global Types (`src/types.ts`)
Define the core types for the application state (`Model`) and actions (`Msg`).

```typescript
import * as O from 'fp-ts/Option'

// Route types
export type LawRoute = 'index' | 'constitution' | 'traffic-law'

export type Route =
  | { _tag: 'Home' }
  | { _tag: 'PageText' }
  | { _tag: 'PageList' }
  | { _tag: 'PageForm' }
  // ... add other page routes
  | { _tag: 'MockProduct' }
  | { _tag: 'WebsiteCambodiaLaw'; lawRoute: LawRoute }

export type ThemeMode = 'light' | 'dark' | 'system'

export type Model = {
  route: Route
  themeMode: ThemeMode
  sidebarOpen: boolean
  dialogOpen: O.Option<string>
}

export type Msg =
  | { _tag: 'Navigate'; route: Route }
  | { _tag: 'SetTheme'; mode: ThemeMode }
  | { _tag: 'ToggleSidebar' }
  | { _tag: 'OpenDialog'; dialogId: string }
  | { _tag: 'CloseDialog' }
  | { _tag: 'UrlChanged'; location: Location }
```

## Step 2: Main Application Logic (`src/app.tsx`)
Implement the TEA `Program`.

1.  **Router**: Use `react-tea-cup` Router to define route parsing.
2.  **Init**: Initialize `Model` based on current location.
3.  **Update**: Pure function to handle `Msg` and update `Model`.
4.  **View**: Main layout component.
    *   Include a Sidebar navigation.
    *   Include a Header with Theme Toggle.
    *   Include a Main content area that renders the current Route.
5.  **App Component**: Export `App` wrapped in `ProgramWithNav`.

## Step 3: Entry Point (`src/main.tsx`)
Mount the `App` component into the DOM.

```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import App from '@/app'

const container = document.getElementById('root')
if (container) {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}
```
