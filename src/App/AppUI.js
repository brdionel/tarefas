import React, { useContext } from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateButtonTodo } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { ErrorTodo } from "../ErrorTodo";
import { LoadingTodos } from "../LoadingTodos";
import { EmptyTodos } from "../EmptyTodos";

function AppUI() {

    const { erro, loading, totalTodos, filteredTodos, completeTodo, deleteTodo, openModal } = useContext(TodoContext);

    return(
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            
            <TodoList> 
                { erro && <ErrorTodo/> }
                { loading && <LoadingTodos /> }
                { (!loading && !totalTodos) && <EmptyTodos /> }
                {
                    filteredTodos.map( todo => (
                        <TodoItem 
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            completeTodo={() => completeTodo(todo.text)}
                            deleteTodo={() => deleteTodo(todo.text)}
                        />
                    ))
                }
            </TodoList>
        
            <CreateButtonTodo />

            {
                openModal && <Modal>
                    <TodoForm />
                </Modal>
            }
            
        
        </React.Fragment>
    )
}

export { AppUI };


