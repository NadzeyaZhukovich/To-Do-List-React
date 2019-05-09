import './ToDoItem.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class ToDoItem extends Component {
    
    render(){
        const {completed, text, onComplete, onDelete, id} = this.props;
        return(
            <li id={id} className="taskBox">
                <input type="checkbox" className="checkbox" checked={completed} onChange={onComplete}/>
                <div className={completed ? "taskCompleted" : "task"}>{text}</div>
                <button className="btn" onClick={onDelete}>Delete</button>
            </li>
        )
    }
}

ToDoItem.propTypes = {
    completed: PropTypes.bool,
    text: PropTypes.string,
    onComplete: PropTypes.func,
    onDelete: PropTypes.func,
    id: PropTypes.string,
}