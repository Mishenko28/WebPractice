import { Link } from 'react-router-dom'

export default function Home() {
    
    return (
        <Link to='/todo-list'>
            <div className="home">
                <div className="todo-list-nav">
                    <h1>Todo-List</h1>
                    <i className="fa-solid fa-list-ul" />
                </div>
            </div>
        </Link>
    )
}
