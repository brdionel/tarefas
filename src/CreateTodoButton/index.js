import React, { useContext } from "react";
import './CreateTodoButton.css'
import { TodoContext } from "../TodoContext";

function CreateButtonTodo(){

    const { setOpenModal } = useContext(TodoContext);

    const handleClick = () => {
        setOpenModal(prevState => !prevState)
    }

    return (
        <button onClick={handleClick} className="CreateTodoButton">+</button>
    )
}

export { CreateButtonTodo }