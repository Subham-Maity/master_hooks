// "use client"
// import React, {useState, useEffect} from "react";
//
// const ClearUp = () => {
//     const [widthCount, setWidthCount] = useState(window.screen.height);
//     const [heightCount, setHeightCount] = useState(window.screen.width);
//
//
//     const currentScreenWidth = () => {
//         setWidthCount(() => window.innerWidth);
//     }
//     const currentScreenHeight = () => {
//         setHeightCount(() => window.innerHeight)
//     }
//     useEffect(() => {
//         window.addEventListener('resize', currentScreenWidth),
//             window.addEventListener("resize", currentScreenHeight);
//         return () => {
//             window.removeEventListener('resize', currentScreenWidth);
//             window.removeEventListener("resize", currentScreenHeight);
//         }
//     })
//
//     return (
//         <div>
//             <h2 className="font-bold text-stone-200 text-2xl mb-2">The size of the window is <span
//                 className="font-bold text-[#3581a0]"> {widthCount} </span></h2>
//             <h2 className="font-bold text-stone-200 text-2xl">The size of the window is <span
//                 className="font-bold text-[#3581a0]"> {heightCount} </span></h2>
//         </div>
//     );
// };
// export default ClearUp;


import React, {useState, useEffect} from "react";

const ClearUp = () => {
    const [widthCount, setWidthCount] = useState(0);
    const [heightCount, setHeightCount] = useState(0);

    useEffect(() => {
        // window is accessible here
        setWidthCount(window.innerWidth);
        setHeightCount(window.innerHeight);

        const currentScreenWidth = () => {
            setWidthCount(window.innerWidth);
        }
        const currentScreenHeight = () => {
            setHeightCount(window.innerHeight)
        }

        window.addEventListener('resize', currentScreenWidth);
        window.addEventListener("resize", currentScreenHeight);

        // cleanup function
        return () => {
            window.removeEventListener('resize', currentScreenWidth);
            window.removeEventListener("resize", currentScreenHeight);
        }
    }, []); // empty dependency array to run only once

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
