import React from 'react';




const Task = (props) => {


    return (
        <div className="task-container" >
            <button onClick={(e) => {e.preventDefault(); props.taskStatus(props.task.id)}} className={props.task.taskStatus ? "task-link active" : "task-link"}>
                <input type="checkbox" className="input-checkbox" checked={props.task.taskStatus ? "checked" : ""} readOnly={true} />
                <span className="task-number">{props.number}.</span>
                <p className="task-text">{props.text}</p>
            </button>
            <button className="delete-btn" onClick={() => props.removeTask(props.task.id)}><img src={require('../images/trash.png')} className="task-trash-img" alt='to trash'/></button>
        </div>
    );
};

export default Task;