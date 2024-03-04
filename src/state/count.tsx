import { useReducer } from "react"

type CounterState = {
    count: number
}
type UpdateAction = {
    type: 'INCREMENT' | 'DECREMENT',
    payload: number
}
type ResetAction = {
    type: 'RESET'
}
type CounterAction = UpdateAction | ResetAction
// type CounterAction = {
//     type: string,
//     payload: number
// }

const initialCount = { count: 0 }
const reducer = (state: CounterState, action: CounterAction) => {
    switch (action.type) {
        case 'INCREMENT': {
            return { count: state.count + action.payload }
        }
        case 'DECREMENT': {
            return { count: state.count - action.payload }
        }
        case 'RESET': return initialCount
        
        default: return state

    }
}
const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialCount)

    const hanldeIncrement = () => {
        dispatch({ type: 'INCREMENT', payload: 10 })
    }
    const hanldeDecrement = () => {
        dispatch({ type: 'DECREMENT', payload: 10 })
    }
    const handleReset = () => {
        dispatch({ type: 'RESET' })
    }
    return (
        <>
            <p>Count {state.count}</p>
            <button onClick={hanldeIncrement}>Increment</button>
            <button onClick={hanldeDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}
export default Counter