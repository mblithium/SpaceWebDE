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
   /*
    createWindow(
        SW_apps[1], 
        "./lib/apps/browser/browser.js", 
        { 
            link: "https://bing.com" 
        }
    );
    
    createWindow(
        SW_apps[1], 
        "./lib/apps/browser/browser.js", 
        { 
            link: "https://mblithium.github.io/SpaceWebDE" 
        }
    );*/
    /*createWindow(
        { 
            name: "text editor", 
            app: "texteditor", 
            icon: "https://cdn1.iconfinder.com/data/icons/heroicons-solid/20/terminal-512.png", 
            path: "./lib/apps/texteditor/texteditor.js",
            run: "swdeapp_texteditor",
            apptype: "local",
          },
        "./lib/apps/texteditor/texteditor.js"
    )*/

    const config = {
        "reloadPage": false,
    }

    if (config.reloadPage) { 
        setTimeout(() => {
            window.location.reload();
        }, 5 * 1000);
    }
})();