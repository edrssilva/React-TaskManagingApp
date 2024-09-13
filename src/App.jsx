import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-white text-xl pt-2 pb-2 pl-4 pr-4 bg-slate-600 border">
        Gerenciador de Tarefas
      </h1>
      <AddTask></AddTask>
      <Tasks></Tasks>
    </div>
  );
}

export default App;
