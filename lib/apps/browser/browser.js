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
    let mode = args?.mode ? args.mode : "external"; // local, external
    let actualpage = "";

    /* Search and Navbar */
    const searchbar = swdeAppBrowser.querySelector(".swdeApp_browser_searchbar input");
    searchbar.placeholder = "Search Anything";
    searchbar.style.width = "100%";

    const navbar = swdeAppBrowser.querySelector(".swdeApp_browser_navbar");
    const backbtn = navbar.querySelector("button.btn-back");
    const nextbtn = navbar.querySelector("button.btn-next");
    /* END Search and Navbar */

    function loadLocal(url) {
        /* work in progress */
        swdeAppBrowser.querySelector(".swdeApp_browser_page").append(browserNewPage);
    }

    function loadExternal(url) {
        let frame = document.createElement("iframe");
        frame.style.width = "100%";
        frame.style.height = "100%";
        frame.style.display = "block";
        frame.style.position = "relative";
        frame.src = url;
        frame.onload = console.log("Carregou outro link.")

        actualpage = url;
        searchbar.value = url;

        swdeAppBrowser.querySelector(".swdeApp_browser_page").innerHTML = "";
        swdeAppBrowser.querySelector(".swdeApp_browser_page").append(frame);
    }

    function changePage(url, mode) {
        if (actualpage === url) {
            return console.log("Ops, is same origin.");
        }
        switch (mode) {
            case "local":
                loadLocal(url);
                break
            case "external":
                loadExternal(url);
                break;
            default:
                console.log("An error ocur, check the logs.\n", "URL: ", url, "MODE: ", mode);
        }
    }

    args?.link && args?.mode ? changePage(args.link, args.mode) : changePage(homepage, mode);
    
    /*
    backbtn.addEventListener("click", (e) => {
        return 0;
    })

    nextbtn.addEventListener("click", (e) => {
        return 0;
    })
    */

    searchbar.addEventListener("keypress", (e) => {
        if(e.key == "Enter") {
            changePage(e.target.value, "external");
        }
    })

    
    /* Load Styles */
    swdehandlesrc("loadstyle", "./lib/apps/browser/browser.css", "browserapp");

    /* Criar uma função para carregar estilos css para cada app */
    return swdeAppBrowser;
}