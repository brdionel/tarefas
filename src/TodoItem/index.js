import React from "react";
import "./TodoItem.css";

function TodoItem({text, completed, completeTodo, deleteTodo}){


    return (
        <li className="TodoItem">
            <span onClick={completeTodo} className={`Icon Icon-check ${completed && 'Icon-check--active'}`}>√</span>
            <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>{text}</p>
            <span onClick={deleteTodo} className="Icon Icon-delete">X</span>
        </li>
    )
}

export { TodoItem };