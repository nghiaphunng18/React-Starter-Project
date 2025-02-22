import { useState } from "react";

const TodoNew = (props) => {
  // const valueInput = "";
  // console.log("check props: ", props);
  //useState hook (getter: value, function setter)
  const [valueInput, setValueInput] = useState("");
  const { addNewTodo } = props;

  // addNewTodo("nghiaphunng");
  const handleClick = () => {
    // console.log("check valueInput", valueInput);
    addNewTodo(valueInput);
    setValueInput("");
  };

  const handleOnChange = (name) => {
    // console.log("Handle on change: ", name);
    setValueInput(name);
  };

  return (
    <div className="todo-new">
      <input
        onChange={(event) => handleOnChange(event.target.value)}
        type="text"
        value={valueInput}
      ></input>
      <button onClick={handleClick} style={{ cursor: "pointer" }}>
        Add
      </button>
      <div>My text input is: {valueInput}</div>
    </div>
  );
};

export default TodoNew;
