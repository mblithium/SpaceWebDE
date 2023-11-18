(
  function taskbarRender () {
    let componentHTML = document.createElement("div");
    componentHTML.className = "taskbar";
    componentHTML.id = "taskbar";

    componentHTML.innerHTML = `
      <div class="div-menusuper">
        <div class="div-menusuper__actionbar">
          <div class"menusuper__actionbar-item menusuper__actionbar-user">
            <p>User: ${SW_userData.username}</p>
          </div>
          <div class"menusuper__actionbar-item menusuper__actionbar-user item">
            <p>User: ${SW_userData.username}</p>
          </div>
          <div class"menusuper__actionbar-item menusuper__actionbar-user item">
            <p>User: ${SW_userData.username}</p>
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
        aqui fica a taskbar
        </div>
        <div class="taskbar-items">
        aqui fica a bandeja do sistema
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
  console.log(taskbar, taskbarmenusuper);
}

function taskbarUpdateAppMenu() {
  const applist = document.querySelector(".div-menusuper__applications");
  console.log(applist)
  const apps = [
    { name: "Paint", app: "paint", icon: "" }, 
    { name: "Terminal", app: "terminal", icon: "" }
  ];

  apps.forEach((app) => {
    const item = document.createElement("div")
    item.className = "menusuper__applicationsItem";
    item.innerHTML = `
      <div class="menusuper__applicationsIcon">
        <img src="${app.icon}" />
      </div>
      <div class="menusuper__applicationsName">${app.name}</div>
    `

    applist.appendChild(item);
  })
}