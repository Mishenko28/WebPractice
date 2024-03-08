import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <Link to="/">
                <h1>JTWebsite.dev</h1>
            </Link>
            <ul>
                <Link to="/signup"><li>Signup</li></Link>
                <Link to="/login"><li>Login</li></Link>
            </ul>
        </nav>
    )
}