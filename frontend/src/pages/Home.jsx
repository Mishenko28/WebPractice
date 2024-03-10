import Todos from '../Components/Todos'
import CreateTodoList from '../Components/CreateTodoList'

export default function Home() {
    
    return (
        <div className="home">
            <Todos />
            <CreateTodoList />
        </div>
    )
}
