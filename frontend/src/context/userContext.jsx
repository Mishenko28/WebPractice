import { createContext, useReducer, useEffect } from "react"

export const UserContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { user: action.payload }
        case "LOGOUT":
            return { user: null }
        default:
            return state
    }
}

export default function UserContextProvider({children}) {
    const [state, dispatch] = useReducer(reducer, {user: null})

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
    
        if (user) {
          dispatch({type:"LOGIN", payload: user}) 
        }
      }, [])

    return (
        <UserContext.Provider value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}