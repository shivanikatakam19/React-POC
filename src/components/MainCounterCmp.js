import { useState } from "react"
import CounterDisplay from "./CounterDisplay";
import CounterControls from "./CounterControls";

export default function MainCounter() {

    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }
    return (
        <div>
            <CounterDisplay count={count} />
            <CounterControls onDecrement={decrement} onIncrement={increment} />
        </div>
    );
}