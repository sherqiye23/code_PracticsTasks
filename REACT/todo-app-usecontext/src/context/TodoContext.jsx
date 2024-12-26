import React, { createContext, useState } from 'react'

export const todoContextCreate = createContext()
function TodoContext({children}) {

    let [todos, setTodos] = useState([
        {
            id: 1,
            title: "Learn React",
        },
        {
            id: 2,
            title: "Use Context",
        },
        {
            id: 3,
            title: "Todo App",
        }
    ])

    const value = {
        todos,
        setTodos
    }
    
  return (
    <todoContextCreate.Provider value={value}>
        {children}
    </todoContextCreate.Provider>
  )
}

export default TodoContext
