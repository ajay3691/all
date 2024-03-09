import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UpdateProd() {
  const { id } = useParams()
 // const [id,setid]=useState(useParams().id)
  const [product, setProduct] = useState({
    name: '',
    price: '',
    qty: '',
  });
  const navigate = useNavigate(); // Get the navigate function
  const updateHandler = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };
  useEffect(() => {
    axios.get(`http://localhost:5000/api//product/${id}`)
      .then((resp) => {
        setProduct(resp.data.product)
      })
      .catch((err) => {
        console.log(err)
      })
  }, )
  const submitHandler = (event) => {
    event.preventDefault();
   /*  if (!product.name || !product.price || !product.qty) {
      return alert('Please fill in all fields');
    } */
    axios.put(`http://localhost:5000/api/product/${id}`,product)
      .then((resp) => {
        // alert("Product created successfully");
        navigate("/admin")
      })
      .catch((error) => {
        console.error(error);
        //alert("Failed to add product. Please try again.");
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="d-flex vh-100 bg-dark justify-content-center align-items-center">
            <div className='w-50 bg-white rounded p-3'>
              <form>
                <h2> Update Product</h2>
                <div className="mb-2">
                  <label htmlFor=""> Product Name</label>
                  <input type="text"onChange={updateHandler} name="name" placeholder='Enter name' className='form-control' />
                </div>
                <div className="mb-2">
                  <label htmlFor="">  price</label>
                  <input type="text"onChange={updateHandler} name="price" placeholder='Enter Price' className='form-control' />
                </div>
                <div className="mb-2">
                  <label htmlFor="">  qty</label>
                  <input type="text" onChange={updateHandler} name="qty" placeholder='Enter qty' className='form-control' />
                </div>
                <button className='btn btn-success' onClick={submitHandler}>Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateProd
