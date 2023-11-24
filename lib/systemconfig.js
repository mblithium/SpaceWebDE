const SW_SystemConfig = {
  theme: "default",
  version: "0.1",
}

const SW_userData = {
  username: "MB",
  wallpaper: "random"
}

let localstorageUserdata = JSON.parse(localStorage.getItem("SW_userData"));
if (localstorageUserdata) {
  SW_userData.username = localstorageUserdata.username;
  SW_userData.wallpaper = localstorageUserdata.wallpaper;
}
if (!localstorageUserdata || SW_userData.wallpaper == "random") {
  try {
    (async () => {
      const getWallpaper = await randomWallpaper();
      SW_userData.wallpaper = getWallpaper;
      reloadDesktop();
    })()
  } catch(error) {
    console.error(error);
  }
}

async function randomWallpaper() {
  /*let wallpaperlist = [ 
    "https://wallpapercave.com/download/8k-night-wallpapers-wp12348643",
    "https://wallpapercave.com/download/2048x1280-wallpapers-wp4735247",
    `https://random.imagecdn.app/${window.screen.width}/${window.screen.height}`
  ]*/

  /* From unsplash API */
  const request = await fetch(`https://random.imagecdn.app/v1/image?width=${window.screen.width}&height=${window.screen.height}&category=buildings&format=json`)
  const wallpaperurl = await request.json();

  return wallpaperurl.url;
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
    name: "MBrowser", 
    app: "browser", 
    icon: "", 
    path: "./lib/apps/browser/browser.js",
    run: "swdeApp_browser",
    apptype: "local",
  },
  { 
    name: "Text Editor", 
    app: "texteditor", 
    icon: "", 
    path: "./lib/apps/texteditor/texteditor.js",
    run: "swdeapp_texteditor",
    apptype: "local",
  },
  { 
    name: "Bash Terminal Simulator", 
    app: "terminal", 
    icon: "", 
    path: "https://www.terminaltemple.com/",
    apptype: "externalweb",
  },
  { 
    name: "Maps", 
    app: "openstreetmaps", 
    icon: "https://www.openstreetmap.org/assets/apple-touch-icon-152x152-af45dc979e972cab863517b2cb33a3dcf3e04e02a2eb2734c6f93edc21fa395d.png", 
    path: "https://www.openstreetmap.org/export/embed.html?bbox=-106.78710937500001%2C-47.398349200359256%2C9.228515625000002%2C22.755920681486405&amp;layer=mapnik",
    apptype: "externalweb",
  },
  { 
    name: "Editpad Online", 
    app: "editpad", 
    icon: "https://www.editpad.org/imgs/logo128.png", 
    path: "https://www.editpad.org/",
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
    name: "Click Jogos", 
    app: "clickjogos", 
    icon: "https://www.clickjogos.com.br/next-img/favicons/favicon.ico", 
    path: "https://www.clickjogos.com.br/",
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
    name: "My Neocities Site", 
    app: "myneocitiessite", 
    icon: "https://mblithium.neocities.org/images/icons/icon.ico", 
    path: "https://mblithium.neocities.org/",
    apptype: "externalweb",
  },
  { 
    name: "Jogo da Velha", 
    app: "W3SchoolsHTMLEditor", 
    icon: "", 
    path: "https://mblithium.github.io/Jogo-da-Velha-Vanilla-HTML5-CSS3-JS-/",
    apptype: "externalweb",
  },
  { 
    name: "EmulatorJS (videogame emulators)", 
    app: "emulatorjs", 
    icon: "https://demo.emulatorjs.org/docs/favicon.ico", 
    path: "https://demo.emulatorjs.org/",
    apptype: "externalweb",
  },
  { 
    name: "jsnes (NES emulator)", 
    app: "jsnes", 
    icon: "", 
    path: "https://jsnes.org/",
    apptype: "externalweb",
  },
  { 
    name: "GBA.NINJA (GBA emulator)", 
    app: "gbaninja", 
    icon: "https://gba.ninja/favicon.ico", 
    path: "https://gba.ninja/",
    apptype: "externalweb",
  },
  { 
    name: "SkyEmu (lowlevel GB, GBC, GBA JS emulator)", 
    app: "skyemu", 
    icon: "https://web.skyemu.app/apple-touch-icon.png", 
    path: "https://web.skyemu.app/",
    apptype: "externalweb",
  },
  { 
    name: "DesMuMe Wasm (NDS Emulator)", 
    app: "desmumewasm", 
    icon: "https://ds.44670.org/icon.png", 
    path: "https://ds.44670.org/",
    apptype: "externalweb",
  },
  { 
    name: "N64JS (N64 emulator)", 
    app: "n64js", 
    icon: "", 
    path: "https://hulkholden.github.io/n64js/",
    apptype: "externalweb",
  },
  { 
    name: "jsSMS (Master System and Gamegear Emulator)", 
    app: "jssms", 
    icon: "", 
    path: "https://gmarty.github.io/jsSMS/",
    apptype: "externalweb",
  },
  { 
    name: "WASMpsx (Playstation Emulator)", 
    app: "wasmpsx", 
    icon: "", 
    path: "https://js-emulators.github.io/wasmpsx/",
    apptype: "externalweb",
  },
  { 
    name: "PCSX emscripten (Playstation Emulator)", 
    app: "pcsxemscripten", 
    icon: "", 
    path: "https://tjwei.github.io/pcsxjs/",
    apptype: "externalweb",
  },
  { 
    name: "enge-js (Playstatior Emulator)", 
    app: "engejs", 
    icon: "", 
    path: "https://kootstra-rene.github.io/enge-js/",
    apptype: "externalweb",
  },
  { 
    name: "Play!JS (Playstation Emulator)", 
    app: "playjs", 
    icon: "", 
    path: "https://playjs.purei.org/",
    apptype: "externalweb",
  },
  { 
    name: "kpspemu (Playstation Portable Emulator)", 
    app: "kpspemu", 
    icon: "", 
    path: "https://kpspemu.github.io/kpspemu-demo/cube/",
    apptype: "externalweb",
  },
];
