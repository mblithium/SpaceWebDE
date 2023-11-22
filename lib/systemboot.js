/* load core files */
(() => {
  const libPath = "./lib"
  const components = [
    `${libPath}/systemconfig.js`,
    `${libPath}/systemhandlescripts.js`,
    `${libPath}/systemstate.js`,
    `${libPath}/components/window/window.js`,
    `${libPath}/systemglobalevents.js`,
    `${libPath}/renderUI.js`,
    `${libPath}/debugmode.js`,
  ]
  
  components.forEach((elem) => {
    const loadScript = document.createElement("script");
    loadScript.type = "text/javascript";
    loadScript.src = elem;
    loadScript.async = false;
    loadScript.defer = true;
    document.head.appendChild(loadScript);
  })
})();