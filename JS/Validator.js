function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function validateY (event) {
    const MIN = -3;
    const MAX = 5;
    const expPattern = /^[+\-]?\d+(\.\d+)?([eE][+\-]?\d+)$/;
    let var_y = document.getElementById("Y");
    numY = parseFloat(var_y.value.replace(',', '.'));
    if(expPattern.test(numY)){
        alert("Число не может быть введено в экспоненциальнной форме")
        event.preventDefault();
        return false;
    } else if(isNumeric(numY) && numY<= MAX && numY >= MIN){
        return true;
    }else {
        alert("Число должно быть больше 5 и меньше 3")
        event.preventDefault();
        return false;
    }

}
document.getElementById("feedBack").addEventListener("submit", event=>validateY(event));