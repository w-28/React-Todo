import React from 'react';
import './Todo.css';

let Todo = props => {
    return (
        <div className={`todo ${props.todo.completed ? 'completed' : ''}`} 
        onClick={() => props.toggleComplete(props.todo.id)}>
            <h4>{props.todo.todo}</h4>
        </div>
    )
}

export default Todo;