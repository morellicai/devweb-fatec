const senha = document.getElementById('senha');
const atender = document.getElementById('atender');
const lista = document.getElementById('lista');
const fila = [];
// Botão senha com a logica dos inp
senha.addEventListener('click', (event) => {
    event.preventDefault();
    const idade = document.getElementById('idade').value
    if(idade >= 65){
        inicioFila(idade);
    } else {
        finalFila(idade);
    }
})
function inicioFila(idade){
    fila.unshift(idade);
    exibir();
}
function finalFila(idade){
    fila.push(idade);
    exibir();
}
function exibir(){
    lista.innerHTML = fila
}
// Botão atender
atender.addEventListener('click', (event) => {
    event.preventDefault();
    retirarFila(fila)
})

function retirarFila(fila){
    fila.shift()
    exibir();
}