### Mutations


```
mutation {
  createTask(input: { title: "New Task", description: "This is a new task.", completed: false }) {
    task {
      id
      title
      description
      completed
    }
    errors
  }
}
``