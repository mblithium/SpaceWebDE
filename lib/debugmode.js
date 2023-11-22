(() => {
    /* Variables */
    /*
    const apps = [
        { name: "Paint", app: "paint", icon: "" }, 
        { name: "Terminal 1", app: "terminal", icon: "" },
        { name: "Terminal 2", app: "terminal", icon: "" },
        { name: "Terminal 3", app: "terminal", icon: "" },
        { name: "Terminal 4", app: "terminal", icon: "" },
        { name: "Terminal 5", app: "terminal", icon: "" },
        { name: "Terminal 6", app: "terminal", icon: "" },
        { name: "Terminal 7", app: "terminal", icon: "" },
        { name: "Terminal 8", app: "terminal", icon: "" },
        { name: "Terminal 9", app: "terminal", icon: "" },
        { name: "Terminal 10", app: "terminal", icon: "" },
        { name: "Terminal 11", app: "terminal", icon: "" },
        { name: "Terminal 12", app: "terminal", icon: "" }
    ];
    */
   
    // createWindow(SW_apps[1], "./lib/apps/browser/browser.js");

    const config = {
        "reloadPage": false,
    }

    if (config.reloadPage) { 
        setTimeout(() => {
            window.location.reload();
        }, 5 * 1000);
    }
})();