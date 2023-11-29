swdeapp.swdeApp_configuration = function (args) {
    const HTMLELEMENT = document.createElement("div");
    HTMLELEMENT.className = "swdeAppConfig";
    
    HTMLELEMENT.innerHTML = `
        <h1>Configurações</h1>
        <p>Please note that the project is under development and is not complete. Access the github repository <a href="https://github.com/mblithium/SpaceWebDE" target="_blank">here</a>.</p>
        <label name="swdeAppConfig_wallpaper">
            Wallpaper:
        </label>
        <input type="text" class="swdeAppConfig_wallpaper" name="swdeAppConfig_wallpaper" value="${SW_userData.wallpaper}"> 
    `;

    HTMLELEMENT.querySelector("input.swdeAppConfig_wallpaper").addEventListener("change", (e) => {
        SW_userData.wallpaper = e.target.value;
        localStorage.setItem("SW_userData", JSON.stringify(SW_userData));
        let localstorageUserdata = JSON.parse(localStorage.getItem("SW_userData"));

        if (!localstorageUserdata) {
            localStorage.setItem("SW_userData", JSON.stringify(SW_userData));
            localstorageUserdata = JSON.parse(localStorage.getItem("SW_userData"));
            console.log(localstorageUserdata);
        }

        SW_userData.username = localstorageUserdata.username;
        SW_userData.wallpaper = localstorageUserdata.wallpaper;
        renderUI();
    });

    /* Load Styles */
    swdehandlesrc("loadstyle", "./lib/apps/configurations/configurations.css", "configurationsapp");

    return HTMLELEMENT;
}
