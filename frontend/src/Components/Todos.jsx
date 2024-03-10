import { useTodoListContext } from '../hooks/useTodoListContext'
import DeleteCon from '../Components/DeleteCon'
import { useState } from 'react'
import 'animate.css'

export default function Todos() {
    const [toDelete, setToDelete] = useState({})
    const [deleteConTog, setDeleteConTog] =  useState(false)
    const { state } = useTodoListContext()

    const handleDelete = (todo) => {
        setDeleteConTog(true)
        setToDelete(todo)
    }

    return (
        <div className="todos">
            <h2>Todo-List:</h2>
            {state.todoList.map((todo) => (
                <div key={todo.title} className="todo animate__animated animate__fadeIn">
                    <div>
                        <h1>Title:</h1>
                        <h3>{todo.title}</h3>
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
                        <i className="fa-solid fa-trash" onClick={() => handleDelete(todo)}></i>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </div>
                </div>
            ))}
            {deleteConTog && <DeleteCon toDelete={toDelete} setDeleteConTog={setDeleteConTog}/>}
        </div>
    )
}