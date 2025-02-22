const TodoNew = (props) => {
  console.log("check props: ", props);
  const { addNewTodo } = props;

  // addNewTodo("nghiaphunng");
  const handleClick = () => {
    alert("Click me");
  };

  const handleOnChange = (name) => {
    console.log("Handle on change: ", name);
  };

  return (
    <div className="todo-new">
      <input
        onChange={(event) => handleOnChange(event.target.value)}
        type="text"
      ></input>
      <button onClick={handleClick} style={{ cursor: "pointer" }}>
        Add
      </button>
    </div>
  );
};

export default TodoNew;
