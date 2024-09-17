function TaskDescription({ description }) {
  return (
    <div className="w-full px-4 py-2 bg-gray-50  rounded-md shadow-md text text-slate-600 text-justify">
      <h1>{description}</h1>
    </div>
  );
}

export default TaskDescription;
