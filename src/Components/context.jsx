import { createContext, useContext } from 'react';
export function ContextVar(){
    
    const value = createContext({
        users:[],
        isLoggedIn:'',
        setUsers:()=>{}
    })
    console.log(value,"coming from contexts")
    return value

}


