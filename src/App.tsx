import React, {useState} from "react";
import "./App.css";
import {Todolist} from "./Todolist";



export const App = () => {

    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Redux", isDone: false},
        {id: 5, title: "NodeJS", isDone: false},
    ]);

    const removeTask = (elID: number) => {
        tasks = tasks.filter((el) => el.id !== elID);
        setTasks(tasks);
        console.log(tasks);
    };


    // const [btnName, setFilterValue] = useState("All")
    //
    // //todo Создали новую фунцию, принимающую в параметры то , что передаётся из кнопок компоненты Todolist ...... и я нихрена не понял как это работает ?!?!?!?
    //
    // const changeFilter = (btnName: string) => {
    //     setFilterValue(btnName)
    //     alert(btnName)
    // }
    //
    //
    // let filteredTasks = tasks;
    //
    //
    // switch (btnName) {
    //     case "Completed":
    //         filteredTasks = tasks.filter((el) => el.isDone === true);
    //         break;
    //     case "Active":
    //         filteredTasks = tasks.filter((el) => el.isDone === false);
    //         break;
    //     default:
    //         filteredTasks = tasks;
    // }


    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={filteredTasks}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}


