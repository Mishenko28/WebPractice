import { Routes, Route } from 'react-router-dom'
import Navbar from "./Components/Navbar"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import TodoList from './pages/TodoList'

export default function App() {

  return (
    <>
      <Navbar />
      <div className="navbar-block"></div>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/signup"
          element={<Signup />}
        />
        <Route
          path="/todo-list"
          element={<TodoList />}
        />
      </Routes>
    </>
  )
}