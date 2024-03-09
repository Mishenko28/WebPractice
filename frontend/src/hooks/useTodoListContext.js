import { useContext } from 'react'
import { TodoListContext } from '../context/todoListContext'

export const useTodoListContext = () => {
    const context = useContext(TodoListContext)
    return context
}