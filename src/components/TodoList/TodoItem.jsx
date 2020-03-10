import React from 'react';

function TodoItem(props) {
  const styles = ['-primary', '-warning', '-success', '-danger'];
  const statuses = ['New', 'In Progress', 'Completed', 'Cancelled'];

  return (
    <li className="list-group-item">
      <h4>
        {props.title}{' '}
        <span className={`badge badge${styles[props.status]}`}>
          {statuses[props.status]}
        </span>
      </h4>
      <small>
        Created: {props.created} by {props.owner}
      </small>
    </li>
  );
}

export default TodoItem;
