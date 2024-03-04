import { Names } from "../types/person.types"

interface PersonListProps {
    list: Names[] //if passing array of object 
}
const PersonList = ({ list }: PersonListProps) => {
    return (
        <>
            {list.map((item, index) => <p key={index}>{item.firstName} {item.lastName}</p>)}
        </>
    )
}
export default PersonList