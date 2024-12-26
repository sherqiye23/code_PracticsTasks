import React, { useContext, useState } from 'react'
import { todoContextCreate } from '../context/TodoContext';

function AddTodo() {
    let { todos, setTodos } = useContext(todoContextCreate)
    let [addInput, setAddInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault() ;
        if (addInput.trim() == "") {
            alert("duzgun daxil edin")
            return
        }
        let newLi = {
            id: self.crypto.randomUUID(),
            title: addInput.trim()
        }
        setTodos([...todos, newLi])
        setAddInput("")
    }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" value={addInput} onChange={(e) => { setAddInput(e.target.value)}}/>
    </form>
  )
}

export default AddTodo
