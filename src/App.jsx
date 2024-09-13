import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div>
      <h1 className="text-green-500">Gerenciador de Tarefas</h1>
      <AddTask></AddTask>
      <Tasks></Tasks>
    </div>
  );
}

export default App;
