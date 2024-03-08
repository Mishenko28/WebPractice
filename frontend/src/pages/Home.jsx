import Todos from '../Components/Todos'

export default function Home() {
    const demoTodos =   [{title: "exercise", time: "asdasd", date: "assdasd"},
                        {title: "asdasd", time: "dbrgsd", date: "gvasrf"},
                        {title: "dfgdfg", time: "bgdsrg", date: "barg"},
                        {title: "ntrn", time: "dnhf", date: "basefv"},
                        {title: "exercimdrtnse", time: "vgarfg", date: "ver"}]
    
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
