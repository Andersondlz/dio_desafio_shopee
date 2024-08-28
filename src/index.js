import createItem from "./services/item.js";
import * as cartService from "./services/cart.js"

const myCart = [];
const myWhislist = [];

console.log("Welcome to the your Shopee Cart!")

const item1 = await createItem("Hotwheels ferrari", 20.99, 7);
const item2 = await createItem("Hotwhells Lamborguine", 39.99, 3)

//adicionar itens no carrinho
await cartService.addItem(myCart,item1)
await cartService.addItem(myCart,item2)

//await cartService.removeItem(myCart,0)

await cartService.removeItem(myCart,item1)

await cartService.displayCart(myCart)
await cartService.removeItem(myCart,item2)

//adicionar itens na lista favorito
await cartService.addItem(myWhislist,item2)

//deletar iten do carrinho
//await cartService.deleteItem(myCart,item2.name)

await cartService.calculeteTotal(myCart);

//console.log(item2.subtotal())

