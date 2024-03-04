interface InputProps {
    value: string,
    handleChange: (event:React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ handleChange, value }: InputProps) => {
    return (
        <>
            <input type="text" value={value} onChange={handleChange} />
        </>
    )
}
export default Input