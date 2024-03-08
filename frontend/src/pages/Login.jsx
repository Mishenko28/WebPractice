export default function Login() {
    return (
        <div className="login">
            <form>
                <h1>Welcome Back!</h1>
                <label >Username:</label>
                <input type="email" />
                <label >Password:</label>
                <input type="password" />
                <button>Login</button>
            </form>
        </div>
    )
}