import React from 'react';
import { hot } from 'react-hot-loader';
import AddTodo from './AddTodo';
import Item from './Item';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      todos: []
    };

    this.id = 0;
}

  changeInput = e => {
    this.setState({
      inputValue: e.target.value
    })
  }

  addTodo = e => {
    const {inputValue} = this.state;
    if (inputValue && (e.key === 'Enter' || e.target.classList.contains('add-todo__btn'))) {
      const todos = [
        {
          id: this.id++, 
          text: inputValue, 
          completed: false
        },
        ...this.state.todos];

      this.setState({
        todos,
        inputValue: ''
      })
    }
  }

  removeTodo = todoId => {
    const todos = this.state.todos.filter(item => item.id !== todoId);

    this.setState({ todos });
  }

  completeTodo = todoId => {
    const todos = this.state.todos.map(item => {
      if (item.id === todoId) {
        item.completed = !item.completed;
      }
      return item;
    });

    this.setState({ todos });
  }

  render() {
    return (
      <React.Fragment>
        <AddTodo
          inputValue={this.state.inputValue}
          handleChange={this.changeInput.bind(this)}
          handleAdd={this.addTodo.bind(this)}
        />
        <ul className="list-group">
          {this.state.todos.map(todo => (
            <Item 
              key={todo.id}
              todoId={todo.id}
              text={todo.text}
              completed={todo.completed}
              removeTodo={this.removeTodo}
              completeTodo={this.completeTodo}
            />
          ))}
        </ul>
  
      </React.Fragment>
    )
  }
};

export default hot(module)(List);