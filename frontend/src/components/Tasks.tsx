import React from 'react';
import Task from './Task';

interface Task {
  id: string;
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
    <div className="container flex flex-col items-center justify-center w-full mx-auto mt-10">
      <h1 className="pt-16 text-2xl font-extrabold">Tasks</h1>

      <ul className="flex flex-col mt-5">
        {tasks.map((task, index) => (
          <Task
            id={task.id}
            key={task.id}
            title={task.title}
            description={task.description}
            completed={task.completed}
            dueDate={new Date(task.dueDate)}
          />
        ))}
      </ul>
    </div>
  )
};

export default Tasks;
