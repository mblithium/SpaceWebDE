/** 
 * Global variable where applications are loaded.
 * @type {object}
 * @var {object} swdeapp
*/
const swdeapp = {};

/** 
 * Useful functions to be used by the system and applications.
 * @type {object}
 * @var {object} swdeutils
*/
const swdeutils = {};

/**
    * Function for easily creating HTML elements from a string. ;)
    * @function swdeutils.CreateHTML
    * @param {string} content - All the HTML content you want to generate, in string format.
    * @returns {element} HTML Node.
*/
swdeutils.CreateHTML = function (content) {
    const contentString = String(content).trim();
    const HTMLELEMENT = document.createElement('div');
    HTMLELEMENT.innerHTML = contentString;

    const element = HTMLELEMENT.firstChild;

    return element;
}

/**
 * 
 * @param {Text} context SaveLoad context: Save or Load?
 * @param {Object} param Object containing the item and what you want to save (if it is to save something).
 * @returns
 */
swdeutils.saveload = function SaveLoad(context, param) {


    function returnSaved(item) {
        let saved;
        saved = localStorage.getItem(param.item);
        saved = JSON.parse(saved);
        return saved;
    }

    function save() {
        try {
            localStorage.setItem(param.item, JSON.stringify(param.data));
            return returnSaved(param.item);
        } catch (error) { return error; }
    }

    function load() {
        let load = "";
        try {
            if (!localStorage.getItem(param.item)) { return false; }
            return returnSaved(param.item);
        } catch (error) { console.log(error); }
    }

    switch (context) {
        case "save":
            return save();
        case "load":
            return load();
        default:
            return "No context was specified."
    }
}

swdeutils.imageToBase64 = (image) => {
    let dimensions = {};
    const img = new Image();

    img.src = image;
    img.id = "tempimage578247";
    img.crossOrigin = "anonymous";

    img.onload = () => {
        dimensions = {
            width: img.width, 
            height: img.height
        }
        return convert(img, dimensions);
    }

    function convert(img, dimensions) {
        const canvas = document.createElement("canvas");
        canvas.width = dimensions.width;
        canvas.height = dimensions.height;
        canvas.id = "temprandomcanvas12657458";
        //canvas.style.display = "none";

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, dimensions.width, dimensions.height);

        document.body.appendChild(canvas);

        const dataURL = document.querySelector("#temprandomcanvas12657458").toDataURL();

        dataURL.replace(/^data:image\/?[A-z]*;base64,/);

        return dataURL;
    } 
}

swdeutils.randomizerange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}
