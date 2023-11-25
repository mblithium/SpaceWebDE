(
    function desktop() {
        swdehandlesrc("loadstyle", "./lib/components/desktop/desktop.css", "desktop");

        const DESKTOP = swdeCreateHTML(`
            <div id="desktop" class="desktop"></div>
        `);
        
        DESKTOP.style.backgroundImage = `url(${SW_userData.wallpaper})`;

        const note = document.createElement("div");
        note.innerHTML = `
            <p>In development, bugs may occur.</p>
            <p>Use "Alt" + "W" to center all the windows on the screen if you've missed any.</p>
        `
        
        note.className = "desktopdevnote";

        DESKTOP.appendChild(note);
        document.querySelector("#system").append(DESKTOP);
    }
)()

function reloadDesktop() {
    renderUI()
}