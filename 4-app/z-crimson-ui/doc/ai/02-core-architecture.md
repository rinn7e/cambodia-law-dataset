# Prompt 02: Core Architecture

Implement the core logic using The Elm Architecture (TEA) pattern.

## Analysis Targets
- `src/types.ts`
- `src/app.tsx`
- `src/main.tsx`

## Instructions

1.  **Global Types**
    *   Create `src/types.ts`.
    *   Define `Route` union type for navigation (Home, Pages, Mocks, LawSite).
    *   Define `ThemeMode` ('light' | 'dark' | 'system').
    *   Define `Model` state (route, themeMode, sidebarOpen, dialogOpen).
    *   Define `Msg` actions (Navigate, SetTheme, ToggleSidebar, OpenDialog, CloseDialog).

2.  **Application Logic (App.tsx)**
    *   Create `src/app.tsx`.
    *   Implement `router` using `react-tea-cup` Router.
    *   Implement `init` function to parse location and set initial Model.
    *   Implement `update` function to handle Msg state transitions.
    *   Implement `applyTheme` side effect helper.
    *   Create the `view` function:
        *   Render a persistent `Header` (with Theme Toggle & Brand).
        *   Render a `Sidebar` for navigation (collapsible).
        *   Render the `Main` content area switching on `model.route`.
    *   Export `App` component wrapped in `ProgramWithNav`.

3.  **Entry Point (main.tsx)**
    *   Create `src/main.tsx`.
    *   Mount the `App` component into the DOM inside `StrictMode`.
