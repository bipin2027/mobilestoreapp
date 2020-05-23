import { act } from "react-dom/test-utils";

const istate = {
    items: [],
    cartTotalItems: 0,
    cartTotal: 0,
    cartOwner: ''
}



const itemReducer = (state = istate, action) => {

    switch (action.type) {
        case 'ADD_ITEM':
            {
                const existingProduct = state.items.filter(product => product.id === action.payload.product.id);
                
                if (existingProduct.length > 0) {
                    const totalItems = state.items
                    totalItems.forEach((product) => {
                        if (product.id === action.payload.product.id) {
                            product.units= product.units+action.payload.product.units
                        }
                    })

                    return {
                        ...state, items: totalItems,
                        cartTotal: state.cartTotal + action.payload.product.price,
                        cartTotalItems: state.cartTotalItems + 1
                    }
                }

                else {
                    return Object.assign({}, state, {
                        items: [...state.items, action.payload.product],
                        cartTotal: state.cartTotal + action.payload.product.price,
                        cartTotalItems: state.cartTotalItems + 1
                    })
                }
            }
        case 'REMOVE_SINGLE_ITEM': {
            const existingProduct = state.items.filter(product => product.id === action.payload.product.id);
            const NonMatchedProducts = state.items.filter(product => product.id !== action.payload.product.id)
            if (existingProduct[0].units > 1) {
                const totalItems = state.items
                totalItems.forEach((product) => {
                    if (product.id === action.payload.product.id) {
                        product.units= product.units-action.payload.product.units
                    }
                })
                return {
                    ...state, items: totalItems,
                    cartTotal: state.cartTotal - action.payload.product.price,
                    cartTotalItems: state.cartTotalItems - 1
                }
            }
            if (existingProduct[0].units === 1) {
                return {
                    ...state, items: NonMatchedProducts,
                    cartTotal: state.cartTotal - action.payload.product.price,
                    cartTotalItems: state.cartTotalItems - 1
                }
            }


        }
        case 'REMOVE_ITEM': {
            const existingProduct = state.items.filter(product => product.id === action.payload.product.id);
            const existingCost = existingProduct[0].units * existingProduct[0].price

            const NonMatchedProducts = state.items.filter(product => product.id !== action.payload.product.id)
            return {
                ...state, items: NonMatchedProducts,
                cartTotal: state.cartTotal - existingCost,
                cartTotalItems: state.cartTotalItems - existingProduct[0].units
            }

        }
              
        default:
            return state;
    }
}

export default itemReducer