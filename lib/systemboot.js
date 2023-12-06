/* load core files */
(() => {
  const libPath = "./lib"
  const components = [
    `${libPath}/systemutils.js`,
    `${libPath}/systemhandleimports.js`,
    `${libPath}/systemstate.js`,
    `${libPath}/components/window/window.js`,
    `${libPath}/renderUI.js`,
    `${libPath}/systemglobalevents.js`,
    `${libPath}/systemconfig.js`,
    `${libPath}/debugmode.js`,
  ]
  
  /* Load core components */
  components.forEach((elem) => {
    const loadScript = document.createElement("script");
    loadScript.type = "text/javascript";
    loadScript.src = elem;
    loadScript.async = false;
    loadScript.defer = true;
    document.head.appendChild(loadScript);
  })

})();