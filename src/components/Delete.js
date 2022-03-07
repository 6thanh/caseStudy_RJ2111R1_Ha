import axios from "axios";
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

export function Delete() {
    const [product, setProduct] = useState([]);
    const {productId} = useParams();

    useEffect(()=>{
        if(productId) {
            axios.get(`http://localhost:3000/products/${productId}`)
            .then((res)=>{
                console.log(res.data);
                setProduct(res.data)
            })
            .catch((err)=>{throw err})
        }
    }, [productId]);

    const navigate = useNavigate();

    const handleSubmit = () => {
        if (productId) {
            axios.delete(`http://localhost:3000/products/${productId}`, product)
            .then((res)=>{                
                alert('Delete success!!!')
                navigate('/products')            
            })
            .catch((err)=>{throw err})
        }
    }

    return(
        <div className="container w-50 card mt-3 shadow">
        <h2 className="text-danger">Delete Product: {product.name}</h2>
        <div>
            <label htmlFor="productId" className="w-25 mt-2 text-start">ID</label>
            <input type="number" className="w-75" id="productId" name="id" value={product.id || ''} readOnly />
        </div>
        <div>
        <label htmlFor="name" className="w-25 mt-2 text-start">Name</label>
            <input type="text" className="w-75" id="name" name="name" value={product.name || ''} readOnly />
        </div>
        <div>
        <label htmlFor="price" className="w-25 mt-2 text-start">Price</label>
            <input type="text" className="w-75" id="price" name="price" value={product.price || ''} readOnly />
        </div>
        <div>
        <label htmlFor="description" className="w-25 mt-2 text-start">Description</label>
            <input type="text" className="w-75" id="description" name="description" value={product.description || ''} readOnly />
        </div>
        <div>
        <label htmlFor="category" className="w-25 mt-2 text-start">Category</label>
            <input type="text" className="w-75" id="category" name="category" value={product.category || ''} readOnly />
        </div>
        <div>
            <label htmlFor="number" className="w-25 mt-2 text-start">Number</label>
            <input type="number" className="w-75" id="number" name="number" value={product.number || ''} readOnly />
        </div>
        <div>
            <a className="btn btn-success m-2" rules="button" href="/products" >Product List</a>
            {/* <button className="btn btn-primary m-2" onClick={handleSubmit}>Save</button> */}
            <button className="btn btn-danger m-3" onClick={handleSubmit}>Delete</button>

        </div>
        </div>
    )
}