import React, { useContext } from "react";
import './TodoCounter.css'
import { TodoContext } from "../TodoContext";

function TodoCounter() {
    const { completedTodos, totalTodos} = useContext(TodoContext);

    return (
        <h2 
            className="TodoCounter"
            style={{
                fontWeight: '300'
            }}
        >Has completado {completedTodos} de {totalTodos} tareas</h2>
    )
}

export { TodoCounter };