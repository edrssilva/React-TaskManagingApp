import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="w-full space-y-4 p-4 bg-gray-50 rounded-md shadow-lg flex flex-col">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        className="bg-slate-200 px-4 py-2 rounded-md text-slate-500 font-medium placeholder:text-slate-500 placeholder:font-medium focus:outline-slate-500"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="bg-slate-200 px-4 py-2 rounded-md text-slate-500 font-medium placeholder:text-slate-500 placeholder:font-medium focus:outline-slate-500"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></input>
      <button
        className="bg-slate-500 text-white rounded-md font-medium p-2"
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o título e descrição da tarefa.");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
