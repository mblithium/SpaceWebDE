(() => {
    /* Load styles */
    swdehandlesrc("loadstyle", "./lib/components/window/window.css", "window");
})()

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
    swdewindow.querySelector(".swde-window-title > p").innerHTML = `${appinfo.name == '' ? 'Unknown Name' : appinfo.name }`;

    function runApp(appinfo) {
        if (appinfo.apptype == "externalweb") {
            let frame = document.createElement("iframe");
            frame.src = appinfo.path;
            frame.style.height = "100%";
            frame.style.width = "100%";

            swdewindow.querySelector(".swde-window-content").innerHTML = "";
            swdewindow.querySelector(".swde-window-content").appendChild(frame);
        }

        if (appinfo.apptype == "local") {
            const libPath = "./lib";
            swdehandlesrc("load", appinfo.path, appinfo.app);
            document.querySelector(`head > script#lib-${appinfo.app}`).addEventListener("load", () => {
                swdewindow.querySelector(".swde-window-content").innerHTML = "";
                swdewindow.querySelector(".swde-window-content").appendChild(eval(appinfo.run)); 
            })
        }
        
    }

    runApp(appinfo);

    /* EVENTS */
    swdewindow.querySelector(".swde-window-action__maximize").addEventListener("click", (e) => {
        const targetStyle = e.target.offsetParent.offsetParent.style;  
        console.log(targetStyle);

        if (targetStyle.width == "100%" || targetStyle.height === "calc(100% - 50px)") {
            targetStyle.width = "800px"
            targetStyle.height = "600px"
        } else {
            targetStyle.width = "100%"
            targetStyle.height = "calc(100% - 50px)"
            targetStyle.top = 0;
            targetStyle.left = 0;
        }
        
    })

    swdewindow.querySelector(".swde-window-action__close").addEventListener("click", (e) => {
        e.target.offsetParent.offsetParent.remove();
    })

    let isDown = false;
    let offset = [0,0];

    swdewindow.querySelector(".swde-window-titlebar").addEventListener("mousedown", (e) => {
        document.querySelector(".div-menusuper").style.display = "none";
        document.querySelectorAll(".swde-window").forEach((thewindow) => {
            thewindow.style.zIndex = 0;
        })

        e.target.offsetParent.offsetParent.style.zIndex = 5;

        offset = [
            e.target.offsetParent.offsetParent.offsetLeft - e.clientX,
            e.target.offsetParent.offsetParent.offsetTop - e.clientY
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

