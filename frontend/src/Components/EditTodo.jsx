import 'animate.css'
import { useState } from 'react'
import { useTodoListContext } from '../hooks/useTodoListContext'

export default function EditTodo({ targetTodo, setEditTodoTog }) {
    const [animation, setAnimation] = useState("animate__bounceIn animate__faster")
    const [title, setTitle] = useState(targetTodo.title)
    const [description, setDescription] = useState(targetTodo.description)
    const [time, setTime] = useState(targetTodo.time)
    const [date, setDate] = useState(targetTodo.date)
    const { dispatch } = useTodoListContext()

    const handleCancel = (e) => {
        e.preventDefault()
        setAnimation("animate__bounceOut animate__faster")
        setTimeout(() => {
            setEditTodoTog(false)
        }, 300)
    }

    const handleEditTodo = (e) => {
        e.preventDefault()
        dispatch({type: "UPDATE TODO LIST", payload: {targetTodo, updateTodo:{title, description, time, date}}})
        setEditTodoTog(false)   
    }

    return (
        <div className="edit-todo-bg">
            <form className={"edit-todo animate__animated " + animation}>
                <h1>Edit:<h2>{targetTodo.title.split("", 12)}{targetTodo.title.length > 12 && "..."}</h2></h1>
                <label>Title:</label>
                <input
                    type="text"
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
                    value={time}
                    onChange={e => setTime(e.target.value)}
                />
                <label>Date:</label>
                <input
                    type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                <div className="btns">
                    <button onClick={handleEditTodo}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    )
}