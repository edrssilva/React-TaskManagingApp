function Textarea(props) {
  return (
    <textarea
      className="bg-slate-200 px-4 py-2 rounded-md text-slate-500 font-medium placeholder:text-slate-500 placeholder:font-medium focus:outline-slate-500"
      {...props}
    />
  );
}

export default Textarea;
