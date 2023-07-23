import {useState,useEffect} from "react";

export function UpdateTitle() {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count+1)
    }

    useEffect(()=>{
        document.title = `You clicked ${count} times`;
    },[count])
    return (
        <div>
            <p className="update-title-text"> click : {count}</p>
            <button
                className="update-title-button" onClick={increment}>
                Click me
            </button>
        </div>
    );
}
