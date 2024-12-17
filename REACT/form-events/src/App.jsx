import { useState } from 'react'
import './App.css';
import categories from './categories';

function App() {
  let [myCategories, setMyCategories] = useState(categories)
  let [inputName, setInputName] = useState("");
  let [inputDesc, setInputDesc] = useState("");

  // add function
  function addCategory(e) {
    e.preventDefault();
    if (inputDesc.trim() == "" || inputName.trim() == "") {
      alert("Inputlari duzgun daxil et");
      return
    }
    let newCategory = {
      name: inputName.trim(),
      description: inputDesc.trim(),
      id: self.crypto.randomUUID()
    }
    setMyCategories([...myCategories, newCategory]);
  }
  // delete function
  function deleteCategory(id) {
    let filteredCategories = myCategories.filter(myCategory => myCategory.id != id)
    setMyCategories(filteredCategories)
  }
  return (
    <>
      <div className="container">
        <div className="form-wrapper">
          <form onSubmit={(e) => addCategory(e)}>
            <input type="text" className='name' placeholder='Name' onChange={(e) => setInputName(e.target.value)} />
            <input type="text" className='description' placeholder='Description' onChange={(e) => setInputDesc(e.target.value)} />
            <button type="submit" className='form-btn'>Add</button>
          </form>
        </div>
        <div className="categories-cards">
          {
            myCategories.map((myCategory) =>
              <div className="categories-card" key={myCategory.id}>
                <details>
                  <summary><h3 style={{ display: "inline-block" }}>{myCategory.name}</h3></summary>
                  <p>{myCategory.description}</p>
                </details>
                <button className='delete-btn' onClick={() => deleteCategory(myCategory.id)}>Delete</button>
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}

export default App
