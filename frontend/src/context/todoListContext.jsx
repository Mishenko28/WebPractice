import { createContext, useReducer } from "react"

export const TodoListContext = createContext()

const time = new Date().getHours() + ":" + new Date().getMinutes()
const date = new Date().getMonth() + " - " + new Date().getDay() + " - " + new Date().getFullYear()

const reducer = (state, action) => {
    switch (action.type) {
        case "SET ALL TODO LIST":
            return { todoList: [action.payload] }
        case "DELETE TODO LIST":
            return state.todoList.filter(todo => todo !== action.payload)
        default:
            return state
    }
}

export default function TodoListContextProvider({children}) {
    const [state, dispatch] = useReducer(reducer, {
        todoList:   [{title: "eat", time, date},
                    {title: "dance", time, date},
                    {title: "climb", time, date},
                    {title: "shower", time, date},
                    {title: "sleep", time, date}]
    })

    return (
        <TodoListContext.Provider value={{state, dispatch}}>
            {children}
        </TodoListContext.Provider>
    )
}