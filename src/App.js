import React from 'react';

import TodoList from './components/TodoList/TodoList';
import NameList from './components/NameList/NameList';

function App() {
  return (
    <div className="container-fluid">
      <div className="container">
        <h1 className="mb-4 p-2">Todo List</h1>
        <TodoList />
        <hr />
        <NameList />
      </div>
    </div>
  );
}

export default App;
