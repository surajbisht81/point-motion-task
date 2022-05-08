
const appReducer = (state=[], action) => {
    switch(action.type) {
        case 'ADD_PRODUCT':
            const {id, product} = action.payload;

            return [
                ...state,
                {
                    id: id,
                    product: product
                }
            ];

        case 'DELETE_PRODUCT':
            const filteredProducts = state.filter((item) => item.id !== action.payload);
            return filteredProducts;
        
        default: return state;
    }
}

export default appReducer;