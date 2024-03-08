import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <Link to="/">
                <h1>HOME</h1>
            </Link>
            <ul>
                <Link to="/login"><li>Login</li></Link>
                <Link to="/signup"><li>Signup</li></Link>
            </ul>
        </nav>
    )
}