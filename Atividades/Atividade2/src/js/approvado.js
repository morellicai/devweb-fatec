const titulo = document.getElementById('exibir')

let media = 7
let falta = 10
let media2 = 5
let falta2 = 10
let media3 = 10
let falta3 = 30
let mensagem;
if(media3 >= 7.0 && falta3 <= 20){
    mensagem = ("Você passou!")
} else {
    mensagem = ("Não passou")
}
titulo.innerHTML = mensagem