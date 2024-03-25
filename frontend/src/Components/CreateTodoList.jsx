import { useState } from 'react'
import { useTodoListContext } from '../hooks/useTodoListContext'
import { useUserContext } from '../hooks/useUserContext'

export default function CreateTodoList() {    
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [time, setTime] = useState("")
    const [date, setDate] = useState("")
    const [error, setError] = useState("")
    const [emptyFields, setEmptyFields] = useState([])

    const { dispatch  } = useTodoListContext()
    const { state } = useUserContext()

    const handleCreateTodoList = async (e) => {
        e.preventDefault()
        if (!title || !time || !date) {
            setEmptyFields([])
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
        
        const response = await fetch('http://localhost:3000/todoList', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + state.user.token
            },
            body: JSON.stringify({title, description: description.trim(), time, date})
        })

        const json = await response.json()


        dispatch({type: "ADD TODO LIST", payload: json})
        setTitle("")
        setDescription("")
        setTime("")
        setDate("")
        setError("")
        setEmptyFields([])
    }

    return (
        <form onSubmit={handleCreateTodoList} className="create-todo">
                <h1>Create Todo</h1>
                <label>Title:</label>
                <input
                    type="text"
                    style={emptyFields.includes("title") ? {border: "2px solid #f00"} : null}
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <label>Description:</label>
                <textarea
                    rows= '6'
                    placeholder='optional'
                    type="text"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <label>Time:</label>
                <input
                    type="time"
                    style={emptyFields.includes("time") ? {border: "2px solid #f00"} : null}
                    value={time}
                    onChange={e => setTime(e.target.value)}
                />
                <label>Date:</label>
                <input
                    type="date"
                    style={emptyFields.includes("date") ? {border: "2px solid #f00"} : null}
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                <button>Create</button>
                {error && <div className='error'>{error}</div>}
        </form>
    )
}