const titulo = document.getElementById('exibir')

let nome = "abc"
let senha = "123"
let nome2 = "def"
let senha2 = "456"
let mensagem;

if (nome2 != "abc" && senha2 != "123"){
    mensagem = ("Acesso negado")
} else {
    mensagem = ("Acesso permitido")
}
titulo.innerHTML = mensagem