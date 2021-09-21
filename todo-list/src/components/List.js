import React, { useEffect, useState } from 'react'
import ListItem from './ListItem';
import { Modal } from './Modal';
import TaskForm from './TaskForm';

const List = (props) => {
    const [tasks, setTasks] = useState([]);
    const [visibility, setVisibility] = useState('hidden');
    const [taskID, setTaskID] = useState(0);

    useEffect( () => {
        fetch("http://localhost:5000/task")
        .then(res => res.json())
        .then((result) => {
            setTasks(result);
        }
        )},[])

    const addTask = (task) => {
        let taskList = [...tasks];
        fetch("http://localhost:5000/task", {
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(task)
        }).then( () => {
            console.log("New task added")
        })
        setTasks(taskList);
    }

    const deleteTask = (task) => {
        fetch(`http://localhost:5000/task/${task.id}`, {
            method:"DELETE",
        }).then( () => {
            console.log("task deleted");
        })
    }

    const editTask = (task) => {
        fetch(`http://localhost:5000/task/${taskID}`, {
            method:"PUT",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(task)
        }).then( () => {
            console.log("task edited");
        })
    }

    const openCloseModal = (value) => {
        if(value['edition']){
            setTaskID(value['taskID'])
            setVisibility(value['visibility']);
        }else{
            setVisibility(value['visibility']);
        }
    }

    const renderTasks = () => {
        return tasks.map( task => <ListItem key={task.id} task={task} openModal={openCloseModal} deleteTask={deleteTask} editTask={editTask}/>);
    }

    return (
        <div>
            <h1>TASKS</h1>
            <TaskForm addTask={addTask} editTask={editTask} />
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Completado</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {renderTasks()}
                </tbody>
            </table>
            <Modal openCloseModal={openCloseModal} visibility={visibility} editTask={editTask}/>
        </div>
    )
}

export default List