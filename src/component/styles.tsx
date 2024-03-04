interface StylesProps {
    style: React.CSSProperties
}
const Styles = ({ style }: StylesProps) => {
    return (
        <>
            <h4 style={style}>Apply styles</h4>
        </>
    )
}
export default Styles;