
/* Keyboard shortcuts */
const keysequence = new Array("", "", "");
document.addEventListener("keyup", (e) => {
    if (keysequence.length >= 3) { keysequence.shift() }
    keysequence.push(e.key);
    const twosequence = (String(keysequence[keysequence.length - 2]) + String(keysequence[keysequence.length - 1])).toLowerCase();

    function clearSequence(sequence) {
        for (i = 1; i <= sequence; i++) {
            keysequence[keysequence.length - i] = "";
        }
    }

    switch (twosequence) {
        case "altm":
            taskbarActions("toggle-visibility-menusuper");
            clearSequence(2)
            break;
        case "altw":
            centerAllWindows();
            clearSequence(2)
            break;
        case "altq":
            alert("Q o que???");
            clearSequence(2)
            break;
        case "altk":
            closeAllWindows();
            clearSequence(2)
            break;
    }

    if(swde_debugmode == true) {
        console.log(keysequence, twosequence)
    }
})
/* END: Keyboard shortcuts */

