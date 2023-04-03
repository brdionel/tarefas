import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {

    const [newTodoValue, setNewTodoValue] = useState('');
    const { addTodo, setOpenModal } = useContext(TodoContext)

    const onCancel = () => {
        setOpenModal(false);
    }

    const handleChange = (e) => {
        setNewTodoValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo Todo</label>
            <textarea
                placeholder="Cortar la cebolla"
                value={newTodoValue}
                onChange={handleChange}
            />
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button--add" type="button" onClick={onCancel}>Cancelar</button>
                <button className="TodoForm-button TodoForm-button--cancel" type="submit">Añadir Todo</button>
            </div>
        </form>
    )
}

export { TodoForm };