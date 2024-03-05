type ButtonProps = {
    variant: 'red' | 'blue',
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

const ButtonElement = ({ variant, children, ...rest }: ButtonProps) => {
    return (
        <>
            <button style={{ color: variant }} {...rest}>{children}</button>
        </>
    )
}
export default ButtonElement