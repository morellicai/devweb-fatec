const antes = document.getElementById('antes');
const depois = document.getElementById('depois');
console.log();

const frutas = []
// adicionar na ultima posição
frutas.push('Maçã');
frutas.push(34);
// adiciona na primeira posição
frutas.unshift('abacaxi', 'pera');
const carrinho = frutas.slice(1,2);
antes.innerHTML = carrinho
// remove o primeiro item array
frutas.shift()
// remove o ultima posição do array
frutas.pop()
depois.innerHTML = frutas;
