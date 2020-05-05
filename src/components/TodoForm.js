import React from 'react';
import { render } from '@testing-library/react';

class TodoForm extends React.Component {
    constructor(props) {
        console.log(props, 'teasdaf')
        super();
    };


render () {
    let {
        newTodos,
        handleSubmit,
        handleChanges,
        clearCompleted
    } = this.props
    console.log(newTodos, 'tesdfsdt')
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='input-container'>
                    <label htmlFor='newTodos'>New Todo: </label>
                    <input id='newTodos' type='text' name='newTodos' onChange={handleChanges} value={newTodos}/>
                </div>

                <div className='btn-container'>
                    <button className='btn btn-add'>ADD Todo</button>
                    <button className='btn btn-clear' onClick={clearCompleted}>Clear Completed</button>
                </div>
            </form>
        </div>
    )
}
};

export default TodoForm;