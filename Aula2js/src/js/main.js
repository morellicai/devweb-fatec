const titulo = document.getElementById('exibir')

let num1 = 5
let num2 = 4
let sinal = ""
let result;


if(sinal == "+"){
    result = num1 + num2
} else if(sinal == "-"){
    result = num1 - num2
} else if(sinal == "/" || sinal == ":"){
    result = num1 / num2
} else if(sinal == "*" || sinal == "x"){
    result = num1 * num2
}

titulo.innerHTML = result