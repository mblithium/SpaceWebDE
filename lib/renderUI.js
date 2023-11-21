function renderUI() {
  SW_UILayout.forEach((elem) => {
    const elemname = elem.name;
    const ElementHTML = document.querySelector(`#${elemname}`);

    if(ElementHTML) { document.querySelector(`#${elemname}`).remove();}
    
    if(!ElementHTML) {
      swdehandlescr("load", `./lib/components/${elemname}/${elemname}.js`, elemname);
    }
  })
}

renderUI();
