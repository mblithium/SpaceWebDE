const SW_SystemConfig = {
  theme: "default",
  version: "0.1",
}

const SW_userData = {
  username: "MB",
  wallpaper: "https://unsplash.com/photos/aon-6I6Y6uQ/download?ixid=M3wxMjA3fDB8MXxhbGx8NXx8fHx8fDJ8fDE3MDA2MDQwNTB8&force=true&w=2400"
}

let localstorageUserdata = JSON.parse(localStorage.getItem("SW_userData"));
if (localstorageUserdata) {
  SW_userData.username = localstorageUserdata.username;
  SW_userData.wallpaper = localstorageUserdata.wallpaper;
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
    width: "100%",
    height: "50px",
    active: true
  }
]

const SW_apps  = [
  { 
    name: "Emulador de Terminal", 
    app: "terminal", 
    icon: "https://cdn1.iconfinder.com/data/icons/heroicons-solid/20/terminal-512.png", 
    path: "https://www.terminaltemple.com/",
    apptype: "externalweb",
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
    name: "Maps", 
    app: "openstreetmaps", 
    icon: "https://www.openstreetmap.org/assets/apple-touch-icon-152x152-af45dc979e972cab863517b2cb33a3dcf3e04e02a2eb2734c6f93edc21fa395d.png", 
    path: "https://www.openstreetmap.org/export/embed.html?bbox=-106.78710937500001%2C-47.398349200359256%2C9.228515625000002%2C22.755920681486405&amp;layer=mapnik",
    apptype: "externalweb",
  },
  { 
    name: "OnlineGDB (Code Editor & Debugger)", 
    app: "onlinegdb", 
    icon: "https://www.onlinegdb.com/favicon.ico", 
    path: "https://www.onlinegdb.com/",
    apptype: "externalweb",
  },
  { 
    name: "Archive", 
    app: "archiveorg", 
    icon: "https://archive.org/offshoot_assets/favicon.ico", 
    path: "https://archive.org",
    apptype: "externalweb",
  },
  { 
    name: "Wikipedia", 
    app: "wikipedia", 
    icon: "https://www.wikipedia.org/static/apple-touch/wikipedia.png", 
    path: "https://www.wikipedia.org/",
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
  { 
    name: "Jogo da Velha", 
    app: "W3SchoolsHTMLEditor", 
    icon: "https://cdn1.iconfinder.com/data/icons/heroicons-solid/20/terminal-512.png", 
    path: "https://mblithium.github.io/Jogo-da-Velha-Vanilla-HTML5-CSS3-JS-/",
    apptype: "externalweb",
  },
];
