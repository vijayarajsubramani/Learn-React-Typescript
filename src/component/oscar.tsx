interface OscarProps{
    children:React.ReactNode //nested children group component
}    
const Oscar=({children}:OscarProps)=>{
    return(
        <>
            <h4>{children}</h4>
        </>
    )
}
export default Oscar 

