import { useState } from 'react'
import { useTodoListContext } from '../hooks/useTodoListContext'
import 'animate.css'

export default function DeleteCon({ targetTodo, setDeleteConTog }) {
    const [animation, setAnimation] = useState("animate__bounceIn animate__faster")
    const { dispatch } = useTodoListContext()

    const handleDeleteTodoList = () => {
        setAnimation("animate__bounceOut animate__faster")
        setTimeout(() => {
            setDeleteConTog(false)
            dispatch({type: "DELETE TODO LIST", payload: targetTodo})
        }, 400)
    }

    const handleCancel = () => {
        setAnimation("animate__bounceOut animate__faster")
        setTimeout(() => {
            setDeleteConTog(false)
        }, 300)
    }

    return (
        <div className="delete-confirmation-bg">
            <div className={"delete-confirmation animate__animated " + animation}>
                <h1>Are you sure you want to delete: <span>{targetTodo.title.split("", 15)}{targetTodo.title.length > 15 && "..."}</span>?</h1>
                <div className="btns">
                    <button onClick={handleDeleteTodoList}>Delete</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        </div>
    )
}