// function primeira(segunda){
//     const nome = prompt("Qual o seu nome?");
//     segunda(nome)
// }

// primeira(function(nomeRecebido){
//     alert(`Ola, ${nomeRecebido}`)
// })

const pessoa = function(nome){
    const getNome = function (){
        return nome;
    }
    return getNome();
}

const aluno = pessoa("Caio");
const resultado = aluno();
console.log(resultado);