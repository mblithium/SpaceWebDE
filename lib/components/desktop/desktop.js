(
    function desktop() {
        const HTMLELEMENT = document.createElement("div");
        HTMLELEMENT.id = "desktop";
        HTMLELEMENT.className = "desktop";
        HTMLELEMENT.style.position = "absolute";
        HTMLELEMENT.style.width = "100%";
        HTMLELEMENT.style.height = "calc(100% - 50px)";
        HTMLELEMENT.style.backgroundImage = `url(${SW_userData.wallpaper})`;

        const note = document.createElement("div");
        note.innerHTML = `
            <p>In development, bugs may occur.</p>
            <p>Use "Shift" + "W" to center all the windows on the screen if you've missed any.</p>
        `
        note.style.position = "absolute";
        note.style.textAlign = "right";
        note.style.top = "calc(100% - 60px)";
        note.style.right = "5px";
        note.style.color = "white";

        HTMLELEMENT.appendChild(note);
        document.querySelector("#system").append(HTMLELEMENT);
    }
)()

function reloadDesktop() {
    renderUI()
}