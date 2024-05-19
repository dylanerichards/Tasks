import React from 'react';

import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { GET_TASK_BY_ID } from '../graphql/queries';
import { useQuery } from '@apollo/client';


const TaskPage: React.FC = () => {
  const { task_id } = useParams();
  const { data, loading } = useQuery(GET_TASK_BY_ID, { variables: { id: task_id } });

  if (loading) return <p>Loading...</p>;

  const task = data.task

  return (

    <div className="flex justify-center items-center h-screen">

      <div className="relative w-full p-4 overflow-hidden bg-white shadow-lg rounded-xl md:w-72 dark:bg-gray-800">
        <div className="flex items-center w-full">
        <Link to={`/tasks/${task_id}/edit`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
        </Link>
          <div className="flex flex-col items-center ml-2">
            <span className="dark:text-white">
              {task.title}

            </span>
            <span className="text-sm text-gray-400 dark:text-gray-300">
              {task.description}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between my-2">
          <div className="text-sm text-gray-300">
            {task.completed ?
              <p className="text-green-600">Complete</p>
              :
              <p className="text-red-600">Incomplete</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskPage