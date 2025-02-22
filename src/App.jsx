import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData.jsx";
import TodoNew from "./components/todo/TodoNew";
import reactLogo from "./assets/react-2.svg";
import { useState } from "react";
import Header from "./components/layout/header.jsx";
import Footer from "./components/layout/footer.jsx";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 100000),
      name: name,
    };
    setTodoList([...todoList, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <>
      <Header />

      <div className="todo-container">
        <div className="todo-title">Todo List</div>

        <TodoNew addNewTodo={addNewTodo} />

        {todoList.length > 0 ? (
          <TodoData deleteTodo={deleteTodo} todoList={todoList} />
        ) : (
          <div className="todo-image">
            <img src={reactLogo} alt="error" className="logo" />
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default App;
