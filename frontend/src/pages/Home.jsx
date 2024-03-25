import { Link } from 'react-router-dom'

export default function Home() {
    
    return (
        <div className="home">
            <Link to='/todo-list'>
                <div className="default-style todo-list-nav">
                    <h1>Todo-List</h1>
                    <i className="fa-solid fa-list-ul" />
                </div>
            </Link>
            <Link to='/test'>
                <div className="default-style test-nav">
                    <h1>Test</h1>
                    <i className="fa-solid fa-code" />
                </div>
            </Link>
        </div>
    )
}
