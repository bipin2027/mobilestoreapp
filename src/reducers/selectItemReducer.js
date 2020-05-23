const selectItemReducer = (state={},action)=>{
    console.log(action);
    if(action.type==='SELECT-ITEM'){
        // console.log( 'bpin')
        // console.log( action.payload)
        return Object.assign({}, state, action.payload)
    }
    return state;
}

export default selectItemReducer;