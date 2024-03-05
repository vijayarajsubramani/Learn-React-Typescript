type HorizontalPosition = 'left' | 'center' | 'right'

type VeritcalPostion = 'top' | 'center' | 'bottom'

type ToastProps = {
    postion: Exclude<`${HorizontalPosition}-${VeritcalPostion}`, 'center-center'> | 'center'
}
//exclude if any dont accept we can skip the props
const Toast = ({ postion }: ToastProps) => {
    return (
        <>
            <h4>Toast postion -{postion}</h4>
        </>
    )
}
export default Toast;