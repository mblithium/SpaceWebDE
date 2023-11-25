/** 
 * Global variable where applications are loaded.
 * @type {object}
 * @var {object} swdeapp
*/
const swdeapp = {};

/**
    * Function for easily creating HTML elements from a string. ;)
    * @function swdeCreateHTML
    * @param {string} content - All the HTML content you want to generate, in string format.
    * @returns {element} HTML Node.
*/
function swdeCreateHTML(content) {
    const contentString = String(content).trim();
    const HTMLELEMENT = document.createElement('div');
    HTMLELEMENT.innerHTML = contentString;

    const element = HTMLELEMENT.firstChild;

    return element;
}

