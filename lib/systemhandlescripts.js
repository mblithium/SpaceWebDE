/* 
option: Qual ação irá realizar (carregar ou remover).
path: Caminho relativo onde está o arquivo.
name: Nome da biblioteca, para referências.
*/
function swdehandlescr(option, path, name) {
    function loadscript (pathtofile) {

        const ElementHTML = document.querySelectorAll(`head > script`);

        ElementHTML.forEach((elem) => {
            const elemsrc = elem.attributes.src.nodeValue; 
            if (elemsrc == path) { elem.remove(); }
        })

        if(ElementHTML) {
            /** Import element to head (load file). */
            let component = document.createElement("script");
            component.src = pathtofile;
            component.id = `lib-${name}`;
            
            document.head.appendChild(component);
        }

    }

    switch (option) {
        case "load":
            loadscript(path, name);
            break;
        default:
            console.log("Ops, erro ao tentar carregar o arquivo.");
    }
}