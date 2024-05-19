import Tasks from "./components/Tasks"
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';
// import { GET_TASK } from './graphql/queries';
import { GET_TASKS } from './graphql/queries';

function App() {
  const { data, loading, error } = useQuery(GET_TASKS);

  if (loading) return <p>Loading...</p>;

  const tasks = data.tasks

  return (
    <Tasks tasks={tasks} ></Tasks>
  )

}

export default App;
