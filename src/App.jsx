import logo from "./logo.svg";
import "./App.css";
// import React, { useState } from "react";
import MyComponent from "./components/learn/MyComponent";
import SecondComponent from "./components/learn/SecondComponent";

const App = () => {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World</h1>
        <MyComponent />
        <SecondComponent />
      </header>
    </div>
  );
};

export default App;
