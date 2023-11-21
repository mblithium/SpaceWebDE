(
  function taskbarRender () {
    let componentHTML = document.createElement("div");
    componentHTML.className = "taskbar";
    componentHTML.id = "taskbar";

    componentHTML.innerHTML = `
      <div class="div-menusuper">
        <div class="div-menusuper__actionbar">
          <div class="menusuper__actionbar-item menusuper__actionbar-user">
            <p>User: ${SW_userData.username}</p>
          </div>
          <div class="menusuper__actionbar-item menusuper__actionbar-user item">
            <p></p>
          </div>
          <div class="menusuper__actionbar-item menusuper__actionbar-user item">
            <p>Configurações</p>
          </div>
        </div>
        <div class="div-menusuper__applications">
          
        </div>
      </div>
      <div class="taskbar-flex">
        <div class="taskbar-items">
          <button class="btn-menusuper">MENU</button>
        </div>
        <div class="taskbar-items">
          <p>aqui fica a taskbar</p>
        </div>
        <div class="taskbar-items">
          <p>aqui fica a bandeja do sistema</p>
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
  const apps = [
    { name: "Paint", app: "paint", icon: "" }, 
    { name: "Terminal 1", app: "terminal", icon: "https://cdn1.iconfinder.com/data/icons/heroicons-solid/20/terminal-512.png" },
    { name: "Terminal 2", app: "terminal", icon: "" },
    { name: "Terminal 3", app: "terminal", icon: "" },
    { name: "Terminal 4", app: "terminal", icon: "" },
    { name: "Terminal 5", app: "terminal", icon: "" },
    { name: "Terminal 6", app: "terminal", icon: "" },
    { name: "Terminal 7", app: "terminal", icon: "" },
    { name: "Terminal 8", app: "terminal", icon: "" },
    { name: "Terminal 9", app: "terminal", icon: "" },
    { name: "Terminal 10", app: "terminal", icon: "" },
    { name: "Terminal 11", app: "terminal", icon: "" },
    { name: "Terminal 12", app: "terminal", icon: "" }
  ];

  apps.forEach((app) => {
    const item = document.createElement("div")
    item.className = "menusuper__applicationsItem";
    item.innerHTML = `
      <div class="menusuper__applicationsIcon">
        <img src="${app.icon == '' ? 'https://icons.iconarchive.com/icons/alecive/flatwoken/256/Apps-Application-Default-icon.png' : app.icon}" />
      </div>
      <div class="menusuper__applicationsName"><p>${app.name}</p></div>
    `
    item.onclick = () => {
      createWindow(app, "blablabla")
    };
    applist.appendChild(item);
  })

}