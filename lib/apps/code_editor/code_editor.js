swdeapp.swdeapp_code_editor = function (args) {
    const HTMLELEMENT = swdeutils.CreateHTML(`
        <div class="swdeapp_code_editor">
            <div class="toolbar">
                <button>Save</button>
                <button>Load</button>
                <button class="about">About</button>
            </div>
            <div class="flems"></div>
        </div>
    `);


    let loadflems = swdehandlesrc("load", "./lib/apps/code_editor/flems.js", "flems");
    loadflems.onload = function () {
        const flems = Flems(HTMLELEMENT.querySelector(".flems"), {
            files: [{
                name: 'index.html',
                content: ''
            },
            {
                name: 'app.js',
                content: ''
            }]
        });
        console.log(flems);
    }

    HTMLELEMENT.querySelector("button.about").addEventListener("click", () => {
        window.alert("Created with FLEMS. Under development...")
    })


    /* Load Styles */
    swdehandlesrc("loadstyle", "./lib/apps/code_editor/code_editor.css", "textditor");

    return HTMLELEMENT;
}

