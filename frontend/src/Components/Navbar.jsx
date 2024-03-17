import { Link } from 'react-router-dom'
import { useUserContext } from '../hooks/useUserContext'

export default function Navbar() {
    const { state, dispatch } = useUserContext()

    const handleLogout = () => {
        dispatch({type: "LOGOUT"})
        localStorage.removeItem('user')
    }

    return (
        <nav>
            <Link to="/"><h1>JTWebsite</h1></Link>
            <ul>
                {!state.user && <Link to="/signup"><li>Signup</li></Link>}
                {!state.user && <Link to="/login"><li>Login</li></Link>}
                {state.user && <Link onClick={handleLogout} to="/login"><li>Logout</li></Link>}
            </ul>
        </nav>
    )
}