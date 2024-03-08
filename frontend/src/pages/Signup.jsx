export default function Signup() {
    return (
        <div className="signup">
            <form>
                <h1>New Account</h1>
                <label >Username:</label>
                <input type="email" />
                <label >Password:</label>
                <input type="password" />
                <button>Signup</button>
            </form>
        </div>
    )
}