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
  mutation UpdateTask($id: ID!, $title: String!, $description: String!, $completed: Boolean!, $dueDate: String!) {
    updateTask(input: { id: $id, title: $title, description: $description, completed: $completed, dueDate: $dueDate }) {
      task {
        id
        title
        description
        completed
        dueDate
      }
      errors
    }
  }
`;

export const CREATE_TASK = gql`
  mutation CreateTask($title: String!, $description: String!, $completed: Boolean!, $dueDate: String!) {
    createTask(input: {title: $title, description: $description, completed: $completed, dueDate: $dueDate }) {
      task {
        id
        title
        description
        completed
        dueDate
      }
      errors
    }
  }
`;

export const DELETE_TASK = gql`
  mutation DeleteTask($id: ID!) {
    deleteTask(input: { id: $id }) {
      errors
    }
  }
`;
