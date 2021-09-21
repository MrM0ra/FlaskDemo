import React from 'react'

const ListItem = (props) => {

    function deleteTask(e) {
        e.preventDefault();
        let id = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
        fetch(`http://localhost:5000/task/${id}`, {
            method:"DELETE",
        }).then( () => {
            console.log("task deleted");
        })
    }

    function editTask(){
        
    }

    const formatTask = () => {
        return <tr key={props.task.id}>
            <td>{props.task.id}</td>
            <td>{props.task.name}</td>
            <td>{` ${props.task.completed}`}</td>
            <td>
                <button onClick={deleteTask}>
                    X
                </button>
                <button onClick={editTask}>
                    Edit
                </button>
            </td>
        </tr>
    }

    return (
        <tbody>
            {formatTask()}
        </tbody>
    )
}

export default ListItem
