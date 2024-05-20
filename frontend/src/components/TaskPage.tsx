import React from 'react';

import { Link } from 'react-router-dom';

import { useParams, useNavigate } from 'react-router-dom';
import { GET_TASK_BY_ID, DELETE_TASK } from '../graphql/queries';
import { useQuery, useMutation } from '@apollo/client';


const TaskPage: React.FC = () => {
  const navigate = useNavigate();

  const { task_id } = useParams();
  const { data, loading } = useQuery(GET_TASK_BY_ID, { variables: { id: task_id } });

  const [deleteTask] = useMutation(DELETE_TASK);

  if (loading) return <p>Loading...</p>;

  const handleDeleteTask = (e: any) => {
    const variables = { variables: { id: task_id } };
    e.preventDefault();
    deleteTask(variables);
    navigate(`/`);
    window.location.reload();
  };

  const task = data.task

  return (

    <div className="flex justify-center items-center h-screen">

      <div className="relative w-full p-4 overflow-hidden bg-white shadow-lg rounded-xl md:w-72 dark:bg-gray-800">
        <div className="flex items-center w-full">
          <div className="flex flex-col items-center ml-2">
            <span className="dark:text-white font-extrabold mb-5">
              {task.title}
            </span>
            <span className="text-sm text-gray-400 dark:text-gray-300">
              {task.description}
            </span>
          </div>
        </div>
        <div className="items-center justify-between my-2 mt-5">
          <div className="text-sm text-gray-300">
            {task.completed ?
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>

              :
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-red-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>

            }

          </div>
          <div className="edit-and-delete mt-5 flex">
            <Link to={`/tasks/${task_id}/edit`} className="ml-auto">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
            </Link>

            <Link to={`/tasks/${task_id}/edit`} className="" onClick={handleDeleteTask}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskPage
