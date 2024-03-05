import { useContext } from "react"
import { UserContext } from "./usercontext"

const AuthUser = () => {
    const userDetails = useContext(UserContext)

    const handleLogin = () => {
        userDetails?.setUser({ name: 'vijay', email: 'vijay@gmail.com' })
    }
    const handleLogout=()=>{
        userDetails?.setUser(null)
    }
    return (
        <>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <p>user name is {userDetails?.user?.name}</p>
            <p>user email is {userDetails?.user?.email}</p>
        </>
    )
}
export default AuthUser