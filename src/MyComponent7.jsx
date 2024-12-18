import React, { useState, useEffect } from 'react';

const MyComponent7 = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('green');

    const addCount = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const subtractCount = () => {
        setCount((prevCount) => prevCount - 1);
    };

    const changeColor = () => {
        setColor((prevColor) => prevColor === 'green' ? 'red' : 'green');
    };

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count, color]);

    return (
        <>
            <p style={{ color }}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button>
            <br />
            <button onClick={changeColor}>Change color</button>
        </>
    );
};

export default MyComponent7;