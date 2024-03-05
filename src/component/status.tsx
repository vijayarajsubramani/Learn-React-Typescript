interface StatusProps {
    status: 'loading' | 'success' | 'failure' //union types
}
const Status = ({ status }: StatusProps) => {

    let message;
    if (status === 'success') {
        message = 'Success'
    } else if (status === 'failure') {
        message = 'Failure'
    } else if (status === 'loading') {
        message = 'Loading'
    }

    return (
        <>
            <h4>Message {message}</h4>
        </>
    )
}
export default Status