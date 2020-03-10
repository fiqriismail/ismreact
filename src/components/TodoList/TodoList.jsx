import React from 'react';

import TodoItem from './TodoItem';

function TodoList() {
  return (
    <ul>
      <TodoItem
        title="Create react app"
        status="In Progress"
        created="10-02-2020"
        owner="Fiqri"
      />
      <TodoItem
        title="Explain about props"
        status="Completed"
        created="10-02-2020"
        owner="Fiqri"
      />
      <TodoItem
        title="Show how it works"
        status="New"
        created="10-02-2020"
        owner="Fiqri"
      />
    </ul>
  );
}

export default TodoList;
