function swdeApp_browser() {
    const swdeAppBrowser = document.createElement("div");
    swdeAppBrowser.className = "swdeapp-browser";
    swdeAppBrowser.innerHTML = `
        <div class="swdeApp_browser_searchbar">
            <input type="text" />
        </div>
        <div class="swdeApp_browser_page"></div>
    `
    const searchbar = swdeAppBrowser.querySelector(".swdeApp_browser_searchbar input");
    searchbar.placeholder = "Search Anything";
    searchbar.style.width = "100%";

    let frame = document.createElement("iframe");
    frame.style.width = "100%";
    frame.style.height = "100%";
    frame.style.display = "block";
    frame.style.position = "relative";
    frame.src = "https://mblithium.neocities.org";

    swdeAppBrowser.querySelector(".swdeApp_browser_page").append(frame);
    console.log(swdeAppBrowser);

    searchbar.addEventListener("change", (e) => {
        frame.src = e.target.value;
    })

    /* Load Styles */
    swdehandlesrc("loadstyle", "./lib/apps/browser/browser.css", "browserapp");

    /* Criar uma função para carregar estilos css para cada app */
    return swdeAppBrowser;
}