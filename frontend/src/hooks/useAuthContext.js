

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useAuthContext = () =>{
    const authcontext = useContext(AuthContext)
    
    if (!context){
        throw Error('useAuthContext must used inside a AuthContextProvider.');
        
    }

    return context
}