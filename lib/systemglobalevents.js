const keysequence = [];

document.addEventListener("keyup", (e) => {
    if (keysequence.length >= 6) { keysequence.shift() }
    keysequence.push(e.key);

    if (e.key === "AltGraph") {
        taskbarActions("toggle-visibility-menusuper");
    }

    switch (String(keysequence[keysequence.length - 1]) + String(keysequence[keysequence.length - 2])) {
        case "ShiftW":
            centerAllWindows();
            break;
        case "ShiftQ":
            alert("Q o que???");
            break;
    }
})

