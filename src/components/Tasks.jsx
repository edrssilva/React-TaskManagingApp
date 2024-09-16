import { ChevronRightIcon, Trash2Icon } from "lucide-react";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
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
          <button className="w-16 bg-white rounded-sm shadow-md flex justify-center items-center">
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
