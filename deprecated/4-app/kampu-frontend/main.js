import "@fontsource/chenla/index.css"
import "./src/assets/style.css";
import { Elm } from "./src/Main.elm";

// Handle development mode transformations
if (process.env.NODE_ENV === "development") {
    const ElmDebugTransform = await import("elm-debug-transformer")
    ElmDebugTransform.register({
        simple_mode: true
    })
}

// Get saved bookmarks from localStorage
const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");

// Initialize Elm app
const root = document.querySelector("#app div");
const app = Elm.Main.init({
    node: root,
    flags: {
        bookmarks: savedBookmarks
    }
});

// PORTS

// Port: Save bookmarks to localStorage
app.ports.saveBookmarks.subscribe((bookmarks) => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
});

// Port: Scroll to element by ID
app.ports.scrollToId.subscribe((id) => {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
});

// Listen for storage changes in other tabs
window.addEventListener("storage", (event) => {
    if (event.key === "bookmarks") {
        app.ports.onBookmarksUpdate.send(JSON.parse(event.newValue || "[]"));
    }
});

// Update scroll position for Elm to handle UI showing/hiding
window.addEventListener("scroll", () => {
    if (app.ports.onScroll) {
        app.ports.onScroll.send(window.scrollY | 0);
    }
}, { passive: true });
