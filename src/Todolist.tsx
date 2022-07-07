import React from "react";
import { FilterValuesType } from "./App";


type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: TaskType[];
  removeTask: (elID: number) => void;
  changeFilter: (filter:FilterValuesType)=>void;
};

export function Todolist(props: PropsType) {
  return (
    <div>
     
      <i className="title">{`${props.title} ?`}</i>
      <div className="card-container">
        <div >
          <input type="text" />
          <button>+</button>
        </div>  
      <ul>
        {props.tasks.map((el) => {
          return (
            <li key={el.id}>
              <input
                type="button"
                value="X"
                onClick={() => props.removeTask(el.id)}
              />
              <input type="checkbox" checked={el.isDone} />
              <span>{el.title}</span>
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={() => props.changeFilter("all")}>All</button>
        <button onClick={() => props.changeFilter("active")}>Active</button>
        <button onClick={() => props.changeFilter("completed")}>Completed</button>
      </div>
      </div>
    </div>
  );
}
