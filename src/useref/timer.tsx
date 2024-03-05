import { useEffect, useRef, useState } from "react"

const MutableRef = () => {
    const [timer, setTimer] = useState<number>(0)
    const timerRef = useRef<number | undefined>(undefined) // number undefined

    const handleStopTimer = () => {
        if (timerRef.current) window.clearInterval(timerRef.current) //glowbal window must be required
    }
    useEffect(() => {
        timerRef.current = window.setInterval(() => {
            setTimer((p) => p + 1)
        }, 1000)
        return () => handleStopTimer()
    }, [])

    return (
        <>
            <p>timer {timer}</p>
            <button onClick={handleStopTimer}>stop timer</button>
        </>
    )
}
export default MutableRef