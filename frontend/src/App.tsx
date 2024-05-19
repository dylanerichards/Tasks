import Tasks from "./components/Tasks"
import { useQuery } from '@apollo/client';
import { GET_TASKS } from './graphql/queries';

function App() {
  const { data, loading } = useQuery(GET_TASKS);

  if (loading) return <p>Loading...</p>;

  const tasks = data.tasks

  return (
    <Tasks tasks={tasks} ></Tasks>
  )
}

export default App;
