const swde_debugmode = false;

const swde_debug = {};
swde_debug.run = () => {

    createWindow({
        name: "App Manager (Draft)",
        app: "appmanager",
        icon: "",
        path: "./lib/apps/appmanager/appmanager.js",
        run: "swdeApp_appmanager",
        apptype: "local"
    }, "./lib/apps/appmanager/appmanager.js")

    const config = {
        "reloadPage": false,
    }

    if (config.reloadPage) { 
        setTimeout(() => {
            window.location.reload();
        }, 5 * 1000);
    }
};

swde_debugmode ? swde_debug.run() : delete swde_debug.run;