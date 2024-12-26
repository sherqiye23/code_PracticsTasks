import React, { useContext } from 'react'
import { todoContextCreate } from '../context/TodoContext'

function Navbar() {
    let { todos } = useContext(todoContextCreate)
  return (
    <nav>
        <h1>ToDo App</h1>
        <p>Todos: {todos.length}</p>
    </nav>
  )
}

export default Navbar
