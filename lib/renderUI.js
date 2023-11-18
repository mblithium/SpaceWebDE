function renderUI() {
  SW_UILayout.forEach((elem) => {
    const elemname = elem.name;
    const ElementHTML = document.querySelector(`#${elemname}`);

    if(ElementHTML) { document.querySelector(`#${elemname}`).remove();}
    
    if(!ElementHTML) {
      /** Import element to head (load file). */
      let component = document.createElement("script");
      component.src = `./lib/components/${elemname}/${elemname}.js`;
      
      document.head.appendChild(component);
    }
  })
}

renderUI();
