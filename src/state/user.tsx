import { useState } from "react";

interface UsersProps {
    name: string,
    email: string
}

const Users = () => {
    // const [user, setUsers] = useState<UsersProps | null>(null);
    const [user, setUsers] = useState<UsersProps>({} as UsersProps);


    const handleLogin = () => {
        setUsers({ name: 'vijayaraj', email: 'vijayaraj@gmail.com' })
    }

    // const handleLogout = () => setUsers(null)

    return (
        <>
            <button onClick={handleLogin}>Login</button>
            {/* <button onClick={handleLogout}>Log out</button> */}
            <h5>User Name is : {user?.name}</h5>
            <h5>User Email is : {user?.email}</h5>
        </>
    )
}
export default Users;