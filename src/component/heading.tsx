interface HeadingProps{
    children:string //children 
}
const Heading = ({children}:HeadingProps) => {
    return(
        <>
            <h4>{children}</h4>
        </>
    )
}
export default Heading