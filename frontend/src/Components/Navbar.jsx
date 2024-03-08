import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <Link to="/">
                <h1>Contact.io</h1>
            </Link>
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
            </ul>
        </nav>
    )
}