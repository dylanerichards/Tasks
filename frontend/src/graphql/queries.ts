// queries.ts
import { gql } from '@apollo/client';

export const GET_TASKS = gql`
  query GetTasks {
    tasks {
      id
      title
      description
      completed
      dueDate
    }
  }
`;


export const GET_TASK_BY_ID = gql`
  query FindTaskById($id: ID!) {
    task(id: $id) {
      id
      title
      description
      completed
      dueDate
    }
  }
`;