import React from 'react'

const ListItem = (props) => {
    
    const formatTask = () => {
        console.log(props.task)
        return <tr key={props.task.id}>
            <td>{props.task.id}</td>
            <td>{props.task.name}</td>
            <td>{` ${props.task.completed}`}</td>
            <td onClick={deleteTask}>X</td>
        </tr>
    }

    function deleteTask(){

    }

    return (
        <tbody>
            {formatTask()}
        </tbody>
    )
}

export default ListItem
