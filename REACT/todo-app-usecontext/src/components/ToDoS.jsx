import React, { useContext } from 'react'
import { todoContextCreate } from '../context/TodoContext'
import ToDo from './ToDo'

function ToDoS() {
    let { todos } = useContext(todoContextCreate)
    console.log(todos)
    return (
        <ul>
            {
                todos.map(todo => (
                    console.log(todo),
                    
                    <ToDo todo={todo} />
                ))
            }
        </ul>
    )
}

export default ToDoS
