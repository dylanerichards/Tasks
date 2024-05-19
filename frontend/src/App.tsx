import Tasks from "./components/Tasks"
import TaskPage from "./components/TaskPage"
import { useQuery } from '@apollo/client';
import { GET_TASKS } from './graphql/queries';
import { Routes, Route } from "react-router-dom"

function App() {
  const { data, loading } = useQuery(GET_TASKS);

  if (loading) return <p>Loading...</p>;

  const tasks = data.tasks

  return (
    <Routes>
      <Route path="/" element={ <Tasks tasks={tasks} /> } />
      <Route path="/tasks/:task_id" element={<TaskPage/>} />
     </Routes>
  )

}

export default App;
