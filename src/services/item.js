// Mapear os casos de usos dos itens

// -> Criar item com Subtotal certo
async function createItem(name,price,quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity,
    }
}

export default createItem;
//
