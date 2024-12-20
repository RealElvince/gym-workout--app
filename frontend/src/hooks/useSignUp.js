
import { useAuthContext } from "./useAuthContext";

import { useState } from "react";


export const useSignUp = () =>{
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] =useState(null)
    const {dispatch}= useAuthContext()

     // sign up request
    const signup = async (email,password) =>{
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/users/signup',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email,password})
        })

        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }

        if(response.ok){
            // store user into local storage

            localStorage.setItem('user',JSON.stringify(json))

            // update user
            dispatch({type:'LOGIN',payload:json})
            setIsLoading(false)
        }
            
    }
    
    return { signup, error, isLoading };

}