swdeapp.swdeApp_appmanager = function (args) {
    let applist = "";
    for (x of SW_apps) {
        applist += ` <li>${x.name}</li>`
        console.log(x);
    }

    const app = swdeutils.CreateHTML(`
        <div>
            <h1>App Manager</h1>
            ${applist}
        </div>
    `)
    
    /* Load Styles */
    swdehandlesrc("loadstyle", "./lib/apps/appmanager/appmanager.css", "appmanager");

    /* Criar uma função para carregar estilos css para cada app */
    return app;
}
