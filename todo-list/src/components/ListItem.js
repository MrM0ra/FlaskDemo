import React from 'react'

const ListItem = (props) => {

    const handleDeleteClick = (e) => {
        props.deleteTask(props.task);
    }

    const handleEditClick = (e) => {
        let value = {'edition':true, 'taskID':props.task.id, 'visibility':'visible'}
        props.openModal(value)
    }

    return (
        <tr key={props.task.id}>
            <td>{props.task.id}</td>
            <td>{props.task.name}</td>
            <td>{` ${props.task.completed}`}</td>
            <td>
                <button onClick={handleDeleteClick}>
                    X
                </button>
                <button onClick={handleEditClick}>
                    Edit
                </button>
            </td>
        </tr>
    )
}

export default ListItem
