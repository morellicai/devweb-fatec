const app = document.getElementById("app");

function calcular(num1, num2, sinal) {
    if(sinal == "Somar"){
        return num1 + num2;
    }else if(sinal == "Subtrair"){
        return num1 - num2;
    } else if(sinal == "Dividir"){
        return num1 / num2;
    } else if(sinal == "Multiplicar"){
        return num1 * num2;
    }
}

const calc = document.getElementById("form-result");
calc.addEventListener("submit", function(event){
    const num1 = parseFloat(document.getElementById("numero1").value);
    const num2 = parseFloat(document.getElementById("numero2").value);
    event.preventDefault();
    
    const sinal = event.submitter.textContent;
    calcular(num1, num2, sinal);
    app.textContent = calcular(num1, num2, sinal);
})