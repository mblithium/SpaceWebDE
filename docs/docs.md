# For app developers

## swdeapp

Global system variable where applications are mounted.

**Example:**

```js
swdeapp.calculator = function (args) {
    const APP = swdeutils.CreateHTML(`Your HTML here`);
    // code...
    return APP;
}
```

Object containing informations from the app for launcher.

```js
const app = { 
    name: "appname", 
    app: "appname", 
    desc: "write a description here",
    icon: "./img/icons/system/icon-browser.png", 
    path: "./lib/apps/browser/browser.js",
    run: "swdeApp_browser",
    apptype: "local",
},
```

```js
createWindow(app, "optional args");
```

## swdeutils

### CreateHTML

Converts a string of HTML code into a DOM node to be manipulated and inserted into the page's DOM.

```js
swdeutils.CreateHTML(`Your HTML here`);
```

