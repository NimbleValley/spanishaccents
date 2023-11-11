const accentOutput = document.getElementById("accent-output");

document.addEventListener("keypress", function (event) {
    switch (event.key) {
        case "a":
            accentOutput.innerText = "á";
            break;
        case "e":
            accentOutput.innerText = "é";
            break;
        case "i":
            accentOutput.innerText = "í";
            break;
        case "o":
            accentOutput.innerText = "ó";
            break;
        case "u":
            accentOutput.innerText = "ú";
            break;
        case "n":
            accentOutput.innerText = "ñ";
            break;
        case "A":
            accentOutput.innerText = "á";
            break;
        case "E":
            accentOutput.innerText = "é";
            break;
        case "I":
            accentOutput.innerText = "í";
            break;
        case "O":
            accentOutput.innerText = "ó";
            break;
        case "U":
            accentOutput.innerText = "ú";
            break;
        case "N":
            accentOutput.innerText = "ñ";
            break;
        default:
            break;
    }
    navigator.clipboard.writeText(accentOutput.innerText);
});