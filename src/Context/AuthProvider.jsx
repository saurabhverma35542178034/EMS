import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../Utils/localStorage';

export const AuthContext= createContext();
const AuthProvider = ({children}) => {
    // localStorage.clear();
   const [users,setUsers]= useState(null);
   
   useEffect(()=>{
    setLocalStorage()
    const {employees, admin}= getLocalStorage();
    setUsers({employees, admin});
   },[])
   

  return (
    <div>
        <AuthContext.Provider value={users}>
        {children}
        </AuthContext.Provider>
       
    </div>
  )
}

export default AuthProvider
