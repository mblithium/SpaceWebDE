const SW_SystemConfig = {
  theme: "default",
  version: "0.1",
}

const SW_userData = {
  username: "MB",

}

/* Elements that will be rendered on the user's screen. */
const SW_UILayout = [
  {
    name: "desktop",
    position: {},
    active: true
  },
  {
    name: "taskbar",
    position: { x: 0, y: 100, w: 100, h: 15 },
    active: true
  }
]

const SW_apps  = [
  { 
    name: "Emulador de Terminal", 
    app: "terminal", 
    icon: "https://cdn1.iconfinder.com/data/icons/heroicons-solid/20/terminal-512.png", 
    path: "./lib/apps/terminal/terminal.js",
    run: "swdeApp_terminal()",
    apptype: "local",
  },
  { 
    name: "MBrowser", 
    app: "browser", 
    icon: "https://cdn1.iconfinder.com/data/icons/heroicons-solid/20/terminal-512.png", 
    path: "./lib/apps/browser/browser.js",
    run: "swdeApp_browser()",
    apptype: "local",
  },
  { 
    name: "VSCode", 
    app: "vscode", 
    icon: "https://vscode.dev/static/stable/favicon.ico", 
    path: "https://vscode.dev/",
    apptype: "externalweb",
  },
  { 
    name: "Paint Online", 
    app: "paint", 
    icon: "https://paint.js.org/assets/apple-touch-icon.png", 
    path: "https://paint.js.org",
    apptype: "externalweb",
  },
  { 
    name: "DOOM Games", 
    app: "DOOM Games", 
    icon: "https://dos.zone/assets/logo192.png", 
    path: "https://dos.zone/doom-dec-1993/",
    apptype: "externalweb",
  },
];
/* ,
  {
    name: "topbar",
    position: { x: 0, y: 0, w: 100, h: 10 },
    active: true
  }
*/