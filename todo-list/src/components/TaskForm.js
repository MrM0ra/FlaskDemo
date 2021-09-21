import React, {useState} from 'react'

const TaskForm = () => {
    const [taskName, setTaskName] = useState("");
    const [completed, setCompleted] = useState("");

    const handleClick = (e) => {
        e.preventDefault()
        const task = {taskName,completed}
        fetch("http://localhost:5000/task", {
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(task)
        }).then( () => {
            console.log("New task added")
        })
        document.querySelector('#taskName').value=''
        document.querySelector('#completed').value=''
    }

    return (
        <div>
            <h1>TASKS</h1>
            <form>
                <input type="text" placeholder="Task name" id="taskName" value={taskName} onChange={(e)=>setTaskName(e.target.value)}></input>
                <input type="text" placeholder="Completed" id="completed" value={completed} onChange={(e)=>setCompleted(e.target.value)}></input>
                <input type="submit" id="btn" value="submit" onClick={handleClick}></input>
            </form>
        </div>
    )
}

export default TaskForm
