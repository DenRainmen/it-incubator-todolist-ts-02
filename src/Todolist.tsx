import React, { useState } from "react";
/* import { FilterValuesType } from "./App"; */


type PROPS = {
  title: string;
  tasks: TaskType[];
  removeTask: (elID: number) => void;
  // changeFilter: (btnName: string) => void;
};

type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};




export function Todolist(props: PROPS) {



    const [btnName, setFilterValue] = useState("All")

    //todo Создали новую фунцию, принимающую в параметры то , что передаётся из кнопок компоненты Todolist ...... и я нихрена не понял как это работает ?!?!?!?

    const changeFilter = (btnName: string) => {
        setFilterValue(btnName)
        alert(btnName)
    }


    let filteredTasks = props.tasks;



    switch (btnName) {
        case "Completed":
            filteredTasks = props.tasks.filter((el) => el.isDone === true);

            break;
        case "Active":
            filteredTasks = props.tasks.filter((el) => el.isDone === false);
            break;
        default:
            filteredTasks = props.tasks;
    }



  return (
    <div>
     
      <i className="title">{`${props.title} ?`}</i>
      <div className="card-container">
        <div >
          <input type="text" />
          <button>+</button>
        </div>  
      <ul>
        {filteredTasks.map((el) => {
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
        <button onClick={() => changeFilter("All")}>All</button>
        <button onClick={() => changeFilter("Active")}>Active</button>
        <button onClick={() => changeFilter("Completed")}>Completed</button>
      </div>
      </div>
    </div>
  );
}
