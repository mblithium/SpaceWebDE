(() => {
    /* Load styles */
    swdehandlesrc("loadstyle", "./lib/components/window/window.css", "window");
})()

function createWindow (appinfo, path, args) {
    const swdewindow = document.createElement("div");
    swdewindow.className = "swde-window";
    swdewindow.zIndex = 10;

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
        <img src="${appinfo.icon == '' ? './img/icons/genericappicon.png' : appinfo.icon }">
    `

    swdewindow.querySelector(".swde-window-title > p").innerHTML = `${appinfo.name == '' ? 'Unknown Name' : appinfo.name }`;

    function runApp(appinfo) {
        if (appinfo.apptype == "externalweb") {
            let frame = document.createElement("iframe");
            frame.src = appinfo.path;
            frame.tabIndex = 0;
            frame.focus();
            frame.setAttribute("allow", "accelerometer; ambient-light-sensor; autoplay; battery; camera; display-capture; document-domain; encrypted-media; execution-while-not-rendered; execution-while-out-of-viewport; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; navigation-override; oversized-images; payment; picture-in-picture; publickey-credentials-get; screen-wake-lock; sync-xhr; usb; vr; web-share; xr-spatial-tracking");
            frame.setAttribute("allowfullscreen", true);

            swdewindow.querySelector(".swde-window-content").innerHTML = "";
            swdewindow.querySelector(".swde-window-content").appendChild(frame);
        }

        if (appinfo.apptype == "local") {
            const libPath = "./lib";
            swdehandlesrc("load", appinfo.path, appinfo.app);
            document.querySelector(`head > script#lib-${appinfo.app}`).addEventListener("load", () => {
                swdewindow.querySelector(".swde-window-content").innerHTML = "";
                let payload = `return ${appinfo.run}(` + JSON.stringify(args) + ")";
                swdewindow.querySelector(".swde-window-content").appendChild([]["filter"]["constructor"]( String(payload) )()); 
            })
        }
        
    }

    runApp(appinfo);
    unfocusAllWindows(swdewindow);

    /* EVENTS */

    let isFullscreen = false;

    function toggleFullscreen(target, mode) {
        if (isFullscreen) {
            target.width = "70%"
            target.height = "90%"
            if (mode === "minimize_maximize_btn") {
                target.top = 0;
                target.left = "12.5vw";
            }
            swdewindow.setAttribute("fullscreen", "false");
            isFullscreen = false;
        } else {
            target.width = "100%"
            target.height = "calc(100% - 50px)"
            if (mode === "minimize_maximize_btn") {
                target.top = 0;
                target.left = 0;
            }
            swdewindow.setAttribute("fullscreen", "true");
            isFullscreen = true;
        }
    }

    swdewindow.querySelector(".swde-window-action__maximize").addEventListener("click", (e) => {
        const targetStyle = e.target.offsetParent.offsetParent.style;  
        toggleFullscreen(targetStyle, "minimize_maximize_btn");
    })

    swdewindow.querySelector(".swde-window-titlebar").addEventListener("dblclick", (e) => {
        const targetStyle = e.target.offsetParent.offsetParent.style;  
        toggleFullscreen(targetStyle, "minimize_maximize_btn");
        isDown = false;
    })

    swdewindow.querySelector(".swde-window-action__close").addEventListener("click", (e) => {
        e.target.offsetParent.offsetParent.remove();
    })

    let isDown = false;
    let offset = [0,0];

    /*
    swdewindow.addEventListener("mousemove", (e) => {
        console.log(`layerX: ${e.layerX}, layerY: ${e.layerY}`)
    })*/

    swdewindow.querySelector(".swde-window-titlebar").addEventListener("mousedown", (e) => {
        document.querySelector(".div-menusuper").style.display = "none";
        
        // if (isFullscreen) { toggleFullscreen(e.target.offsetParent.offsetParent.style) };
        unfocusAllWindows(e.target.offsetParent.offsetParent);

        offset = [
            e.target.offsetParent.offsetParent.offsetLeft - e.clientX,
            e.target.offsetParent.offsetParent.offsetTop - e.clientY
        ];

        if(!isFullscreen) { isDown = true; }

    }, true)

    document.addEventListener('mouseup', function() { isDown = false; }, true);
    
    document.addEventListener('mousemove', function(event) {
        event.preventDefault();
        if (isDown) {
            mousePosition = {
                x : event.clientX,
                y : event.clientY
            };

            minmaxpos = {
                x: [0, document.body.clientWidth],
                y: [0, document.body.clientHeight]
            }
            
            swdewindow.style.left = (mousePosition.x + offset[0]) + 'px';
            swdewindow.style.top  = (mousePosition.y + offset[1]) + 'px';
            
        }
    }, true);


    function unfocusAllWindows(focusWindow) {
        /* Trás para cima a janela selecionada e todas as outras ficam abaixo dela. */
        document.querySelectorAll(".swde-window").forEach((thewindow) => {
            thewindow.style.zIndex = 0;
        });

        focusWindow.focus();
        focusWindow.style.zIndex = 5;
    }
    /* END: EVENTS */

    document.body.querySelector("#system").appendChild(swdewindow);
}

/* Global functions */
function centerAllWindows() {
    document.querySelectorAll(".swde-window").forEach((thewindow) => {
        if(String(thewindow.getAttribute("fullscreen")) !== "true") {
            thewindow.style.top = 0;
            thewindow.style.left = "12.5vw";
        }
    });
}

function closeAllWindows() {
    document.querySelectorAll(".swde-window").forEach((thewindow) => {
        thewindow.remove();
    });
}
/* END: Global Functions */