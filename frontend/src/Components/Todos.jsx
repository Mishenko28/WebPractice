export default function Todos(props) {
    return (
        <div className="todos">
            {props.todos.map((todo) => (
                <div key={todo.title} className="todo">
                    <h1>{todo.title}</h1>
                    <h1>{todo.time}</h1>
                    <h1>{todo.date}</h1>
                </div>
            ))}
        </div>
    )
}