import { createContext, useState } from "react";

interface UserContextProps {
    children: React.ReactNode
}
interface AuthUser {
    name: string,
    email: string
}
interface UserContextTypes {
    user: AuthUser | null,
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}
export const UserContext = createContext({} as UserContextTypes) 
// assertion mechanism which tells the compiler about the type of a variable

export const UserContextProvider = ({ children }: UserContextProps) => {
    const [user, setUser] = useState<AuthUser | null>(null)
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}