import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description:
        "Estudar programação para se tornar um desenvolvedor full-stack",
      isCompleted: true,
    },
    {
      id: 2,
      title: "Fazer exercícios físicos",
      description: "Praticar exercícios físicos para manter a saúde em dia",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Ler um livro",
      description: "Ler um livro para adquirir novos conhecimentos e relaxar",
      isCompleted: true,
    },
    {
      id: 4,
      title: "Organizar a casa",
      description: "Fazer uma limpeza geral e organizar os itens da casa",
      isCompleted: false,
    },
  ]);

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
      <main className="w-1/3 min-w-96 flex flex-col items-center p-8 space-y-4">
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
