import React, { useEffect, useState } from 'react';

const MyComponent8 = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log('Event Listener Added!');

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            console.log('Event Listener Removed!');
        };
    }, []);

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }), [width, height];

    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    return (
        <>
          <p>Window Width: {width}px</p>
          <p>Window Height: {height}px</p>
        </>
    );
};

export default MyComponent8;