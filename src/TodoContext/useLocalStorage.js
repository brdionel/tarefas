import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState(initialValue)

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = JSON.parse(localStorage.getItem(itemName))
        let parsedItem;
      
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else {
          parsedItem = localStorageItem;
        }
    
        setItem(parsedItem)
        setLoading(false)
      } catch(error){
        setError(error);
      }
    }, 1000)
  })


  const saveItem = (newTodos) => {
    setLoading(true)
    try {
      setItem(newTodos);
      localStorage.setItem(itemName, JSON.stringify(newTodos));
      setLoading(false);
    } catch(error) {
      setError(error)
    }
  }

  return {
    item,
    saveItem,
    loading,
    error
  }

}

export { useLocalStorage };