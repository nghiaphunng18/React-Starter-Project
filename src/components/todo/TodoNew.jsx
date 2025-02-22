import { useState } from "react";

const TodoNew = (props) => {
  //useState hook (getter: value, function setter)
  const [valueInput, setValueInput] = useState("");
  const { addNewTodo } = props;

  const handleClick = () => {
    addNewTodo(valueInput);
    setValueInput("");
  };

  const handleOnChange = (name) => {
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
