import { Routes, Route, Navigate } from 'react-router-dom'
import { useUserContext } from './hooks/useUserContext'
import Navbar from "./Components/Navbar"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import TodoList from './pages/TodoList'
import Test from './pages/Test'

export default function App() {
  const { state } = useUserContext()

  return (
    <>
      <Navbar />
      <div className="navbar-block"></div>
      <Routes>
        <Route
          path="/"
          element={state.user ? <Home /> : <Navigate to='/login'/>}
        />
        <Route
          path="/login"
          element={!state.user ? <Login /> : <Navigate to='/'/>}
        />
        <Route
          path="/signup"
          element={!state.user ? <Signup /> : <Navigate to='/'/>}
        />
        <Route
          path="/todo-list"
          element={<TodoList />}
        />
        <Route
          path="/test"
          element={<Test />}
        />
      </Routes>
    </>
  )
}