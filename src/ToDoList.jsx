import React, { useState } from 'react';

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    };

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks((prevTasks) => [...prevTasks, newTask]);
            setNewTask('');
        }
    };

    const deleteTask = (indexToRemove) => {
        setTasks((prevTasks) => prevTasks.filter((_, index) => index !== indexToRemove));
    };

    const moveTaskUp = (index) => {
        if (index > 0) {
            setTasks((prevTasks) => {
                const prevTasksModified = [...prevTasks]; // Make a shallow copy of 'prevTasks'
                [prevTasksModified[index], prevTasksModified[index - 1]] = [prevTasksModified[index - 1], prevTasksModified[index]];
                return prevTasksModified;
            });
        }
    };

    const moveTaskDown = (index) => {
        if (index < tasks.length - 1) {
            setTasks((prevTasks) => {
                const prevTasksModified = [...prevTasks];
                [prevTasksModified[index], prevTasksModified[index + 1]] = [prevTasksModified[index + 1], prevTasksModified[index]];
                return prevTasksModified;
            });
        }
    };

    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
                <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange} />
                <button className="add-button" onClick={addTask}>Add</button>
            </div>

            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="move-button" onClick={() => moveTaskUp(index)}>👆</button>
                        <button className="move-button" onClick={() => moveTaskDown(index)}>👇</button>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default ToDoList;