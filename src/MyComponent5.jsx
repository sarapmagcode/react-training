import React, { useState } from 'react';

const MyComponent5 = () => {
    const [foods, setFoods] = useState(['Apple', 'Orange', 'Banana']);

    const handleAddFood = () => {
        const newFood = document.querySelector('#food-input').value.trim();
        
        if (newFood) {
            setFoods((prevFoods) => [...prevFoods, newFood]);
            document.querySelector('#food-input').value = '';
        }
    };

    const handleRemoveFood = (indexToRemove) => {
        setFoods((prevFoods) => 
            prevFoods.filter((_, i) => i !== indexToRemove)
        );
    };
    
    return (
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) => (
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        {food}
                    </li>
                ))}
            </ul>
            
            <input type="text" id="food-input" placeholder="Enter food name" />
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );
};

export default MyComponent5;