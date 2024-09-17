function Button(props) {
  return (
    <button
      className="w-16 bg-white rounded-sm shadow-md flex justify-center items-center"
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Button;
