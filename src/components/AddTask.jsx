import React, { useState } from "react";

export default function AddTask({ onAddTask }) {
    const [task, setTask] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (task.trim()) {
            onAddTask(task)
            setTask('')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="m-3">
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} onKeyDown={(e) => {if(e.key === 'Enter') {handleSubmit(e)}}} placeholder="Adicione sua tarefa..."
            className="w-9/12 text-cblack font-medium p-1.5 border-2 border-solid border-slate-300 rounded h-9" />
            <button type='submit' className='bg-bgpurple h-9 rounded text-white w-28 text-center ml-3'>Adicionar</button>
        </form>
    )
}

