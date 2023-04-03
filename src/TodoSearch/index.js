import React, { useContext } from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
    const {searchValue, setSearchValue} = useContext(TodoContext);

    const onSearchValueChanged = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }

    return (
        <input value={searchValue} type="text" placeholder="cebolla" className="TodoSearch" onChange={onSearchValueChanged}/>
    )
}

export { TodoSearch };