import React from 'react';
import TodoForm  from './components/TodoForm';
import TodoList from './components/TodoList';

let todos = [
  {
    todo: 'Work on TO DO APP',
    id: new Date(),
    completed: true
  },
  {
    todo: 'Style TO DO APP',
    id: Date.now(),
    completed: false
  }

];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super();//activates properties usability from React
    this.state = {
      todos: todos,
      newTodos: '' 
    };
  };

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  addTodo = newTodoName => {
    let newTodo = {
      todo: newTodoName,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.addTodo(this.state.newTodos);
    this.setState({
      newTodos: ''
    });
  };

  handleChanges = e => {
    this.setState({
      newTodos: e.target.value
    })
  }

  toggleComplete = ClickedID => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if ( todo.id === ClickedID) {
          return{
            ...todo,
            completed: !todo.completed
          };
        } else{
          return todo;
        }
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(complete => (
        complete.completed !== true
      ))
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
        newTodos={this.state.newTodos}
        handleSubmit={this.handleSubmit}
        handleChanges={this.handleChanges}
        clearCompleted={this.clearCompleted}
        />
        <TodoList
        todos={this.state.todos}
        toggleComplete={this.toggleComplete}
        />
      </div>
    );
  }
}

export default App;
