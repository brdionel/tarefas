import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();


function TodoProvider(props) {

    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false);
  
    const completedTodos = todos.filter( todo => todo.completed).length;
    const totalTodos = todos.length;
  
    const filteredTodos = searchValue.trim().length > 0
      ? todos.filter( todo => todo.text.toLocaleLowerCase().includes(searchValue.toLowerCase()))
      : todos
  
    const completeTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos];
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
    }
    
    const deleteTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos]; 
      newTodos.splice(todoIndex, 1)
      saveTodos(newTodos);
    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false
        });
        saveTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{
            openModal,
            setOpenModal,
            todos,
            saveTodos,
            loading,
            error,
            searchValue,
            setSearchValue,
            completedTodos,
            totalTodos,
            filteredTodos,
            completeTodo,
            deleteTodo,
            addTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }