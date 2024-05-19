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
        <li className="flex flex-row mb-2 border-gray-400">
            <div className="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                <div className="flex flex-col items-center justify-center w-10 h-10 mr-4">
                {
                  completed ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                :<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /> </svg>
                }
                

                </div>
                <div className="flex-1 pl-1 md:mr-16">
                    <div className="font-medium dark:text-white">
                      { title }
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-200">
                      { description }
                    </div>
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-200">
                { (new Date(dueDate)).toLocaleDateString('en-US') }
                </div>
                <button className="flex justify-end w-24 text-right">
                    <svg width="12" fill="currentColor" height="12" className="text-gray-500 hover:text-gray-800 dark:hover:text-white dark:text-gray-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                        </path>
                    </svg>
                </button>
            </div>
        </li>
    // <div className={`task ${completed ? 'completed' : ''}`}>
    //   <h2 className="task-title">{title}</h2>
    //   <p className="task-description">{description}</p>
    //   <p className="task-due-date">Due Date: {formattedDate}</p>
    //   <p className="task-status">{completed ? 'Completed' : 'Incomplete'}</p>
    // </div>
  );
};

export default Task;
