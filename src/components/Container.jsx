import React, { useState, useEffect } from 'react';
import AddTask from './AddTask';
import Task from './Task';

export default function Container() {
    const [tasks, setTasks] = useState([]);

    // Carregar tarefas do localStorage quando o componente é montado
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(storedTasks);
    }, []);

    const addTask = (task) => {
        if (task.trim()) {
            const newTasks = [...tasks, { text: task, completed: false }];
            setTasks(newTasks);
            localStorage.setItem('tasks', JSON.stringify(newTasks));
        }
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    };

    const toggleTaskCompletion = (index) => {
        const newTasks = tasks.map((task, i) => 
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    };

    return (
        <div className='h-full font-poppins overflow-y-hidden'>
            <div className='bg-white max-w-xl m-auto p-4 rounded-lg shadow-lg'>
                <AddTask onAddTask={addTask} />
                <ul>
                    {tasks.map((task, index) => (
                        <Task 
                            key={index} 
                            task={task} 
                            onDelete={() => deleteTask(index)} 
                            onToggle={() => toggleTaskCompletion(index)} 
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}
