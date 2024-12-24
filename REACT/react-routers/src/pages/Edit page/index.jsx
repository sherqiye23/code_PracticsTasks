import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert';
function Edit() {
    let [name, setName] = useState("")
    let [price, setPrice] = useState("")
    let { id } = useParams()
    let navigate = useNavigate()    
    function GetData() {
        axios.get(`http://localhost:4000/products/${id}`).then((result) => {
        setName(result.data.name)
        setPrice(result.data.unitPrice)
        })
    }
    
    useEffect(() => {
        GetData()
    }, [id])

    const editSubmit = (e) => {
        e.preventDefault();
        if (name.trim() == "") {
            alert("duzgun daxil et")
            return  
        }

        let editProduct = {
            id: id,
            name: name.trim(),
            unitPrice: Number(price)
        }
        
        axios.patch("http://localhost:4000/products/"+id, editProduct).then((res) => {
            swal("Edit Olundu!", "", "success");
            navigate("/")
        })

    }
    
    return (
        <div>
            <form className='m-5' onSubmit={(e) => {editSubmit(e)}}>
                <label htmlFor="exampleInputEmail1">Edit Name</label>
                <input 
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text" 
                className="form-control my-2" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Enter edit name" 
                required/>

                <label htmlFor="exampleInputPassword1">Edit Price</label>
                <input 
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                type="number" 
                className="form-control" 
                id="exampleInputPassword1" 
                placeholder="Enter edit price" 
                required />

                <button type="submit" className="btn btn-primary my-2">Submit</button>
            </form>
            <button className='btn btn-secondary mx-5' onClick={() =>  navigate("/")}>Back</button>
        </div>
    )
}

export default Edit
