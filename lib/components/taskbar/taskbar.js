(
  function taskbarRender () {
    let componentHTML = document.createElement("div");
    componentHTML.className = "taskbar";
    componentHTML.id = "taskbar";
    swdehandlesrc("loadstyle", "./lib/components/taskbar/taskbar.css", "taskbar");

    componentHTML.innerHTML = `
      <div class="div-menusuper" style="display: none;">
        <div class="div-menusuper__actionbar">
          <div class="menusuper__actionbar-item menusuper__actionbar-user">
            <p>User: ${SW_userData.username}</p>
          </div>
          <div class="menusuper__actionbar-item menusuper__actionbar-user item">
            <p></p>
          </div>
          <div class="menusuper__actionbar-item menusuper__actionbar-user item">
            <p class="menusuper__actionbar-item-config">Configurations</p>
          </div>
        </div>
        <div class="div-menusuper__applications">
          
        </div>
      </div>

      <div class="taskbar-flex">
        <div class="taskbar-items">
          <img src="./img/icons/icon512.png" class="btn-menusuper">
        </div>
        <div class="taskbar-items">
          <p></p>
        </div>
        <div class="taskbar-items taskbar-systemtray">
          <span class="taskbar-systemtray_item">
            <img src="./img/icons/centerwindow.png" class="systemtray-icon centerwindowicon" title="Bring all the windows to the screen.">
          </span>
        </div>
      </div>
    `;

    componentHTML.querySelector(".btn-menusuper").addEventListener("click", () => {
      taskbarActions("toggle-visibility-menusuper");
    });
    
    document.body.querySelector("#system").appendChild(componentHTML);

    taskbarUpdateAppMenu()
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

  SW_apps.forEach((app) => {
    const item = document.createElement("div")
    item.className = "menusuper__applicationsItem";
    item.innerHTML = `
      <div class="menusuper__applicationsIcon">
        <img src="${app.icon == '' ? './img/icons/genericappicon.png' : app.icon}" />
      </div>
      <div class="menusuper__applicationsName"><p>${app.name}</p></div>
    `
    item.onclick = () => {
      taskbarActions("toggle-visibility-menusuper")
      createWindow(app, "blablabla")
    };
    applist.appendChild(item);
  })

}

document.querySelector(".systemtray-icon.centerwindowicon").addEventListener("click", () => {
  centerAllWindows();
})

document.querySelector(".menusuper__actionbar-item-config").addEventListener("click", () => {
  const configapp = { 
    name: "Configurations", 
    app: "configurations", 
    icon: "https://cdn1.iconfinder.com/data/icons/heroicons-solid/20/terminal-512.png", 
    path: "./lib/apps/configurations/configurations.js",
    run: "swdeApp_configuration",
    apptype: "local",
  }

  createWindow(configapp, "./lib/apps/configurations/configurations.js");
})

