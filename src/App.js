import React from 'react';

import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="container-fluid">
      <div className="container">
        <h1 className="mb-4 p-2">Todo List</h1>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
