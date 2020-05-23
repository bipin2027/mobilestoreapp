export const updateName=(name)=>{
    return{
        type:'CHANGE_NAME',
        payload:name
    }
}

export const updateProducts= ()=>{
    return async (dispatch)=>{
        const data = await fetch("https://mobilestore-app-db.herokuapp.com/Products")
        const result = await data.json()

        dispatch({
            type:'UPDATE_PRODUCTS',
            payload:result
        })
    }
}

export const addItem=(item)=>{
    return{
        type:'ADD_ITEM',
        payload:item
    }
    
}
export const removeSingleItem=(item)=>{
    return{
        type:'REMOVE_SINGLE_ITEM',
        payload:item
    }
    
}

export const removeItem=(item)=>{
    return{
        type:'REMOVE_ITEM',
        payload:item
    }
    
}

export const sortItems=(sortType)=>{
    return{
        type:sortType
    }
}

export const selectItem=(item)=>{
    return{
        type:'SELECT-ITEM',
        payload:item
    }
}
