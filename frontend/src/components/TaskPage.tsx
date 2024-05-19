import React from 'react';

import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { GET_TASK } from '../graphql/queries';
import { useQuery } from '@apollo/client';


const TaskPage: React.FC = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_TASK);

  return (
    <div>
      <h2>User Profile</h2>
      <p>User ID: {data.task.id}</p>
    </div>
  );
};

export default TaskPage