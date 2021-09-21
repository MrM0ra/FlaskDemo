import React, {useState, useEffect} from 'react'

const TaskForm = (props) => {
    const [taskName, setTaskName] = useState(props.editTask.taskName);
    const [completed, setCompleted] = useState(props.editTask.completed);

    useEffect(() => {
        setTaskName(props.editTask.taskName);
        setCompleted(props.editTask.completed);
    }, [props.editTask])

    const handleClick = (e) => {
        e.preventDefault();
        const task = {taskName,completed};
        document.querySelector('#taskName').value=''
        document.querySelector('#completed').value=''
        props.addTask(task);
    }

    return (
        <div>
            <form autoComplete="off">
                <input type="text" placeholder="Task name" id="taskName" value={taskName} onChange={(e)=>setTaskName(e.target.value)}></input>
                <input type="text" placeholder="Completed" id="completed" value={completed} onChange={(e)=>setCompleted(e.target.value)}></input>
                <input type="submit" id="btn" value="submit" onClick={handleClick}></input>
            </form>
        </div>
    )
}

export default TaskForm
