export interface ProfileProps {
    name: string
}
const Profile = ({ name }: ProfileProps) => {
    return (
        <>
            <h4>This Profile component Name is {name}</h4>
        </>
    )
}

export default Profile
