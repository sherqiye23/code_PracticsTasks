import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";

function App() {
  let [data, setData] = useState([]);
  let [spinner, setSpinner] = useState(true);

  // form add
  let [name, setName] = useState("");
  let [unitPrice, setUnitPrice] = useState();
  let [unitsInStock, setUnitsInStock] = useState();
  // form edit
  let [ename, setEName] = useState(name);
  let [eunitPrice, setEUnitPrice] = useState(unitPrice);
  let [eunitsInStock, setEUnitsInStock] = useState(unitsInStock);
  let [display, setDisplay] = useState("none");

  function EditData(id) {
    console.log(id);
    
  }

  function formSubmit(e) {
    e.preventDefault();
    if (name.trim() == "") {
      alert("duzgun daxil et")
      return
    }
    let newData = {
      name: name.trim(),    
      unitPrice:unitPrice,
      unitsInStock:unitsInStock
    }
    axios.post("https://northwind.vercel.app/api/products", newData).then(res =>{
      setData([...data, res.data])
    })
    setName("");
    setUnitPrice("");
    setUnitsInStock("");
  }

  function GetData() {
    axios.get("https://northwind.vercel.app/api/products").then(res => {
      setData(res.data);
      setSpinner(false)
    })
  }

  async function DeleteData(id) {
    await axios.delete("https://northwind.vercel.app/api/products/"+id).then(res => {
      let filtered = data.filter(mydata => mydata.id != id)
      setData(filtered)
    })
  }

  useEffect(() => {
    GetData()
  }, [])

  return (
    <>

      {
        spinner ? (
          <div className="loader-wrap">
            <div className="loader"></div>
          </div>
        ) : (
          <div className="container">
            <form onSubmit={(e) => {formSubmit(e)}} id='add-form'>
              <input type="text" value={name} required placeholder='...name' onChange={(e) => {setName(e.target.value)}}/>
              <input type="number" value={unitPrice} required placeholder='...unitPrice' onChange={(e) => {setUnitPrice(e.target.value)}}/>
              <input type="number" value={unitsInStock} required placeholder='...unitsInStock' onChange={(e) => {setUnitsInStock(e.target.value)}}/>
              <button type='submit'>Add</button>
            </form>
            <form id='edit-form' style={{display: display}}>
              <h3>Edit</h3>
              <input type="text" value={ename} required placeholder='...edit name' onChange={(e) => {setName(e.target.value)}}/>
              <input type="number" value={eunitPrice} required placeholder='...edit unitPrice' onChange={(e) => {setUnitPrice(e.target.value)}}/>
              <input type="number" value={eunitsInStock} required placeholder='...edit unitsInStock' onChange={(e) => {setUnitsInStock(e.target.value)}}/>
              <button type='submit'>Edit</button>
              <span className="closebtn">x</span>
            </form>
            <div className="overlay" style={{display: display}}></div>
            <table>
              <tr >
                <td>ID</td>
                <td>Name</td>
                <td>Unit Price</td>
                <td>Units In Stock</td>
                <td>Delete</td>
                <td>Edit</td>
              </tr>
              {
                data.map(elem => {
                  return <tr key={elem.id} style={{color: elem.discontinued ? "red" : elem.unitsInStock > 10 ? "green" : "black"}}>
                    <td>{elem.id}</td>
                    <td>{elem.name}</td>
                    <td>{elem.unitPrice}$</td>
                    <td>{elem.unitsInStock}</td>
                    <td><button style={{padding:"5px", backgroundColor:"red", color:"white", borderRadius: "10px"}} onClick={() => {DeleteData(elem.id)
                    }}>Delete</button></td>
                    <td><button style={{padding:"5px", backgroundColor:"yellow", color:"gray", borderRadius: "10px"}} onClick={() => {EditData(elem.id)
                    }}>Edit</button></td>
                  </tr>

                })
              }
            </table>
          </div >
        )
      }
    </>
  )
}

export default App
