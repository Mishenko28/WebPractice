import { useTodoListContext } from '../hooks/useTodoListContext'
import { useUserContext } from '../hooks/useUserContext'
import { useState, useEffect } from 'react'
import DeleteCon from '../Components/DeleteCon'
import EditTodo from '../Components/EditTodo'

export default function Todos() {
    const [targetTodo, setTargetTodo] = useState({})
    const [deleteConTog, setDeleteConTog] =  useState(false)
    const [editTodoTog, setEditTodoTog] = useState(false)

    const { state, dispatch } = useTodoListContext()
    const { state: userState } = useUserContext()

    const handleDelete = (todo) => {
        setDeleteConTog(true)
        setTargetTodo(todo)
    }

    const handleEditTodo = (todo) => {
        setEditTodoTog(true)
        setTargetTodo(todo)
    }

    useEffect(() => {
        const fetchAllTodolist = async () => {
            const response = await fetch('http://localhost:3000/todoList', {
                headers: {'Authorization': "Bearer " + userState.user.token}
            })

            const json = await response.json()
            
            if (response.ok) {
                dispatch({type: "SET ALL TODO LIST", payload: json})
            }
        }

        fetchAllTodolist()
    }, [])

    return (
        <div className="todos">
            <h2>Todo-List:</h2>
            {state.todoList.length == 0 && <div className="todo"><h4>none</h4></div>}
            {state.todoList.map((todo) => (
                <div key={todo._id} className="todo">
                    <div>
                        <h1>Title:<h5>{todo.title}</h5></h1>
                        <h3>{todo.description || "no description"}</h3>
                    </div>
                    <div>
                        <h1>Date:</h1>
                        <h3>{todo.date}</h3>
                    </div>
                    <div>
                        <h1>Time:</h1>
                        <h3>{todo.time}</h3>
                    </div>
                    <div>
                        <i className="fa-solid fa-trash" onClick={() => handleDelete(todo)} />
                        <i className="fa-solid fa-pen-to-square" onClick={() => handleEditTodo(todo)} />
                    </div>
                </div>
            ))}
            {editTodoTog && <EditTodo targetTodo={targetTodo} setEditTodoTog={setEditTodoTog}/>}
            {deleteConTog && <DeleteCon targetTodo={targetTodo} setDeleteConTog={setDeleteConTog}/>}
        </div>
    )
}