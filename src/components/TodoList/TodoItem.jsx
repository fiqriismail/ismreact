import React from 'react';

function TodoItem(props) {
  const styles = ['black', 'blue', 'green', 'red'];

  return (
    <li style={{ color: styles[props.status] }}>
      {props.title} - {props.status} - Created: {props.created} by {props.owner}
    </li>
  );
}

export default TodoItem;
