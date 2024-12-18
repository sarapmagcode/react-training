import React, { useState } from 'react';

const MyComponent6 = () => {
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState('');
    const [carModel, setCarModel] = useState('');

    const handleAddCar = () => {
        const newCar = { year: carYear, make: carMake, model: carModel };
        setCars((prevCars) => [...prevCars, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake('');
        setCarModel('');
    };

    const handleRemoveCar = (indexToRemove) => {
        setCars(prevCars => prevCars.filter((_, id) => id !== indexToRemove));
    };

    const handleYearChange = (e) => {
        setCarYear(e.target.value);
    };
    
    const handleMakeChange = (e) => {
        setCarMake(e.target.value);
    };

    const handleModelChange = (e) => {
        setCarModel(e.target.value);
    };

    return (
        <div>
            <h2>List of Car Objects</h2>
            <ul>
                {cars.map((car, index) => (
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>
                ))}
            </ul>

            <input type="number" value={carYear} onChange={handleYearChange} /><br />
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter car make" /><br />
            <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter car model" /><br />

            <button onClick={handleAddCar}>Add Car</button>
        </div>
    );
};

export default MyComponent6;