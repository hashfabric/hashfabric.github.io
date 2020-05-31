window.onload = function () {
    var toggle = document.getElementById("dark-mode-toggle");
    var darkTheme = document.getElementById("dark-mode-theme");

    setTheme(localStorage.getItem("dark-mode-storage") || "dark");

    /*if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme(localStorage.getItem("dark-mode-storage") || "dark");
        console.log('dark media')
    } else {
        setTheme(localStorage.getItem("dark-mode-storage") || "light");
        console.log('light media')
    }*/

    toggle.addEventListener("click", () => {
        if (toggle.className === "fas fa-moon") {
            setTheme("dark");
        } else if (toggle.className === "fas fa-sun") {
            setTheme("light");
        }
    });

    function setTheme(mode) {
        localStorage.setItem("dark-mode-storage", mode);
        if (mode === "dark") {
            darkTheme.disabled = false;
            toggle.className = "fas fa-sun";
        } else if (mode === "light") {
            darkTheme.disabled = true;
            toggle.className = "fas fa-moon";
        }
    }
}
