interface ButtonProps {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}
const Button = ({ handleClick }: ButtonProps) => {
    return (
        <>
            <button onClick={(event) => handleClick(event, 10)}>Click Me</button>
        </>
    )
}
export default Button