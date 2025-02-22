import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData.jsx";
import TodoNew from "./components/todo/TodoNew";
import reactLogo from "./assets/react-2.svg";
import { useState } from "react";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const userName = "nghiaphunng";
  const userAge = 21;
  const data = {
    address: "Ha Noi",
    country: "Viet Nam",
  };

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 100000),
      name: name,
    };
    setTodoList([...todoList, newTodo]);
  };

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>

      <TodoNew addNewTodo={addNewTodo} />

      <TodoData todoList={todoList} name={userName} age={userAge} data={data} />

      <div className="todo-image">
        <img src={reactLogo} alt="error" className="logo" />
      </div>
    </div>
  );
};

export default App;
