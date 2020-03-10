import React, { Component } from 'react';

import TodoItem from './TodoItem';

class TodoList extends Component {
  state = {
    todos: [
      {
        title: 'Create react app',
        status: 1,
        created: '10-02-2020',
        owner: 'Fiqri',
      },
      {
        title: 'Explain about props',
        status: 2,
        created: '10-02-2020',
        owner: 'Fiqri',
      },
      {
        title: 'Show how it works',
        status: 0,
        created: '10-02-2020',
        owner: 'Fiqri',
      },
      {
        title: 'Node JS',
        status: 3,
        created: '10-02-2020',
        owner: 'Fiqri',
      },
      {
        title: 'CSharp',
        status: 0,
        created: '15-03-2020',
        owner: 'Fiqri',
      },
    ],
  };

  displayTodos = () => {
    return this.state.todos.map(todo => {
      return (
        <TodoItem
          title={todo.title}
          status={todo.status}
          created={todo.created}
          owner={todo.owner}
        />
      );
    });
  };

  render() {
    return (
      <div className="container">
        <ul className="list-group">{this.displayTodos()}</ul>
      </div>
    );
  }
}

export default TodoList;
