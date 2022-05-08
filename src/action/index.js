
export const addProduct = (product) => {
    return {
        type: "ADD_PRODUCT",
        payload: {
            id: new Date().getTime().toString(),
            product: product
        }
    }
}

export const deleteProduct = (id) => {
    return {
        type: "DELETE_PRODUCT",
        payload: id
    }
}