const keysequence = [];

document.addEventListener("keyup", (e) => {
    if (keysequence.length >= 6) { keysequence.shift() }
    keysequence.push(e.key);

    switch (String(keysequence[keysequence.length - 1]) + String(keysequence[keysequence.length - 2])) {
        case "ShiftW":
            document.querySelectorAll(".swde-window").forEach((thewindow) => {
                thewindow.style.top = 0;
                thewindow.style.left = "25%";
            });
            break;
        case "ShiftQ":
            alert("Q o que???");
            break;
    }
})