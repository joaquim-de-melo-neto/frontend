let darkmode = localStorage.getItem("darkmode");
const button = document.getElementById("theme-switch");

enableDarkMode = () => {
    document.body.classList.add("dark");
    localStorage.setItem("darkmode", "active");
}

enableLightMode = () => {
    document.body.classList.remove("dark");
    localStorage.setItem("darkmode", null);
}

if (darkmode === "active") enableDarkMode();

button.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode")
    darkmode !== "active" ? enableDarkMode() : enableLightMode()
    }
)