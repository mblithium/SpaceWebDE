swdeapp.swdeapp_terminal = function (args) {
    const swdeAppTerminal = document.createElement("div");
    swdeAppTerminal.className = "swdeapp-terminal";
    swdeAppTerminal.innerHTML = `
        <div class="swdeApp_terminal_OutputArea"></div>
        <textarea></textarea>
    `
    swdeAppTerminal.style.width = "100%";
    swdeAppTerminal.style.height = "100%";
    swdeAppTerminal.style.overflow = "scroll";
    swdeAppTerminal.style.position = "relative";

    const outputArea = swdeAppTerminal.querySelector(".swdeApp_terminal_OutputArea");
    const commandArea = swdeAppTerminal.querySelector("textarea");

    commandArea.style.width = "100%";
    commandArea.style.height = "20px";
    commandArea.style.backgroundColor = "trasparent"
    commandArea.style.outline = "none";
    commandArea.style.padding = "5px;";

    commandArea.addEventListener("keypress", (e) => {
        if (e.key == "Enter") {
            console.log(e.target.value)
            let a = document.createElement("div");
            a.innerHTML = `
                <p>${e.target.value}</p>
            `

            e.target.value = "";
            outputArea.appendChild(a);
        }
    })
    

    console.log(swdeAppTerminal);
    /* Criar uma função para carregar estilos css para cada app */
    return swdeAppTerminal;
}
