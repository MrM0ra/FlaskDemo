import React, {useState} from 'react'

export const Modal = (props) => {

    const [taskName, setTaskName] = useState('');
    const [completed, setCompleted] = useState('');

    const modalStyle={
        visibility: props.visibility,
    };

    const handleClick = () => {
        props.openCloseModal({'visibility':'hidden'})
        let task = {'taskName':taskName, 'completed':completed}
        props.editTask(task);
    }
    return (
        <div id="modal" style={modalStyle} className="modal">
            <div className="modal-content">
                <span className="close">&times;</span>
                <p id="modal_text">Oh... you found me...</p>
                <form autoComplete="off">
                    <input type="text" placeholder="Task name" id="taskName" required='True' onChange={(e)=>setTaskName(e.target.value)}></input>
                    <input type="text" placeholder="Completed" id="completed" required='True' onChange={(e)=>setCompleted(e.target.value)}></input>
                    <input type="submit" id="btn" value="submit" onClick={handleClick}></input>
                </form>
            </div>
        </div>
    )
}
