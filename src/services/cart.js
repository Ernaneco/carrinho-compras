// ações carrinho

// adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

// deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if (index !== -1) {
        userCart.splice(index, 1);
    }
}

// diminuir um item do carrinho
// async function removeItem(userCart, index) {
//     // transforma o índice visual do usuário para o índice do back-end
//     const deleteIndex = index - 1;
//     // índice maior do que zero e menor do que o tamanho do carrinho
//     if (index >= 0 && index <= userCart.length) {
//         userCart.splice(deleteIndex, 1);
//     }
// }

// remover item usando item ao invés do index
async function removeItem(userCart, item) {
    // encontrar o índice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name);
    
    // caso não encontre o item
    if (indexFound == -1) {
        console.log("Item não encontrado");
        return;
    }

    // caso item > 1: subtrair um item
    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }

    // caso item = 1 deletar o item
    if (userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return;
    }
}

// calcular Total do carrinho
async function calculateTotal(userCart) {
    console.log("\nTotal do carrinho de compras:\n")
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`Total: ${result}`);
}

async function displayCart(userCart) {
    console.log("Lista do carrinho de compras:")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} x ${item.quantity} | Subtotal = ${item.price * item.quantity}`);
    });
}

export {
    addItem, 
    calculateTotal,
    removeItem,
    deleteItem,
    displayCart,
}