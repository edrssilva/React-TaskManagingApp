import { ChevronLeft } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";
import TaskTitle from "../components/TaskTitle";
import TaskDescription from "../components/TaskDescription";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-slate-200 flex justify-center">
      <main className="w-1/3 min-w-96 flex flex-col items-center p-8 space-y-4">
        <div className="flex justify-center w-full gap-4">
          <button
            onClick={() => navigate("/")}
            className="float-start flex justify-center items-center w-1/5 text-center bg-gray-50 rounded-lg shadow-lg h-16"
          >
            <ChevronLeft color="#64748b" />
          </button>
          <h1 className="flex justify-center items-center text-slate-600 font-semibold text-2xl p-2 w-full text-center bg-gray-50 rounded-lg shadow-lg text-nowrap">
            Detalhes da tarefa
          </h1>
        </div>
        <TaskTitle title={title} />
        <TaskDescription description={description} />
      </main>
    </div>
  );
}

export default TaskPage;
