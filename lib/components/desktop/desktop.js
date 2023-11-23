(
    function desktop() {
        swdehandlesrc("loadstyle", "./lib/components/desktop/desktop.css", "desktop");

        const HTMLELEMENT = document.createElement("div");
        HTMLELEMENT.id = "desktop";
        HTMLELEMENT.className = "desktop";
        HTMLELEMENT.style.backgroundImage = `url(${SW_userData.wallpaper})`;

        const note = document.createElement("div");
        note.innerHTML = `
            <p>In development, bugs may occur.</p>
            <p>Use "Shift" + "W" to center all the windows on the screen if you've missed any.</p>
        `
        
        note.className = "desktopdevnote";

        HTMLELEMENT.appendChild(note);
        document.querySelector("#system").append(HTMLELEMENT);
    }
)()

function reloadDesktop() {
    renderUI()
}