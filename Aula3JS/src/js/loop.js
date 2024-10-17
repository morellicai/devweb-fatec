function loop(x){
    console.log(x);
    if(x >= 10){
        return;
    }
    loop(x + 1);
}

// loop(20)

// close
const pessoa = function(nome){
    const getNome = function (){
        return nome;
    }
    return getNome();
}

const aluno = pessoa("Caio");
const resultado = aluno();

console.log(resultado);