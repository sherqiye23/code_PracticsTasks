import React, { useContext } from 'react'

function ToDo( {todo}) {
    
  return (
    <li key={todo.id}>
      {todo.title}
    </li>
  )
}

export default ToDo
