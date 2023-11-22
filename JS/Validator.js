function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function validateY (event) {
    const MIN = -3;
    const MAX = 5;

    let var_y = document.getElementById("Y");
    numY = parseFloat(var_y.value.replace(',', '.'));
    if(isNumeric(numY) && numY<= MAX && numY >= MIN){
        return true;
    }else {
        alert("Число должно быть больше 5 и меньше 3")
        event.preventDefault();
        return false;
    }

}
document.getElementById("feedBack").addEventListener("submit", event=>validateY(event));