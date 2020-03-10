import React from 'react';

function getStatusStyle(status) {
  switch (status) {
    case 'In Progress':
      return 'orange';
    case 'Completed':
      return 'green';
    case 'Cancelled':
      return 'red';
    default:
      break;
  }
}

function TodoItem(props) {
  return (
    <li style={{ color: getStatusStyle(props.status) }}>
      {props.title} - {props.status} - Created: {props.created} by {props.owner}
    </li>
  );
}

export default TodoItem;
