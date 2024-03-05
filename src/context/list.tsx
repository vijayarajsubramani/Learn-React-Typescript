import { useContext } from "react"
import { TheContextValue } from "./context"

const List = () => {
    const data = useContext(TheContextValue)
    return (
        <>
            <p>Age:{data.userDetails.department}</p>
        </>
    )
}
export default List