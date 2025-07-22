import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }){

    const [ user, setUser ] = useState(() =>{
        const isLogin = localStorage.getItem('user');
        return isLogin ? JSON.parse(isLogin) : null;
    })

    return(
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )

}