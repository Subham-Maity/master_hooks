import {useState, useEffect} from "react";

export function UpdateTitle() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `you clicked ${count} `
    }, [count])

    const incrementCount = () => {
        setCount(count + 1)
    }

    const decrementCount = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <p className="update-title-text"> click : {count} </p>
            <button
                className="update-title-button" onClick={incrementCount}>
                Increase
            </button>
            <div className="m-2"></div>
            <button
                className="update-title-button" onClick={decrementCount}>
                Decrease
            </button>
        </div>
    );
}