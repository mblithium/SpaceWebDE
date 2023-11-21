function swdeApp_browser() {
    const swdeAppBrowser = document.createElement("div");
    swdeAppBrowser.className = "swdeapp-browser";
    swdeAppBrowser.innerHTML = `
        <div class="swdeApp_browser_searchbar">
            <input type="text" />
        </div>
        <div class="swdeApp_browser_page"></div>
    `
    swdeAppBrowser.style.width = "100%";
    swdeAppBrowser.style.height = "100%";
    swdeAppBrowser.style.overflow = "scroll";
    swdeAppBrowser.style.position = "relative";

    const searchbar = swdeAppBrowser.querySelector(".swdeApp_browser_searchbar");
    searchbar.placeholder = "Search Anything";
    searchbar.style.width = "100%";

    console.log(swdeAppBrowser);
    /* Criar uma função para carregar estilos css para cada app */
    return swdeAppBrowser;
}