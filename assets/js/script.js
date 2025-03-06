const toggleButton = document.getElementById("darkModeToggle");
    
        // Check local storage for saved theme
        if (localStorage.getItem("theme") === "dark") {
            document.body.setAttribute("data-bs-theme", "dark");
            toggleButton.textContent = "☀️ Svetli režim";
        }
    
        toggleButton.addEventListener("click", function () {
            if (document.body.hasAttribute("data-bs-theme")) {
                document.body.removeAttribute("data-bs-theme");
                localStorage.setItem("theme", "light");
                toggleButton.textContent = "🌙 Tamni režim";
            } else {
                document.body.setAttribute("data-bs-theme", "dark");
                localStorage.setItem("theme", "dark");
                toggleButton.textContent = "☀️ Svetli režim";
            }
        });