import { useEffect, useRef } from "react"

const InputRef = () => {
    const inputRef = useRef<HTMLInputElement>(null!); //note here null ! or union 

    useEffect(()=>{
        inputRef.current.focus() // or we can check optional chaining ? 
    },[])
    
    return (
        <>
            <input type="text" ref={inputRef} />
        </>
    )
}
export default InputRef