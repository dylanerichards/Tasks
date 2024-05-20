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

export const UPDATE_TASK = gql`
  mutation UpdateTask($id: ID!, $title: String!, $description: String!, $completed: Boolean!) {
    updateTask(input: { id: $id, title: $title, description: $description, completed: $completed }) {
      task {
        id
        title
        description
        completed
      }
      errors
    }
  }
`;

export const CREATE_TASK = gql`
  mutation UpdateTask($title: String!, $description: String!, $completed: Boolean!) {
    createTask(input: {title: $title, description: $description, completed: $completed }) {
      task {
        id
        title
        description
        completed
      }
      errors
    }
  }
`;