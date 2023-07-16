import React, {useState} from "react";

const CounterStopDecrement = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="counter-increment-decrement-flex">
            <p className="counter-increment-decrement-count-text">Count: {count}</p>
            <div className="counter-increment-decrement-count-space">
                <button
                    className="counter-increment-decrement-count-plus"
                    onClick={() => {
                        setCount(count + 1)
                    }}
                >
                    +
                </button>
                <button
                    className="counter-increment-decrement-count-minus"
                    onClick={() => (count == 0 ? setCount(0) : setCount(count - 1))}
                >
                    -
                </button>
            </div>
        </div>
    );
}

export default CounterStopDecrement;