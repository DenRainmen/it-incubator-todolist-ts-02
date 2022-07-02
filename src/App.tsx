import React from "react";
import "./App.css";
import { Todolist } from "./Todolist";
// import { v1 } from "uuid";

function App() {
  let tasks1 = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false },
    { id: 4, title: "NodeJS", isDone: false }
  ];

  const removeTask = (argFn: number) => {
    alert(argFn);
  };

  return (
    <div className="App">
      <Todolist title="What to learn" tasks={tasks1} removeTask={removeTask} />
    </div>
  );
}

export default App;
