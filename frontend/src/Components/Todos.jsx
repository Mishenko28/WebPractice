import { useTodoListContext } from '../hooks/useTodoListContext'
import DeleteCon from '../Components/DeleteCon'
import EditTodo from '../Components/EditTodo'
import { useState } from 'react'
import 'animate.css'

export default function Todos() {
    const [targetTodo, setTargetTodo] = useState({})
    const [deleteConTog, setDeleteConTog] =  useState(false)
    const [editTodoTog, setEditTodoTog] = useState(false)
    const { state } = useTodoListContext()

    const handleDelete = (todo) => {
        setDeleteConTog(true)
        setTargetTodo(todo)
    }

    const handleEditTodo = (todo) => {
        setEditTodoTog(true)
        setTargetTodo(todo)
    }

    return (
        <div className="todos">
            <h2>Todo-List:</h2>
            {state.todoList.length == 0 && <div className="todo"><h4>none</h4></div>}
            {state.todoList.map((todo) => (
                <div key={todo.title} className="todo animate__animated animate__fadeIn">
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
                        <i className="fa-solid fa-trash" onClick={() => handleDelete(todo)}>Trash</i>
                        <i className="fa-solid fa-pen-to-square" onClick={() => handleEditTodo(todo)}>Edit</i>
                    </div>
                </div>
            ))}
            {editTodoTog && <EditTodo targetTodo={targetTodo} setEditTodoTog={setEditTodoTog}/>}
            {deleteConTog && <DeleteCon targetTodo={targetTodo} setDeleteConTog={setDeleteConTog}/>}
        </div>
    )
}