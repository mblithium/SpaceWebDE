function swdeApp_browser() {
    const swdeAppBrowser = document.createElement("div");
    swdeAppBrowser.className = "swdeapp-browser";
    swdeAppBrowser.innerHTML = `
        <div class="swdeApp_browser_navbar">
            <button class="btn-back">&lt</button>
            <button class="btn-next">&gt</button>
        </div>
        <div class="swdeApp_browser_searchbar">
            <input type="text" />
        </div>
        <div class="swdeApp_browser_page"></div>
    `
    const homepage = "https://mblithium.neocities.org"
    const history = [homepage];

    const searchbar = swdeAppBrowser.querySelector(".swdeApp_browser_searchbar input");
    searchbar.placeholder = "Search Anything";
    searchbar.style.width = "100%";

    let frame = document.createElement("iframe");
    frame.style.width = "100%";
    frame.style.height = "100%";
    frame.style.display = "block";
    frame.style.position = "relative";
    frame.src = homepage;

    swdeAppBrowser.querySelector(".swdeApp_browser_page").append(frame);

    const navbar = swdeAppBrowser.querySelector(".swdeApp_browser_navbar");
    const backbtn = navbar.querySelector("button.btn-back");

    backbtn.addEventListener("click", (e) => {
        if (history.length > 1) {
            history.pop();
            frame.src = history[history.length - 1];
            console.log(history);
        }
    })

    searchbar.addEventListener("keypress", (e) => {
        if(e.key == "Enter") {
            frame.src = e.target.value;
            history.push(e.target.value)
        }
    })

    /* Load Styles */
    swdehandlesrc("loadstyle", "./lib/apps/browser/browser.css", "browserapp");

    /* Criar uma função para carregar estilos css para cada app */
    return swdeAppBrowser;
}