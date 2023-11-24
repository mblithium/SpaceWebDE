
/* Keyboard shortcuts */
const keysequence = [];
document.addEventListener("keyup", (e) => {
    if (keysequence.length >= 6) { keysequence.shift() }
    keysequence.push(e.key);

    if (e.key === "AltGraph") {
        taskbarActions("toggle-visibility-menusuper");
    }

    switch (String(keysequence[keysequence.length - 1]) + String(keysequence[keysequence.length - 2])) {
        case "Altw":
            centerAllWindows();
            break;
        case "Altq":
            alert("Q o que???");
            break;
        case "Altk":
            closeAllWindows();
            break;
    }
})
/* END: Keyboard shortcuts */

