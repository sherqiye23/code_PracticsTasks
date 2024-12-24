import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert';

function AddPage() {
    let navigate = useNavigate()
    let [name, setName] = useState("")
    let [price, setPrice] = useState("")

    const addSubmit = (e) => {
        e.preventDefault();
        console.log("salam");
        console.log(name);
        if (name.trim() == "") {
            alert("duzgun daxil et")
            return
        }
        let addProduct = {
            name: name.trim(),
            unitPrice: Number(price)
        }
        console.log(addProduct);
        axios.post("http://localhost:4000/products", addProduct).then((res) => {
            swal("Added!", "", "success");
            navigate("/")
            
        })

    }
    return (
        <div>
            <form className='m-5' onSubmit={(e) => { addSubmit(e) }}>
                <label htmlFor="exampleInputEmail1">Add Name</label>
                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    className="form-control my-2"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter add name"
                    required />

                <label htmlFor="exampleInputPassword1">Add Price ($)</label>
                <input
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    type="number"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter add price"
                    required />

                <button type="submit" className="btn btn-primary my-2">Submit</button>
            </form>
            <button className='btn btn-secondary mx-5' onClick={() => navigate("/")}>Back</button>
        </div>
    )
}

export default AddPage
