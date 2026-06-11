document.addEventListener("DOMContentLoaded", () => {
    // --- 1. Light / Dark Mode Toggle Implementation ---
    const themeToggleBtn = document.getElementById("theme-toggle");
    const toggleIcon = themeToggleBtn.querySelector("i");
    
    const currentTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", currentTheme);
    updateToggleIcon(currentTheme);

    themeToggleBtn.addEventListener("click", () => {
        let theme = document.documentElement.getAttribute("data-theme");
        theme = (theme === "dark") ? "light" : "dark";
        
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
        updateToggleIcon(theme);
    });

    function updateToggleIcon(theme) {
        if (theme === "dark") {
            toggleIcon.className = "fa-solid fa-sun";
        } else {
            toggleIcon.className = "fa-solid fa-moon";
        }
    }

    // --- 2. Interactive Accordion Configuration ---
    const questions = document.querySelectorAll(".qa-question");

    questions.forEach(question => {
        question.addEventListener("click", () => {
            const currentItem = question.parentElement;
            
            document.querySelectorAll(".qa-item").forEach(item => {
                if (item !== currentItem) {
                    item.classList.remove("active");
                }
            });

            currentItem.classList.toggle("active");
        });
    });
});