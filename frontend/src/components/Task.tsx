import React from 'react';

interface TaskProps {
  title: string;
  description: string;
  completed: boolean;
  dueDate: Date;
}

const Task: React.FC<TaskProps> = ({ title, description, completed, dueDate }) => {
  const formattedDate = dueDate.toLocaleDateString();

  return (
    <div className={`task ${completed ? 'completed' : ''}`}>
      <h2 className="task-title">{title}</h2>
      <p className="task-description">{description}</p>
      <p className="task-due-date">Due Date: {formattedDate}</p>
      <p className="task-status">{completed ? 'Completed' : 'Incomplete'}</p>
    </div>
  );
};

export default Task;
