const toggleBtn = document.getElementById("toggle-theme");
const themeStyle = document.getElementById("css");

toggleBtn.addEventListener("click", function() {
    if (themeStyle.getAttribute("href") === "style_claro.css") {
        themeStyle.setAttribute("href", "style_escuro.css");
    } else {
        themeStyle.setAttribute("href", "style_claro.css");
    }
});
