
const istate ={
    name:"",
    id:''
}
const userReducer = (state=istate,action)=>{
    console.log(action);
    if(action.type==='CHANGE_NAME'){
        return {
            ...state,
            name:action.payload
        }
    }
   
    return state;
}

export default userReducer;