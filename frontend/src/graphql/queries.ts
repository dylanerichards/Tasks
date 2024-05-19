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

export const GET_TASK = gql`
  query {
    task(id: "4") {
      id
      title
      description
      completed
      dueDate
    }
  }

`;
