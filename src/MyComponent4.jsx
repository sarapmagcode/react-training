import React, { useState } from 'react';

const MyComponent4 = () => {
    const [car, setCar] = useState({ year: 2024, make: 'Ford', model: 'Mustang' });

    const handleYearChange = (event) => {
        setCar(prevCar => ({ ...prevCar, year: event.target.value }));
    };
    
    const handleMakeChange = (event) => {
        setCar(prevCar => ({ ...prevCar, make: event.target.value }));
    };

    const handleModelChange = (event) => {
        setCar(prevCar => ({ ...prevCar, model: event.target.value }));
    };

    return (
        <div>
            <p>Your favorite is: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYearChange} /><br />
            <input type="text" value={car.make} onChange={handleMakeChange} /><br />
            <input type="text" value={car.model} onChange={handleModelChange} /><br />
        </div>
    );
};

export default MyComponent4;