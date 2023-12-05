const SW_SystemConfig = {
    theme: "default",
    version: "0.1",
}
  
const SW_userData = {
    username: "username",
    wallpaper: "random"
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

const swde_systemstate = {
    "activeApps": [],
    "activeWindows": []
}