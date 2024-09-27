const titulo = document.getElementById('exibir')

let num1 = 5
let num2 = 4
let sinal = ""
let result;

switch(sinal){
    case "+":
        result = num1 + num2
        break;
    case "-":
        result = num1 - num2
        break;
    case "/" || ":":
        result = num1 / num2
        break;
    case "*" || "x":
        result = num1 * num2
        break;
    default:
         resultado = "Operação inválida"
}
titulo.innerHTML = result