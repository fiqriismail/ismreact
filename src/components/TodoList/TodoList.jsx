import React from 'react';

import TodoItem from './TodoItem';

function renderTodos() {
  const todos = [
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
  ];

  return todos.map(todo => {
    return (
      <TodoItem
        title={todo.title}
        status={todo.status}
        created={todo.created}
        owner={todo.owner}
      />
    );
  });
}

// ES6
// 0 - New , 1 - In Progress, 2 - Completed, 3 - Cancelled
function TodoList() {
  return <ul>{renderTodos()}</ul>;
}

export default TodoList;
