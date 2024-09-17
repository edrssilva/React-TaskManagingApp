import { useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="w-full space-y-4 p-4 bg-gray-50 rounded-md shadow-lg flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Textarea
        type="text"
        rows="4"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
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
