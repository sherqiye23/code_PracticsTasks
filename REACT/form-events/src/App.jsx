import { useState } from 'react'
import './App.css';
import categories from './categories';

function App() {
  let [font, setFont] = useState(16)

  let [ipnutValue, setipnutValue] = useState("");

  const cloneCategories = [...categories];
  let [myCategories, setMyCategories] = useState(categories)
  let [inputName, setInputName] = useState("");
  let [inputDesc, setInputDesc] = useState("");
  let [inputPrice, setInputPrice] = useState("");

  let [btnText, setInputBtnText] = useState("Hide");

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
      price: inputPrice,
      id: self.crypto.randomUUID()
    }
    setMyCategories([...myCategories, newCategory]);
    setInputName("")
    setInputDesc("")
    setInputPrice("")
  }
  // delete function
  function deleteCategory(id) {
    let filteredCategories = myCategories.filter(myCategory => myCategory.id != id)
    setMyCategories(filteredCategories)
  }
  // sort
  function sortCategory() {
    let sortedCategories = myCategories.toSorted((a, b) => a.price - b.price)
    if (JSON.stringify(sortedCategories) == JSON.stringify(myCategories)) {
      setMyCategories(cloneCategories)
    } else {
      setMyCategories(sortedCategories);
    }
  }
  // clear
  function clearCategory() {
    if (JSON.stringify(myCategories) == JSON.stringify([])) {
      setMyCategories(cloneCategories);
      setInputBtnText("Hide");
      return
    }
    setMyCategories([]);
    setInputBtnText("Show");
  }

  // search
  function searchCategories(e) {
    let searchArray = categories.filter(myCategory => {
      let categoryName = myCategory.name.toLocaleLowerCase();
      let inputValue = e.target.value.toLocaleLowerCase()
      return (
        categoryName.startsWith(inputValue)
      )
    })
    console.log(searchArray);
    setMyCategories(searchArray)

  }

  function ipnutFunction(e) {
    setipnutValue(e.target.value)
  }

  function increaseF() {
    if (font < 10) {
      return
    }
    setFont(font-1)
  }
  return (
    <>
      <div className="container">
      <p style={{fontSize:font+"px", margin:"5px 10px 0px"}}>Text i you he she it we you they</p>
      <button type="button" className='reset-btn' onClick={() => increaseF() }>Increase</button>  
      <button type="button" className='reset-btn' onClick={() => { setFont(font+1) }}>Decrease</button>  
      <button type="button" className='reset-btn' onClick={() => { setFont(16) }}>Reset</button>  
      <hr />
        <input type="text" className='ipnut' value={ipnutValue} placeholder='...text' onChange={(e) => ipnutFunction(e)} />
        <p style={{fontSize:"20px", margin:"5px 10px 0px"}}>Text - {ipnutValue}</p>
        <button type="button" className='reset-btn' onClick={() => { setipnutValue("") }}>Reset</button>  
        <div className="form-wrapper">
          <form onSubmit={(e) => addCategory(e)}>
            <input type="text" required className='name' value={inputName} placeholder='Name' onChange={(e) => setInputName(e.target.value)} />
            <input type="text" required className='description' value={inputDesc} placeholder='Description' onChange={(e) => setInputDesc(e.target.value)} />
            <input type="number" required className='price' value={inputPrice} placeholder='Price' onChange={(e) => setInputPrice(e.target.value)} />
            <button type="submit" className='form-btn'>Add</button>
          </form>
          <button type="button" className='sort-btn' onClick={() => { sortCategory() }}>Sort by price</button>
          <button type="button" className='clear-btn' onClick={() => { clearCategory() }}>{btnText} All</button>
          <input type="text" className='search-input' placeholder='Search' onChange={(e) => searchCategories(e)} />
        </div>
        <div className="categories-cards">
          {
            myCategories.map((myCategory) =>
              <div className="categories-card" key={myCategory.id}>
                <details>
                  <summary><h3 style={{ display: "inline-block" }}>{myCategory.name}</h3></summary>
                  <p>{myCategory.description}</p>
                  <p>{myCategory.price}$</p>
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
