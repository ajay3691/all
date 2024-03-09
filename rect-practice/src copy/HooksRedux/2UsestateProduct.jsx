import React from 'react'
import { useState } from 'react'

const UsestateProduct = () => {
    let [product, setproduct] = useState({
        prod_Name: "Samsung",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQIfpEn01QWWd3_h7LhNyRWGyApj-NvdVt2J6LgEjmXagmhdoUWKB78mtaY1J3-i3_k3ZMhgGHIaAY&usqp=CAc",
        price: 4500,
        qty: 1
    })
    let incrHandler = () => {
        setproduct({ ...product, qty: product.qty + 1 })
    }
    let decrHandler = () => {
        setproduct({ ...product, qty: product.qty - 1 })
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <table className='table'>
                            <thead>
                                <tr>
                                    <td>Product Name</td>
                                    <td>Image</td>
                                    <td>Price</td>
                                    <td>Qty</td>
                                    <td>Total</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{product.prod_Name}</td>
                                    <td><img src={product.image} alt="" height='70px' /></td>
                                    <td>{product.price}</td>
                                    <td><i onClick={incrHandler} className='fa fa-plus-circle'></i>{product.qty} <i onClick={decrHandler} className='fa fa-minus-circle'></i> </td>
                                    <td>{product.price * product.qty}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsestateProduct
