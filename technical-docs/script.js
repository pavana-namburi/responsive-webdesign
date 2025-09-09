const toggle = document.getElementById("theme-switch");
const body = document.body;
const themeText = document.getElementById("theme-text");

toggle.addEventListener("change", () => {
    if (toggle.checked) {
        body.classList.add("dark-mode");
        themeText.textContent = "Light Mode";
    } else {
        body.classList.remove("dark-mode");
        themeText.textContent = "Dark Mode";
    }
});
