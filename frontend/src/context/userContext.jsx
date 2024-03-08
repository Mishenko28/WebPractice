import { createContext, useState } from "react"

export const UserContext = createContext()

export default function UserContextProvider({children}) {
    
    return (
        <UserContext.Provider value={1}>
            {children}
        </UserContext.Provider>
    )
}