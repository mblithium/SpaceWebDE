function createWindow (appinfo, path) {
    const swdewindow = document.createElement("div");
    swdewindow.className = "swde-window";
    // draggable="true"
    swdewindow.innerHTML = `
        <div class="swde-window-titlebar">
            <div class="swde-window-icon">
                Ícone
            </div>
            <div class="swde-window-title">
                <p>O título do aplicativo aqui</p>
            </div>
            <div class="swde-window-actions">
                <div class="swde-window-actions__buttons">
                    <button class="swde-window-action__minimize">_</button>
                    <button class="swde-window-action__maximize">[ ]</button>
                    <button class="swde-window-action__close">X</button>
                </div>
            </div>
        </div>
        <div class="swde-window-content">
            <p>Conteúdo do aplicativo aqui</p>
        </div>
      `;

    swdewindow.querySelector(".swde-window-icon").innerHTML = `
        <img src="${appinfo.icon == '' ? 'https://icons.iconarchive.com/icons/alecive/flatwoken/256/Apps-Application-Default-icon.png' : appinfo.icon }">
    `
    swdewindow.querySelector(".swde-window-title > p").innerHTML = `${appinfo.name == '' ? 'Unknown Name' : appinfo.name }`

    /* EVENTS */
    swdewindow.querySelector(".swde-window-action__close").addEventListener("click", (e) => {
        e.target.offsetParent.remove();
    })

    let isDown = false;
    let offset = [0,0];

    swdewindow.querySelector(".swde-window-titlebar").addEventListener("mousedown", (e) => {
        document.querySelectorAll(".swde-window").forEach((thewindow) => {
            thewindow.style.zIndex = 0;
        })

        e.target.offsetParent.style.zIndex = 5;

        offset = [
            e.target.offsetParent.offsetLeft - e.clientX,
            e.target.offsetParent.offsetTop - e.clientY
        ];

        isDown = true;

    }, true)

    document.addEventListener('mouseup', function() { isDown = false; }, true);
    
    document.addEventListener('mousemove', function(event) {
        event.preventDefault();
        if (isDown) {
            mousePosition = {
                x : event.clientX,
                y : event.clientY
            };
            
            swdewindow.style.left = (mousePosition.x + offset[0]) + 'px';
            swdewindow.style.top  = (mousePosition.y + offset[1]) + 'px';
        }
    }, true);
    /* EVENTS */

    document.body.querySelector("#system").appendChild(swdewindow);

}

