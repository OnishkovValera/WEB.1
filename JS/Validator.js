function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function validateY (event) {
    const MIN = -3;
    const MAX = 5;

    let var_y = document.getElementById("Y");
    numY = var_y.value.replace(',', '.');
    if (isNumeric(numY) && (numY > MAX || numY < MIN)) {
        event.preventDefault();
        alert("неподходящее значение");
        return false;
    } else {
        return true;
    }
}
document.getElementById("submitButton").addEventListener('submit', event=>validateY(event));