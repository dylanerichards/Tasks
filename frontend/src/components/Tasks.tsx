import React from 'react';
import Task from './Task';

interface Task {
  title: string;
  description: string;
  completed: boolean;
  dueDate: any;
}

interface TasksProps {
  tasks: Task[];
}

const Tasks: React.FC<TasksProps> = ({ tasks }) => {

  return (
    <div className="tasks-list">
      {tasks.map((task, index) => (
        <Task
          key={index}
          title={task.title}
          description={task.description}
          completed={task.completed}
          dueDate={new Date(task.dueDate)}
        />
      ))}
    </div>
  );
};

export default Tasks;
