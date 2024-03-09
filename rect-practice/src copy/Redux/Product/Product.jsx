import React, { } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { incrAction,decrAction } from '../redux/product/product.action';
const Product = () => {
    const dispatch = useDispatch();
    const product = useSelector((state) => {
        return state.product
    })
    // const [product, setProduct] = useState({
    /* let product = {
        name: "Samsung",
        image: 'https://rukminim1.flixcart.com/image/312/312/l0jwbrk0/mobile/a/p/r/-original-imagcb64gwkhzdk5.jpeg?q=70',
        price: 4500,
        qty: 1
    } */  //)
    let incrHandler = () => {
        dispatch(incrAction())
        //setProduct({ ...product, qty: product.qty + 1 })
    }
    let decrHandler = () => {
        dispatch(decrAction())
        //setProduct({ ...product, qty: product.qty - 1 })
    }
    return (
        <div className="container">
            <h1>Product redux</h1>
            <div className="row">
                <pre>{JSON.stringify(product)}</pre>
                <div className="col-md-6">
                    <table className='table table-hover mt-5'>
                        <thead className='bg-warning text-white'>
                            <tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{product.name}</td>
                                <td><img src={product.image} height="80px" alt="Buy Oil Packet" /></td>
                                <td>{product.price}</td>
                                <td><i className="fa fa-minus-circle" onClick={decrHandler} ></i>{product.qty}<i onClick={incrHandler} className="fa fa-plus-square"></i></td>
                                <td>{product.qty * product.price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Product
