import React, {useState, useEffect} from "react";

const ClearUp = () => {
    const [widthCount, setWidthCount] = useState(window.screen.height);
    const [heightCount, setHeightCount] = useState(window.screen.width);

    const currentScreenWidth = () => {
        setWidthCount(() => window.innerWidth);
    }
    const currentScreenHeight = () => {
        setHeightCount(() => window.innerHeight)
    }
    useEffect(() => {
        window.addEventListener('resize', currentScreenWidth),
            window.addEventListener("resize", currentScreenHeight)
    })

    return (
        <div>
            <h2 className="font-bold text-stone-200 text-2xl mb-2">The size of the window is <span
                className="font-bold text-[#3581a0]"> {widthCount} </span></h2>
            <h2 className="font-bold text-stone-200 text-2xl">The size of the window is <span
                className="font-bold text-[#3581a0]"> {heightCount} </span></h2>
        </div>
    );
};
export default ClearUp;