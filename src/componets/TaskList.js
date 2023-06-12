import React from 'react';

function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          {/* Display other task details */}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
