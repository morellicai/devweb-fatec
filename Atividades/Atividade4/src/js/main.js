const products = [
    { name: "Computador", price: 3000.00, stock: 5 },
    { name: "Notebook", price: 5000.00, stock: 3 },
    { name: "Monitor", price: 800.00, stock: 2 },
    { name: "Teclado s/ Fio", price: 300.00, stock: 10},
    { name: "Mouse s/ Fio", price: 250.00, stock: 4 }
];

let cart = [];
let isAscending = true;

function displayProducts(productsToDisplay) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    productsToDisplay.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <p>
                <strong>${product.name}</strong> - R$ ${product.price.toFixed(2)}
            </p>  
            <button onclick="addToCart('${product.name}')">
                Adicionar ao Carrinho
            </button>
        `;
        productList.appendChild(productDiv);
    });
}
displayProducts(products)

document.querySelector('#busca').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const filterProduct = products.filter(product => product.name.toLowerCase().includes(query));
    displayProducts(filterProduct);
})

function addToCart(productName) {
    const product = products.find(p => p.name === productName);
    if (product && product.stock > 0){
        cart.push(product);
        product.stock--;
        updateCart();
        displayProducts(products);
    } else {
        alert("Produto fora de estoque.")
    }
}

function updateCart(){
    const cartList = document.getElementById('itens')
    cartList.innerHTML = "";

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'product';
        cartItem.innerHTML = `
            <p>
                <strong>${item.name}</strong> - R$ ${item.price.toFixed(2)}
            </p>  
            <button onclick="remove('${item.name}')">Remover</button>
        `
        cartList.appendChild(cartItem);
    })
    updateTotal()
}

function remove(productName) {
    const index = cart.findIndex(item => item.name === productName);
    if (index > -1){
        const product = cart[index];
        cart.splice(index, 1);
        const originalProduct = products.find(p => p.name === product.name);
        originalProduct.stock++;
        updateCart();
        displayProducts(products);
    }
}

function updateTotal() {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    document.getElementById('valorTotal').innerText = `Total: R$ ${total.toFixed(2)}`;
}
function sortCart(){
    if (cart.length === 0) {
        alert('O carrinho está vazio. Adicione produtos para ordenar.');
        return
    }
    cart.sort((a, b) => isAscending ? Number(a.price) - Number(b.price) : Number(b.price) - Number(a.price));
    console.log("Carrinho ordenado:" + cart)
    updateCart();
    isAscending = !isAscending;
    document.getElementById('sort').innerText = isAscending ? 'Ordenar por Preço: Crescente' : 'Ordenar por Preço: Decrescente';
}
document.getElementById('sort').addEventListener('click',sortCart);