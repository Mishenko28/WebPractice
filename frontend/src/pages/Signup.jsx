import { useState } from "react"
import { useUserContext } from '../hooks/useUserContext'

export default function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const { dispatch } = useUserContext()

    const handleSubmit = async (e) => {
        e.preventDefault()

        setIsLoading(true)
        setError(null)

        const response = await fetch('http://localhost:3000/user/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })

        const json = await response.json()

        if (response.ok) {
            localStorage.setItem('user', JSON.stringify(json))
            dispatch({type: "LOGIN", payload: json})

            setEmail("")
            setPassword("")
        }else {
            setError(json.error)
        }

        setIsLoading(false)
    }

    return (
        <div className="signup">
            <form onSubmit={handleSubmit}>
                <h1>New Account</h1>
                <label >Username:</label>
                <input
                    type="email"
                    autoComplete="current-password"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label >Password:</label>
                <input
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button disabled={isLoading}>Signup</button>
                <span>{error}</span>
            </form>
        </div>
    )
}