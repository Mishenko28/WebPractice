import { Link } from 'react-router-dom'
import { useUserContext } from '../hooks/useUserContext'
import { useRef, useState, useEffect } from 'react'

export default function Navbar() {
    const userSettingsRef = useRef(null)
    const [userSettingsTogg, setUserSettingsTogg] = useState(false)
    const { state, dispatch } = useUserContext()

    const handleLogout = () => {
        setUserSettingsTogg(false)
        dispatch({type: "LOGOUT"})
        localStorage.removeItem('user')
    }

    const handleUserSettings = () => {
        setUserSettingsTogg(!userSettingsTogg)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (userSettingsRef.current && !userSettingsRef.current.contains(event.target)) {
            setUserSettingsTogg(false)
          }
        }
    
        document.addEventListener('click', handleClickOutside)
    
        return () => {
          document.removeEventListener('click', handleClickOutside)
        }
      }, [])

    return (
        <nav ref={userSettingsRef}>
            <Link to="/"><h1>JTWebsite</h1></Link>
            <ul className='navs'>
                {!state.user && <Link to="/signup"><li>Signup</li></Link>}
                {!state.user && <Link to="/login"><li>Login</li></Link>}
            </ul>
            {state.user && <div onClick={handleUserSettings} className="user"><i className="fa-solid fa-user" /></div>}
            {userSettingsTogg &&
                <ul className="user-settings">
                    <li>{state.user.email}</li>
                    <Link onClick={handleLogout} to="/login"><li>Logout</li></Link>
                </ul>
            }
        </nav>
    )
}