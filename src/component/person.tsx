import { PersonsProps } from "../types/person.types"

const Persons = ({ name: { firstName, lastName } }: PersonsProps) => {
    return (
        <>
            <h5>Hello {firstName} {lastName} </h5>
        </>
    )
}
export default Persons