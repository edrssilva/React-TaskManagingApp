import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  /* useEffect(() => {
    async function fetchTasks() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10/",
        { method: "GET" }
      );
      const data = await response.json();
      setTasks(data);
    }

    If wanted, you can use an API to GET the tasks
    fetchTasks();
  }, []); */

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);

    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: uuidv4,
      title,
      description,
      isComplete: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className=" w-screen h-screen bg-slate-200 flex justify-center">
      <main className="w-3/3 min-w-96 flex flex-col items-center p-8 space-y-4">
        <h1 className="text-slate-600 font-semibold text-4xl py-3 pb-2 w-full text-center bg-gray-50 rounded-lg shadow-lg">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </main>
    </div>
  );
}

export default App;
