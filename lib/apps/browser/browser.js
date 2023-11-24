function swdeApp_browser(args) {
    console.log(args)
    const swdeAppBrowser = document.createElement("div");
    swdeAppBrowser.className = "swdeapp-browser";
    swdeAppBrowser.innerHTML = `
        <div class="swdeApp_browser_navbar">
            <button class="btn-back">&lt</button>
            <button class="btn-next" style="display: none;">&gt</button>
        </div>
        <div class="swdeApp_browser_searchbar">
            <input type="text" />
        </div>
        <div class="swdeApp_browser_page"></div>
    `
    const homepage = "https://mblithium.neocities.org"
    const history = [homepage];
    let actualpage = "";

    const searchbar = swdeAppBrowser.querySelector(".swdeApp_browser_searchbar input");
    searchbar.placeholder = "Search Anything";
    searchbar.style.width = "100%";

    let frame = document.createElement("iframe");
    frame.style.width = "100%";
    frame.style.height = "100%";
    frame.style.display = "block";
    frame.style.position = "relative";

    function changePage(url) {
        if(actualpage != url) {
            frame.src = url;
            searchbar.value = url;
            history.push(url);
            actualpage = url;
        }
        console.log("History: ", history, history.length);
        console.log("Actualpage: ", actualpage)
    }

    changePage(homepage);

    if (args) {
        if(args.link) {
            changePage(args.link);
        }
    }
    

    swdeAppBrowser.querySelector(".swdeApp_browser_page").append(frame);

    const navbar = swdeAppBrowser.querySelector(".swdeApp_browser_navbar");
    const backbtn = navbar.querySelector("button.btn-back");
    const nextbtn = navbar.querySelector("button.btn-next");

    backbtn.addEventListener("click", (e) => {
        if (history.length > 1) {
            changePage(history[history.length - 1]);
            history.pop();
        }
    })

    nextbtn.addEventListener("click", (e) => {
        return 0;
    })

    searchbar.addEventListener("keypress", (e) => {
        if(e.key == "Enter") {
            changePage(e.target.value);
        }
    })

    
    /* Load Styles */
    swdehandlesrc("loadstyle", "./lib/apps/browser/browser.css", "browserapp");

    /* Criar uma função para carregar estilos css para cada app */
    return swdeAppBrowser;
}