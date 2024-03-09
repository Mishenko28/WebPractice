import Todos from '../Components/Todos'
import { useTodoListContext } from '../hooks/useTodoListContext'
import DeleteCon from '../Components/DeleteCon'
import { useState } from 'react'

export default function Home() {
    const [deleteConTog, setDeleteConTog] = useState(false)
    const { state } = useTodoListContext()
    
    return (
        <div className="home">
            <Todos setDeleteConTog={setDeleteConTog} todos={state.todoList}/>
            <form className="create-todo">
                <h1>Create Todo</h1>
                <label>Title:</label>
                <input type="text" />
                <label>Time:</label>
                <input type="time" />
                <label>Date:</label>
                <input type="date" />
                <button>Create</button>
            </form>
            {deleteConTog && <DeleteCon setDeleteConTog={setDeleteConTog}/>}
        </div>
    )
}
