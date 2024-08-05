export default function CounterControls({ onIncrement, onDecrement }) {
    return (
        <div>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </div>
    );
}