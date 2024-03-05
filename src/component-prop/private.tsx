import Login from "./login"
import { ProfileProps } from "./profile"

type PrivateProps = {
    isLoggedIn: boolean,
    component: React.ComponentType<ProfileProps>
}
const Private = ({ isLoggedIn, component:Component }: PrivateProps) => {
    return (
        <>
            {isLoggedIn ? <Component name='Vijayaraj'/> : <Login />}
        </>
    )
}
export default Private