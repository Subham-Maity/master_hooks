import { useState } from 'react';

const DemoHooks = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
            <style jsx>{`
        .btn {
          @apply bg-pink-600 text-white font-bold py-2 px-4 rounded-full;
          transition: background-color 0.3s ease;
        }
        .btn:hover {
          @apply bg-blue-500;
        }
      `}</style>
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-8">Demo Hooks Component</h1>
                <details className="text-lg mb-4">
                    <summary>What is the useState hook?</summary>
                    <p className="mt-4">
                        The `useState` hook is a built-in hook in React that allows you to add state to a functional component. It takes an initial value as an argument and returns an array with two elements: the current state value and a function to update the state value.
                    </p>
                    <p className="mt-4">
                        In this example, we use the `useState` hook to manage a simple counter. The `count` variable holds the current count, while the `setCount` function can be used to update the count.
                    </p>
                </details>
                <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out" onClick={incrementCount}>Increment Count</button>

                <p className="mt-4">
                    The current count is {count}.
                </p>
            </div>
        </div>
    );
};

export default DemoHooks;
