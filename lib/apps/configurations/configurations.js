function swdeApp_configuration() {
    const HTMLELEMENT = document.createElement("div");
    HTMLELEMENT.className = "swdeAppConfig";
    
    HTMLELEMENT.innerHTML = `
        <h1>Configurações</h1>
        <p>Note que o projeto está em desenvolvimento e não está completo.</p>
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