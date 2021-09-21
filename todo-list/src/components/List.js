import React, { useEffect, useState } from 'react'
import ListItem from './ListItem';

const List = (props) => {
    const [tasks, setTasks] = useState([]);

    useEffect( () => {
        fetch("http://localhost:5000/task")
        .then(res => res.json())
        .then((result) => {
            setTasks(result);
        }
        )},[])

    const renderTasks = () => {
        return tasks.map( task => <ListItem task={task} />);
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Completado</th>
                        <th></th>
                    </tr>
                </thead>
                {renderTasks()}
            </table>
        </div>
    )
}

export default List