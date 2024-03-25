import { createContext, useReducer } from "react"

export const TodoListContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case "SET ALL TODO LIST":
            return { todoList: action.payload }
        case "DELETE TODO LIST":
            return { todoList: state.todoList.filter(todo => todo._id !== action.payload.todoList._id) }
        case "ADD TODO LIST":
            return { todoList: [...state.todoList, action.payload] }
        case "UPDATE TODO LIST":
            const temp = state.todoList.filter(todo => todo._id !== action.payload.targetTodo._id)
            return { todoList: [action.payload.updateTodo.todoList, ...temp] }
        default:
            return state
    }
}

export default function TodoListContextProvider({children}) {
    const [state, dispatch] = useReducer(reducer, {
        todoList: []
    })
    

    return (
        <TodoListContext.Provider value={{state, dispatch}}>
            {children}
        </TodoListContext.Provider>
    )
}