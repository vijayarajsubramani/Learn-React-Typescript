interface GreetProps {
    name: string,
    messageCount?:number,
    isLoggedIn:boolean
}
const Greets = ({ name,messageCount,isLoggedIn }: GreetProps) => {
    return (
        <>
            {isLoggedIn ? <h5>Hello {name} messagecount {messageCount || 0} </h5>:'User is Not LoggedIn'}
        </>
    )
}
export default Greets