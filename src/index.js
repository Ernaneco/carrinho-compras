import * as cartService from "./services/cart.js";
import createItem from "./services/item.js"; 
const myCart = [];

console.log("Bem-vindo ao carrinho de compras!\n")

// criando dois itens
const item1 = await createItem("dixit", 200, 1);
const item2 = await createItem("mini azul", 149.99, 2);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2);

await cartService.displayCart(myCart);
//await cartService.deleteItem(myCart, item2.name);

await cartService.calculateTotal(myCart);