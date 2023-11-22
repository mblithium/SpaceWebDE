(
    function desktop() {
        const HTMLELEMENT = document.createElement("div");
        HTMLELEMENT.id = "desktop";
        HTMLELEMENT.className = "desktop";
        HTMLELEMENT.style.position = "absolute";
        HTMLELEMENT.style.width = "100%";
        HTMLELEMENT.style.height = "calc(100% - 50px)";
        HTMLELEMENT.style.backgroundImage = `url(${SW_userData.wallpaper})`;

        document.querySelector("#system").append(HTMLELEMENT);
    }
)()

function reloadDesktop() {
    renderUI()
}