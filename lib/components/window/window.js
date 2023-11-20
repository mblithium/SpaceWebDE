function createWindow (appinfo, path) {
      const swdewindow = document.createElement("div");
      swdewindow.className = "swde-window";
      swdewindow.innerHTML = `
        <div class="swde-window-titlebar">
            <div class="swde-window-icon">
                Ícone
            </div>
            <div class="swde-window-title">
                <p>O título do aplicativo aqui</p>
            </div>
            <div class="swde-window-actions">
                <div class="swde-window-actions__buttons">
                    <button class="swde-window-action__minimize">_</button>
                    <button class="swde-window-action__maximize">[ ]</button>
                    <button class="swde-window-action__close">X</button>
                </div>
            </div>
        </div>
        <div class="swde-window-content">
            <p>Conteúdo do aplicativo aqui</p>
        </div>
      `;
    
      document.body.querySelector("#system").appendChild(swdewindow);

}
  