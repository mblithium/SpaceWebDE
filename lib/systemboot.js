/* load core files */
(() => {
  const libPath = "./lib"
  const components = [
    `${libPath}/systemconfig.js`,
    `${libPath}/systemhandlescripts.js`,
    `${libPath}/renderUI.js`
  ]
  
  components.forEach((elem) => {
    const loadScript = document.createElement("script");
    loadScript.src = elem;
    document.head.appendChild(loadScript);
  })
})();