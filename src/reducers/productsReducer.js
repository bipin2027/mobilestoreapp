
const productsReducer = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_PRODUCTS': {
            return action.payload
        }
        case 'RETAIL-PRICE-ASC-C': {
            const existingProducts = state;
            const sortedProducts = existingProducts.sort(function(p1, p2){
                return p1.price-p2.price
            })

            return sortedProducts

        }
        case 'RETAIL-PRICE-DESC-C': {
            const existingProducts = state;
            const sortedProducts = existingProducts.sort(function(p1, p2){
                return p2.price-p1.price
            })

            return sortedProducts

        }
        default:
            return state;

    }
}

export default productsReducer;



