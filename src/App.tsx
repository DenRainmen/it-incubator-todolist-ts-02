import React, { useState } from "react";
import "./App.css";
import { Todolist } from "./Todolist";
// import { v1 } from "uuid";

//Создали новый тип для  стэйта  кнопок All Active Completed 
export type FilterValuesType = "all" | "active" | "completed";


function App() {
    let [tasks, setTasks] = useState([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "NodeJS", isDone: false },
    ]);



    //Создали новый стэйт для кнопок All Active Completed и экспортируем его.
    const [filter, setFilter] = useState<FilterValuesType>("all")


    let tasksForRender;

    switch (filter) {
        case "completed":
            tasksForRender = tasks.filter((el) => el.isDone === true);
            break;
        case "active":
            tasksForRender = tasks.filter((el) => el.isDone !== true);
            break;
        default:
            tasksForRender = tasks;
    }

    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter);
    }



    const removeTask = (elID: number) => {
        tasks = tasks.filter((el) => el.id !== elID);
        setTasks(tasks);
        console.log(tasks);
    };

    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasksForRender}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
