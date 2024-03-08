export default function Todos(props) {

    return (
        <div className="todos">
            <h2>Todo-List:</h2>
            {props.todos.map((todo) => (
                <div key={todo.title} className="todo">
                    <div>
                        <h1>Title:</h1>
                        <h3>{todo.title}</h3>
                    </div>
                    <div>
                        <h1>Date:</h1>
                        <h3>{todo.date}</h3>
                    </div>
                    <div>
                        <h1>Time:</h1>
                        <h3>{todo.time}</h3>
                    </div>
                    <div>
                        <i className="fa-solid fa-trash"></i>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </div>
                </div>
            ))}
        </div>
    )
}