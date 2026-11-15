// Accessible World - light / dark theme toggle
// Loaded in <head> so the saved theme is applied before the page paints (no flash).
(function () {
    var STORAGE_KEY = "aw-theme";
    var root = document.documentElement;

    function getSavedTheme() {
        try {
            return localStorage.getItem(STORAGE_KEY);
        } catch (error) {
            return null;
        }
    }

    function getPreferredTheme() {
        var saved = getSavedTheme();
        if (saved === "light" || saved === "dark") {
            return saved;
        }
        return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    }

    function updateButton(button, theme) {
        var isDark = theme === "dark";
        button.setAttribute("aria-pressed", String(isDark));
        button.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
        button.title = isDark ? "Switch to light mode" : "Switch to dark mode";
        button.querySelector(".theme-toggle-icon").textContent = isDark ? "☀" : "☾";
        button.querySelector(".theme-toggle-label").textContent = isDark ? "Light" : "Dark";
    }

    function applyTheme(theme) {
        root.setAttribute("data-theme", theme);
        var metaTheme = document.querySelector('meta[name="theme-color"]');
        if (metaTheme) {
            metaTheme.setAttribute("content", theme === "dark" ? "#0d1a1d" : "#092f35");
        }
        document.querySelectorAll(".theme-toggle").forEach(function (button) {
            updateButton(button, theme);
        });
    }

    // Apply immediately
    applyTheme(getPreferredTheme());

    function createToggle() {
        var navbar = document.querySelector(".navbar");
        if (!navbar || navbar.querySelector(".theme-toggle")) {
            return;
        }

        var button = document.createElement("button");
        button.type = "button";
        button.className = "theme-toggle";
        button.innerHTML =
            '<span class="theme-toggle-icon" aria-hidden="true"></span>' +
            '<span class="theme-toggle-label"></span>';

        button.addEventListener("click", function () {
            var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
            try {
                localStorage.setItem(STORAGE_KEY, next);
            } catch (error) {
                // Storage unavailable; theme still changes for this page view
            }
            applyTheme(next);
        });

        var container = navbar.querySelector(".nav-actions") || navbar.querySelector(".nav-links") || navbar;
        container.insertBefore(button, container.firstChild);
        updateButton(button, root.getAttribute("data-theme"));
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", createToggle);
    } else {
        createToggle();
    }

    // Follow the system setting if the visitor hasn't picked a theme yet
    if (window.matchMedia) {
        var media = window.matchMedia("(prefers-color-scheme: dark)");
        var onChange = function (event) {
            if (!getSavedTheme()) {
                applyTheme(event.matches ? "dark" : "light");
            }
        };
        if (media.addEventListener) {
            media.addEventListener("change", onChange);
        } else if (media.addListener) {
            media.addListener(onChange);
        }
    }
})();
