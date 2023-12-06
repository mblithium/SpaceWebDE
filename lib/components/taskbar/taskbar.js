(
  function taskbarRender () {
    let componentHTML = document.createElement("div");
    componentHTML.className = "taskbar";
    componentHTML.id = "taskbar";
    swdehandlesrc("loadstyle", "./lib/components/taskbar/taskbar.css", "taskbar");

    componentHTML.innerHTML = `
    <div id="taskbar" class="taskbar">
      <div class="div-menusuper" style="display: none;">
          <div class="div-menusuper__actionbar">
              <div class="menusuper__actionbar-item menusuper__actionbar-user">
                  <p>User: ${SW_userData.username.split(" ")[0].slice(0, 12)}</p>
              </div>
              <div class="menusuper__actionbar-item menusuper__actionbar-user item">
                  <p></p>
              </div>
              <div class="menusuper__actionbar-item menusuper__actionbar-user item">
                  <p class="menusuper__actionbar-item-config">Configurations</p>
              </div>
          </div>
          <div class="div-menusuper__applications"></div>
      </div>
      
      <div class="taskbar-flex">
          <div class="taskbar-items">
              <img src="./img/icons/app/512-512.png" class="btn-menusuper" title="menu">
          </div>
          <div class="taskbar-items taskbar-center">
              
          </div>
          <div class="taskbar-items taskbar-systemtray">
              <span class="taskbar-systemtray_item">
                  <img src="./img/icons/centerwindow.png" class="systemtray-icon centerwindowicon" title="Bring all the windows to the screen.">
              </span>
          </div>
    </div>
  </div>
    `;

    componentHTML.querySelector(".btn-menusuper").addEventListener("click", () => {
      taskbarActions("toggle-visibility-menusuper");
      taskbarUpdateAppMenu();
  
    });
    
    document.body.querySelector("#system").appendChild(componentHTML);

  }
)();

/* Taskbar actions */
function taskbarActions(action, params) {
  const taskbar = document.querySelector("#taskbar");
  const taskbarmenusuper = document.querySelector(".div-menusuper");

  switch (action) {
    case "toggle-visibility-menusuper":
      toggleMenubarVisibility();
      break;
    default:
      console.log("Ops, your action exists?")
      
  }

  function toggleMenubarVisibility() {
    if (taskbarmenusuper.style.display === "none") { taskbarmenusuper.style.display = "block";} 
    else { taskbarmenusuper.style.display = "none"; }
  }

}

function taskbarUpdateAppMenu() {
  const applist = document.querySelector(".div-menusuper__applications");
  applist.innerHTML = "";

  SW_apps.forEach((app) => {
    const item = document.createElement("div")
    item.className = "menusuper__applicationsItem";
    item.innerHTML = `
      <div class="menusuper__applicationsIcon" title="${app.desc ? app.desc : app.name }">
        <img src="${app.icon == '' ? './img/icons/genericappicon.png' : app.icon}" />
      </div>
      <div class="menusuper__applicationsName"><p>${app.name}</p></div>
    `
    item.onclick = () => {
      taskbarActions("toggle-visibility-menusuper")
      createWindow(app, "")
    };
    applist.appendChild(item);
  })
}

function taskbarOpenedApps() {
  let taskbaropenedapps = document.querySelector(".taskbar-items.taskbar-center");
  let elem = swdeutils.CreateHTML(`
    <div class="openedapps"></div>
  `);

  function getWindow(window) { return document.body.querySelector(String(window)); }

  for (i = 0; i < swde_systemstate.activeWindows.length; i++) {
    let windowid = `#${swde_systemstate.activeWindows[i]}`;
    let selectWindow = getWindow(windowid);
    let icon = selectWindow.querySelector(".swde-window-icon img").src
    let item = swdeutils.CreateHTML(`<img src="${icon}">`)

    item.addEventListener("click", () => {
      const winstyle = document.querySelector(`${windowid}`).style.display;

      if (winstyle == "block") {
        document.querySelector(`${windowid}`).classList.add("windowclosed");
        setTimeout(() => {
          document.querySelector(`${windowid}`).classList.remove("windowclosed");
          document.querySelector(`${windowid}`).style.display = "none";
        }, 600)
      } else {
        document.querySelector(`${windowid}`).style.display = "block";
      }
    })

    elem.appendChild(item);
  }

  taskbaropenedapps.innerHTML = "";
  taskbaropenedapps.appendChild(elem)
}

document.querySelector(".systemtray-icon.centerwindowicon").addEventListener("click", () => {
  centerAllWindows();
})

document.querySelector(".menusuper__actionbar-item-config").addEventListener("click", () => {
  const configapp = { 
    name: "Configurations", 
    app: "configurations", 
    icon: "./img/icons/icon-config.png", 
    path: "./lib/apps/configurations/configurations.js",
    run: "swdeApp_configuration",
    apptype: "local",
  }

  createWindow(configapp, "./lib/apps/configurations/configurations.js");
})

