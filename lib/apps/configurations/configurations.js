function swdeApp_configuration() {
    const HTMLELEMENT = document.createElement("div");
    HTMLELEMENT.className = "swdeAppConfig";
    
    HTMLELEMENT.innerHTML = `
        <label name="swdeAppConfig_wallpaper">
            Wallpaper:
        </label>
        <input type="text" class="swdeAppConfig_wallpaper" name="swdeAppConfig_wallpaper" value="${SW_userData.wallpaper}"> 
    `;

    HTMLELEMENT.querySelector("input.swdeAppConfig_wallpaper").addEventListener("change", (e) => {
        SW_userData.wallpaper = e.target.value;
        localStorage.setItem("SW_userData", JSON.stringify(SW_userData));
        renderUI();
    });
    return HTMLELEMENT;
}