## Mutations


### Create a Task
```
curl -X POST http://localhost:3000/graphql \
  -H "Content-Type: application/json" \
  -d '{"query": "mutation { createTask(input: { title: \"New Task\", description: \"This is a new task.\", completed: false }) { task { id title description completed } errors } }"}'
```

### Update a Task
```
curl -X POST http://localhost:3000/graphql \
  -H "Content-Type: application/json" \
  -d '{"query": "mutation { updateTask(input: { id: \"1\", title: \"Updated Task\", description: \"This is an updated task.\", completed: true }) { task { id title description completed } errors } }"}'

```


### Find a Task
```
curl -X POST http://localhost:3000/graphql \
  -H "Content-Type: application/json" \
  -d '{"query": "query { task(id: \"1\") { id title description completed} }"}'
```

### Delete a Task
```
curl -X POST http://localhost:3000/graphql \
  -H "Content-Type: application/json" \
  -d '{"query": "mutation { deleteTask(input: { id: \"1\" }) { success errors } }"}'
```
