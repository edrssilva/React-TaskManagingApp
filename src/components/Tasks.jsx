import { ChevronRightIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
          className="w-full flex justify-between gap-4 text-nowrap"
        >
          <button
            onClick={() => onTaskClick(task.id)}
            className={`w-full bg-white rounded-sm shadow-md text-left text-slate-500 font-semibold p-2 pl-4' ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <button
            onClick={() => {
              onSeeDetailsClick(task);
            }}
            className="w-16 bg-white rounded-sm shadow-md flex justify-center items-center"
          >
            <ChevronRightIcon color="#64748b" />
          </button>
          <button
            className="w-16 bg-white rounded-sm shadow-md flex justify-center items-center"
            onClick={() => onDeleteTaskClick(task.id)}
          >
            <Trash2Icon color="#64748b" />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
