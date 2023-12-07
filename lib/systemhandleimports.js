/* 
option: Qual ação irá realizar (carregar ou remover).
path: Caminho relativo onde está o arquivo.
name: Nome da biblioteca, para referências.
*/
function swdehandlesrc(option, path, param) {
    function loadscript (pathtofile) {

        const ElementHTML = document.querySelectorAll(`head > script`);

        ElementHTML.forEach((elem) => {
            const elemsrc = elem.attributes.src.nodeValue; 
            if (elemsrc == path) { elem.remove(); }
        })

        /* Import element to head (load file). */
        let component = document.createElement("script");
        component.src = pathtofile;
        component.id = `lib-${param}`;
        component.async = false;
        component.defer = true;
        component.type = "text/javascript";
        
        document.head.appendChild(component);

        return component;

    }

    function loadstyle(path) {
        const ElementHTML = document.querySelectorAll(`head > link`);

        ElementHTML.forEach((elem) => {
            const elemsrc = elem.attributes.href.nodeValue; 
            if (elemsrc == path) { elem.remove(); }
        })

         /* Import element to head (load file). */
         let component = document.createElement("link");
         component.type = "text/css";
         component.rel = "stylesheet";
         component.href = path;
         component.id = `swdestyle-${param}`;
         
         document.head.appendChild(component);
    }

    switch (option) {
        case "load":
            return loadscript(path);
        case "loadstyle":
            return loadstyle(path)
        default:
            console.log("Ops, erro ao tentar carregar o arquivo.");
    }
}