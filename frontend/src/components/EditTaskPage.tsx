import React, { useState, useEffect, FormEvent } from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { GET_TASK_BY_ID, UPDATE_TASK } from '../graphql/queries';
import { useQuery, useMutation } from '@apollo/client';


const EditTaskPage: React.FC = () => {
  const navigate = useNavigate();

  const { task_id } = useParams();
  const { data, loading } = useQuery(GET_TASK_BY_ID, { variables: { id: task_id } });


  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [completed, setCompleted] = useState(false)

  const [updateTask] = useMutation(UPDATE_TASK);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const variables = { variables: { id: task_id, title, description, completed } }
    console.log(variables)
    updateTask(variables);
    navigate(`/tasks/${task_id}`);
  };

  useEffect(() => {
    if (data && data.task) {
      setTitle(task.title);
      setDescription(task.description);
      setCompleted(task.completed);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;

  const task = data.task

  const handleTitleChange = (e: any) => setTitle(e.target.value);
  const handleDescriptionChange = (e: any) => setDescription(e.target.value);

  const handleCompletedChange = (e: any) => {
    setCompleted(!completed)
  }

  return (
    <div className="flex justify-center items-center h-screen">

      <form className="flex w-full max-w-sm space-x-3" onSubmit={handleSubmit}>
        <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
          <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
            Editing Task
          </div>
          <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
            <div className="col-span-2 lg:col-span-1">
              <div className=" relative ">
                <input value={title} onChange={handleTitleChange} type="text" id="contact-form-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Title" />
              </div>
            </div>
            <div className="col-span-2">
              <label className="text-gray-700" htmlFor="name">
                <textarea value={description} onChange={handleDescriptionChange} className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="comment" placeholder="description" name="description" rows={5} cols={40}>
                </textarea>
              </label>
            </div>

            <div>
              <div className="mb-3">
                <div className="relative inline-block w-10 mr-2 align-middle select-none">
                  <input checked={completed} onChange={handleCompletedChange} type="checkbox" name="toggle" id="Green" className="checked:bg-green-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                  <label htmlFor="Green" className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer">
                  </label>
                </div>
                <span className="font-medium text-gray-400">
                  Green
                </span>
              </div>
            </div>

            <div className="col-span-2 text-right">
              <button type="submit" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>

    </div>
  );
};

export default EditTaskPage
