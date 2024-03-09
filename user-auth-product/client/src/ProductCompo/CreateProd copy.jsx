import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

const CreateProduct = () => {
  const navigate = useNavigate(); // Use useNavigate to get the navigation function
  const [flag, setFlag] = useState(false);
  const [product, setProduct] = useState({
    name: '',
    price: '',
   // image: '',
    qty: '',
   // info: '',
  });

  const updateHandler = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  /* const changeImage = async (event) => {
    const imageFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.addEventListener('load', () => {
      if (reader.result) {
        setProduct({
          ...product,
          image: reader.result,
        });
      } else {
        alert('Error Occurred');
      }
    });
  }; */

  const submitHandler = (event) => {
    event.preventDefault();
    Axios.post('http://127.0.0.1:5000/api/product', product)
      .then(() => {
        setFlag(true);
        navigate('/admin'); // Use navigate to navigate to the '/admin' route
      })
      .catch(() => {});
  };

  return (
    <div className="container mt-4">
      <pre>{JSON.stringify(product)}</pre>
      {flag ? (
        <>
          {/* No need to use history.push in v6 */}
        </>
      ) : (
        <>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <h3> Create Product</h3>
                </div>
                <div className="card-body">
                  <form onSubmit={submitHandler}>
                    <div className="form-group">
                      <input
                        onChange={updateHandler}
                        className="form-control"
                        name="name"
                        type="text"
                        placeholder="Product Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        onChange={updateHandler}
                        className="form-control"
                        name="price"
                        type="number"
                        placeholder="Price"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        onChange={updateHandler}
                        className="form-control"
                        name="qty"
                        type="number"
                        placeholder="QTY"
                      />
                    </div>
                   {/*  <div className="form-group">
                      <input
                        onChange={changeImage}
                        className="form-control"
                        name="image"
                        type="file"
                        placeholder="Image"
                      />
                    </div> */}
                   {/*  <div className="form-group">
                      <input
                        onChange={updateHandler}
                        className="form-control"
                        name="info"
                        type="text"
                        placeholder="Product Info"
                      />
                    </div> */}
                    <input
                      type="submit"
                      value="Create Product"
                      className="btn btn-success"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CreateProduct;
