import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import { NavLink } from 'react-router-dom';
// import swal from 'sweetalert';
// swal({
//   title: "Are you sure?",
//   text: "Do you want to delete this product?",
//   icon: "warning",
//   dangerMode: true,
// })
// .then(willDelete => {
//   if (willDelete) {
//     swal("Deleted Product!", "", "success");
//   }
// });

function Products() {
  let [products, setProducts] = useState([])
  async function GetData() {
    let result = await axios.get('http://localhost:4000/products')
    setProducts(result.data)
  }
  useEffect(() => {
    GetData()
  }, [])

  const handleDelete = (id) => {
    axios.delete(`http://localhost:4000/products/${id}`).then(() => {   
      GetData()
      swal("Deleted Product!", "", "success");
    })
    
  }
  return (
    <>
      <h1 className='text-center mt-4'>Products Table</h1>
      <NavLink className='btn btn-success mx-5' to={`add`}>Add Product</NavLink>
      <Table striped bordered hover className='mx-5 my-2'>

        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Detail</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            products && products.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>${product.unitPrice}</td>
                  <td><NavLink className='btn btn-primary' to={`detail/${product.id}`}>Detail</NavLink></td>
                  <td><NavLink className='btn btn-info' to={`edit/${product.id}`}>Edit</NavLink></td>
                  <td><button className='btn btn-danger' onClick={() => handleDelete(product.id)}>Delete</button></td>
                </tr>
              )
            })
          }

        </tbody>
      </Table>
    </>

  )
}

export default Products
