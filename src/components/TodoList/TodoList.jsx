import React, { Component } from 'react';

import TodoItem from './TodoItem';

class TodoList extends Component {
  state = {
    todos: [],
    isStateChanged: false,
  };

  componentDidMount() {
    console.log('Did mount');
    //fetch('http://localhost:60435/api/todos').then(res => r)
    fetch('https://todomanagerwebapi.azurewebsites.net/api/todo')
      .then(response => response.json())
      .then(data => this.setState({ todos: data.value }));
  }

  componentDidUpdate() {
    console.log('Did update');
  }

  displayTodos = () => {
    if (this.state.todos.length === 0) {
      return (
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    }

    return this.state.todos.map(todo => {
      return (
        <TodoItem
          key={todo.id}
          title={todo.title}
          status={todo.status}
          created={todo.start}
          owner={'Fiqri'}
        />
      );
    });
  };

  render() {
    return (
      <div className="container mb-2">
        <ul className="list-group">{this.displayTodos()}</ul>
      </div>
    );
  }
}

export default TodoList;
