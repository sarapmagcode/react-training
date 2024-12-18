import React, { useState } from 'react';

const MyComponent3 = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={decrement}>Decrease</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increase</button>
        </div>
    );
};

export default MyComponent3;