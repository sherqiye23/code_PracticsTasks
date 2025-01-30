import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Card from 'react-bootstrap/Card';

function Detail() {
    let [product, setProduct] = useState({})
    let { id } = useParams()
    let navigate = useNavigate()
    
    async function GetData() {
        let result = await axios.get(`http://localhost:4000/products/${id}`)
        setProduct(result.data)
    }
    
    useEffect(() => {
        GetData()
    }, [id])
    return (
        <div>
            <Card className='m-5'>
                <Card.Body>
                    <h1>{product.name}</h1>
                    <h3>Price: ${product.unitPrice}</h3>
                    <button className='btn btn-secondary' onClick={() =>  navigate("/")}>Back</button>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Detail
