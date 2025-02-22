import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData.jsx";
import TodoNew from "./components/todo/TodoNew";
import reactLogo from "./assets/react-2.svg";

const App = () => {
  const userName = "nghiaphunng";
  const userAge = 21;
  const data = {
    address: "Ha Noi",
    country: "Viet Nam",
  };

  const addNewTodo = (name) => {
    alert(`call me ${name}`);
  };

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>

      <TodoNew addNewTodo={addNewTodo} />

      <TodoData name={userName} age={userAge} data={data} />

      <div className="todo-image">
        <img src={reactLogo} alt="error" className="logo" />
      </div>
    </div>
  );
};

export default App;
