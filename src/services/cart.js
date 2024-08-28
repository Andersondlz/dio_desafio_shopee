// quais ações meus carrinho vai fazer


// Casos de Uso
// -> adicionar itens
async function addItem(userCart,item) {
    userCart.push(item)
}

// -> calcular total 
async function calculeteTotal(userCart) {   
    console.log("\n Shopee Cart Total")
    const result =  userCart.reduce((total, item)=>  total + item.subtotal(), 0)
    console.log(`🛒 Total: ${result}`)
}

// -> deletar itens do carrinho
async function deleteItem(userCart,name) {
    const index = userCart.findIndex((item) => item.name === name)
        userCart.splice(index, 1)
}

// -> remover um itens do carrinho
//async function removeItem(userCart,index) {
//    const deleteIndex = index -1;
//   if (index >= 0 && index < userCart.length){
//        userCart.splice(deleteIndex, 1);
//    }
//}

async function removeItem(userCart,item) {
    // encontrar o index do item a ser removido
    const indexFound = userCart.findIndex((p) => p.name === item.name)

    // caso ele nao encontre um item 
    if (indexFound == -1){
        console.log("Item não encontrato")
        return
    }
    
    // item > 1 subtrair um item, item = 1 precisa deletar o item

    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return
    }

    if (userCart[indexFound].quantity == 1){
        userCart.splice(indexFound,1);
        return
    }
}

async function displayCart(userCart){
    console.log("\n Shopee Card list: ")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`);
    });
}

export {
    addItem,
    calculeteTotal,
    deleteItem,
    removeItem,
    displayCart,
}


