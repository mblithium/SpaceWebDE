
function swdeapp_texteditor(args) {
    const HTMLELEMENT = swdeCreateHTML(`
        <div class="swdeapp_texteditor">
            <div class="toolbar">
                <button class="new">New</button>
                <button class="load">
                    <form>
                        <label for="file">Load</label>
                        <input type="file" class="file" name="file" />
                    </form>
                </button>
                <button class="about">About</button>
            </div>
            <div class="editor">
                <textarea class="content" autofocus="autofocus" placeholder=""></textarea>
            </div>
        </div>
    `);
    
    const placeholders = [
        "On a cold, rainy night...",
        "Write amazing things here.",
        "Let your mind flow like water",
        "You can organize to-do lists here too! :)",
        "How are you today?",
        "Okay... maybe silence is worth a thousand words."
    ]

    function changePlaceholder() {
        let select = Math.floor(Math.random() * (placeholders.length - 1 + 1) + 1);
        HTMLELEMENT.querySelector(".content").placeholder = placeholders[select - 1];

    }

    changePlaceholder();
    
    HTMLELEMENT.querySelector("button.about").addEventListener("click", () => {
        alert("text editor - under development")
    })

    /* Load Styles */
    swdehandlesrc("loadstyle", "./lib/apps/texteditor/texteditor.css", "textditor");

    return HTMLELEMENT;
}

