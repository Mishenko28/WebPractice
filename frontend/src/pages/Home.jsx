import Todos from '../Components/Todos'

export default function Home() {
    const time = new Date().getHours() + ":" + new Date().getMinutes()
    const date = new Date().getMonth() + " - " + new Date().getDay() + " - " + new Date().getFullYear()

    const demoTodos =   [{title: "eat", time, date},
                        {title: "dance", time, date},
                        {title: "climb", time, date},
                        {title: "shower", time, date},
                        {title: "sleep", time, date}]
    
    return (
        <div className="home">
            <Todos todos={demoTodos}/>
            <form className="create-todo">
                <h1>Create Todo</h1>
                <label>Title:</label>
                <input type="text" />
                <label>Time:</label>
                <input type="time" />
                <label>Date:</label>
                <input type="date" />
                <button>Create</button>
            </form>
        </div>
    )
}
