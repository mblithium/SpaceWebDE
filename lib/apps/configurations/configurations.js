swdeapp.swdeApp_configuration = function (args) {
    const APP = swdeutils.CreateHTML(``);
    const HTMLELEMENT = document.createElement("div");
    HTMLELEMENT.className = "swdeAppConfig";
    
    HTMLELEMENT.innerHTML = `
        <h1>Configurations</h1>
        <p>Please note that the project is under development and is not complete. Access the github repository <a href="https://github.com/mblithium/SpaceWebDE" target="_blank">here</a>.</p>
        <p>Some changes require the system to be restarted.</p>
        <hr />
        <form>
            <label name="swdeAppConfig_wallpaper">
                Wallpaper:
            </label>
            <input type="text" class="swdeAppConfig_wallpaper" name="swdeAppConfig_wallpaper" value="${SW_userData.wallpaper}"> <br>
            <label name="swdeAppConfig_username">Username: </label>
            <input type="text" class="swdeAppConfig_username" name="swdeAppConfig_username" value="${SW_userData.username}" placeholder="your username">
        </form>
    `;

    HTMLELEMENT.querySelector("input.swdeAppConfig_wallpaper").addEventListener("change", (e) => {
        SW_userData.wallpaper = e.target.value;
        swdeutils.saveload("save", { item: "SW_userData", data: SW_userData })
        renderUI();
    });

    HTMLELEMENT.querySelector("input.swdeAppConfig_username").addEventListener("change", (e) => {
        SW_userData.username = e.target.value;
        swdeutils.saveload("save", { item: "SW_userData", data: SW_userData } );
        renderUI();
    })

    /* Load Styles */
    swdehandlesrc("loadstyle", "./lib/apps/configurations/configurations.css", "configurationsapp");

    return HTMLELEMENT;
}
