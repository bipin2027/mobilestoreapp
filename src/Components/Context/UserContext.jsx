import React, { useState } from 'react'

export const UserContext= React.createContext();

export const ContextProvider =props =>{
    const[name,SetName] = useState('');
    const[cart,setCart] = useState('1234')
    return(
    <UserContext.Provider value={[name,SetName,cart,setCart]}>{props.children}</UserContext.Provider>
    );
}

