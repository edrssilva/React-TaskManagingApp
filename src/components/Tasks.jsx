import { ChevronRightIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="w-full space-y-4 p-4 bg-gray-50 rounded-md shadow-lg">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="w-full flex justify-between gap-4 text-clip"
        >
          <button
            onClick={() => onTaskClick(task.id)}
            className={`w-full bg-white rounded-sm shadow-md text-left text-slate-500 font-semibold p-2 pl-4' ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <Button
            onClick={() => {
              onSeeDetailsClick(task);
            }}
          >
            <ChevronRightIcon color="#64748b" />
          </Button>
          <Button onClick={() => onDeleteTaskClick(task.id)}>
            <Trash2Icon color="#64748b" />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
