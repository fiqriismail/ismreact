import React from 'react';

function TodoItem(props) {
  return (
    <li>
      {props.title} - {props.status} - Created: {props.created} by {props.owner}
    </li>
  );
}

export default TodoItem;
