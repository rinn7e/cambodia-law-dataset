# Project Specification: Cambodian Laws Explorer

## 1. Overview
A frontend web application designed to showcase all laws of Cambodia. The platform provides an intuitive and accessible interface for users to browse legal documents, read detailed articles, and save specific laws or articles for quick reference later.

## 2. Tech Stack
- **Core Language/Framework**: Elm (for robust, type-safe, and predictable UI state management via The Elm Architecture)
- **Build Tool**: Vite (for fast development and bundled production builds)
- **Styling Utility**: Tailwind CSS
- **UI Component Library**: None (Custom Tailwind components for maximum control)

## 3. Core Features & Requirements

### 3.1. Browsing & Discovery
- **Home / Dashboard**:
  - **Popular Laws**: A section highlighting frequently referenced or important laws (e.g., Constitution, Civil Code, Penal Code).
  - **All Laws List**: A paginated or infinitely scrolling list of all available laws.
- **Navigation/Sorting**: Users should be able to browse laws efficiently. (Search and categorical filtering are recommended enhancements).

### 3.2. Law Detail & Reading Experience
- **Law Overview**: Display metadata for the selected law (Title, Enactment Date, Category, etc.).
- **Article Viewer**:
  - Present a clear, readable list of all articles contained within the law.
  - Structure the reading view cleanly (potentially grouping articles by Chapter or Section if the data supports it).
  - High focus on typography, readability, and mobile responsiveness.

### 3.3. Bookmarking System
- **Granular Saving**: 
  - Ability to bookmark an entire Law.
  - Ability to bookmark a specific Article within a law.
- **Bookmarks View**: A dedicated page or slide-out drawer where users can view, manage, and quickly navigate to their bookmarked laws and articles.
- **Persistence**: Bookmarks should be saved locally (e.g., via browser `localStorage` using Elm Ports) or synced to a backend user account, depending on full-stack scope.

## 4. UI/UX Design Guidelines (Tailwind)
- **Aesthetic**: Simple, minimalistic, and "pleasing to the eye." The design focuses on a **clean light theme** to provide a printed-paper feel that is conducive to reading.
- **Reading Focus**: High contrast, generous whitespace, and optimal typography (e.g., serif fonts for long-form text, carefully managed line heights) to ensure an excellent reading experience.
- **Responsiveness**: Mobile-first design. The reading experience must be excellent on both smartphones and desktop displays, maintaining the same minimalistic elegance across all screen sizes.
- **Key Components**:
  - Navigation bar and mobile menu for main site navigation and bookmark access.
  - Card components for displaying laws in lists/grids.
  - Icon toggles for the bookmarking actions.
  - Typography utility classes from Tailwind for optimal reading line-height and letter-spacing.

## 5. Technical Implementation Notes (Elm)
- **Routing**: Utilize `elm/browser` Application for Single Page Application (SPA) routing (e.g., `/`, `/laws`, `/laws/:id`, `/bookmarks`).
- **State Management**: standard Elm Model-View-Update (MVU).
- **JS Interop (Ports)**: Required for interacting with local storage for bookmarks (if no backend authentication is present) and potentially for initializing specific DOM-dependent elements or analytics.

## 6. Future Scope / Next Steps
- Full-text search across all laws and articles.
- Dual-language support (Khmer and English translation toggles).
- Offline reading capabilities (PWA setup).
