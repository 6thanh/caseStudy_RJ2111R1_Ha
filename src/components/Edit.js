import axios from "axios";
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

export function Edit() {
    const [product, setProduct] = useState([]);
    const {productId} = useParams();

    useEffect(()=>{
        if(productId) {
            axios.get(`http://localhost:3000/products/${productId}`)
            .then((res)=>{
                setProduct(res.data)
            })
            .catch((err)=>{throw err})
        }
    }, [productId]);

    const handleChange = (e) =>{
        setProduct({...product,
            [e.target.name]: e.target.value
        })
    }

    const navigate = useNavigate();
    const handleSubmit = () => {
        if (productId) {
            axios.put(`http://localhost:3000/products/${productId}`, product)
            .then((res)=>{
                alert('Success!!!');
                navigate('/products')            
            })
            .catch((err)=>{throw err})
        }
    }

    return(
        <div className="container w-50 card mt-3 shadow">
            <h2 className="text-warning">Edit Product: {product.name}</h2>
            <div>
                <label htmlFor="productId" className="w-25 mt-2 text-start">ID</label>
                <input type="number" className="w-75" id="productId" name="id" value={product.id || ''} onChange={handleChange} required />
            </div>
            <div>
            <label htmlFor="name" className="w-25 mt-2 text-start">Name</label>
                <input type="text" className="w-75" id="name" name="name" value={product.name || ''} onChange={handleChange} required />
            </div>
            {/* <div>
            <label htmlFor="image" className="w-25 mt-2 text-start">Img</label>
                <input type="file" className="w-75" id="image" name="img" value={product.img || ''} onChange={handleChange} required />
            </div> */}
            <div>
            <label htmlFor="price" className="w-25 mt-2 text-start">Price</label>
                <input type="text" className="w-75" id="price" name="price" value={product.price || ''} onChange={handleChange} required />
            </div>
            <div>
            <label htmlFor="description" className="w-25 mt-2 text-start">Description</label>
                <input type="text" className="w-75" id="description" name="description" value={product.description || ''} onChange={handleChange} required />
            </div>
            <div>
            <label htmlFor="category" className="w-25 mt-2 text-start">Category</label>
                <input type="text" className="w-75" id="category" name="category" value={product.category || ''} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="number" className="w-25 mt-2 text-start">Number</label>
                <input type="number" className="w-75" id="number" name="number" value={product.number || ''} onChange={handleChange} required />
            </div>
            <div>
                <a className="btn btn-success m-2" rules="button" href="/products" >Product List</a>
                <button className="btn btn-primary m-2" onClick={handleSubmit}>Save</button>
            </div>
        </div>
    )
}