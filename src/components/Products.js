import axios from "axios";
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {products: []};
    }
    
    componentDidMount(){
        axios.get('http://localhost:3000/products')
        .then((res)=>{
            this.setState({products: res.data}) 
        })
        .catch((err)=>{throw err})
    }
    
    render(){
        const {products} = this.state;
        return(
            <div className="container w-auto mt-3">
                <div className="border bg-info mt-3 animate__animated animate__fadeInUpBig">
                    <h1 className="text-light text-center m-2 ">Product Management</h1>
                </div>
                <div className="mt-2">
                    <a href="/products/add" style={{color: "blue"}} className="btn btn-info m-3 animate__animated animate__fadeInBottomLeft" rules="button">Add Product</a>
                    <a href="/" className="btn btn-success m-3 animate__animated animate__fadeInBottomRight" rules="button">Log out</a>
                </div>
                <table className="table table-bordered mt-2">
                    <thead className="table-bordered">
                        <tr className="text-white bg-secondary">
                            <th className="text-center">Id</th>
                            <th>Name</th>
                            <th>Images</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Number</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) =>(
                            <tr key={product.id}>
                                <td className="text-center">{product.id}</td>
                                <td>{product.name}</td>
                                <td>
                                    <div>
                                        <img className="img-icon" src={require(`../web/upload/imgs/${product.img}`)} title={product.name} alt={product.name} />
                                    </div>
                                </td>
                                <td style={{color:"red"}}>{product.price}</td>
                                <td>{product.description}</td>
                                <td>{product.category}</td>
                                <td>{product.number}</td>
                                <td className="text-center">
                                    <a href={`products/edit/${product.id}`}><button className="btn btn-primary m-2"><i className="fas fa-edit"></i></button></a>
                                    <a href={`products/delete/${product.id}`}><button className="btn btn-danger m-2"><i className="fas fa-trash-alt"></i></button></a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        ) 
    }
}

export default Products;