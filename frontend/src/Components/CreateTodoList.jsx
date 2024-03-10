import { useState } from 'react'
import { useTodoListContext } from '../hooks/useTodoListContext'

export default function CreateTodoList() {    
    const [title, setTitle] = useState("")
    const [time, setTime] = useState("")
    const [date, setDate] = useState("")
    const [error, setError] = useState("")
    const [emptyFields, setEmptyFields] = useState([])
    const { state, dispatch  } = useTodoListContext()

    const handleCreateTodoList = (e) => {
        e.preventDefault()
        if (!title || !time || !date) {
            setError("Please fill all inputs")
            
            if (!title) {
                setEmptyFields(p => ["title", ...p])
            }
            if (!time) {
                setEmptyFields(p => ["time", ...p])
            }
            if (!date) {
                setEmptyFields(p => ["date", ...p])
            }
            return
        }
        
        dispatch({type: "ADD TODO LIST", payload: {title, time, date}})
        setTitle("")
        setTime("")
        setDate("")
        setError("")
        setEmptyFields([])
    }

    return (
        <form className="create-todo">
                <h1>Create Todo</h1>
                <label>Title:</label>
                <input className={emptyFields.includes("title") ? "errorField" : null} type="text" value={title} onChange={e => setTitle(e.target.value)}/>
                <label>Time:</label>
                <input className={emptyFields.includes("time") ? "errorField" : null} type="time" value={time} onChange={e => setTime(e.target.value)}/>
                <label>Date:</label>
                <input className={emptyFields.includes("date") ? "errorField" : null} type="date" value={date} onChange={e => setDate(e.target.value)}/>
                <button onClick={handleCreateTodoList}>Create</button>
                {error && <div className='error'>{error}</div>}
        </form>
    )
}