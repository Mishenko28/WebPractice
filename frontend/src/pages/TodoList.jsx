import Todos from '../Components/Todos'
import CreateTodoList from '../Components/CreateTodoList'

export default function TodoList() {
    return (
        <div className="todo-list">
            <Todos />
            <CreateTodoList />
        </div>
    )
}