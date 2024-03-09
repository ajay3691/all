import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, } from 'react-router-dom'

function Admin() {
  const [products, setProducts] = useState([])
  //let [errorMessage, setErrorMessage] = useState('');

  // Name: "samsung", Price: 450, qty: 1
  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then((resp) => {
        setProducts(resp.data.products)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  const deleteHandler = (id) => {
    console.log(id)
    // event.preventDefault();
    /*  if (!product.name || !product.price || !product.qty) {
       return alert('Please fill in all fields');
     } */
    axios.delete(`http://localhost:5000/api/product/${id}`)
      .then((resp) => {
        // Update the state or perform any necessary actions
        // For example, you can remove the deleted product from the products array
        setProducts(products.filter(prod => prod._id !== id));
        //alert("Product deleted successfully.");
      })
      .catch((error) => {
        console.error(error);
        //alert("Failed to add product. Please try again.");
      });
  };

  /*  const [token, setToken] = useContext(store);
   const navigate = useNavigate(); // Get the navigate function
   const handleLogout = () => {
     // Clear the token
     setToken(null);
     // Navigate to the login page
     navigate('/login');
   }; */

  return (
    <div className="container mt-3">
      <div className="row animated slideInLeft">
        {/* <pre>{JSON.stringify(products)}</pre> */}
        <div className="col">
          <p className="h3 text-success">Products Details</p>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum nesciunt officiis perspiciatis quam voluptate. Alias consequuntur est ipsam iure modi mollitia placeat, ut voluptatem? Dolorem doloribus illo nihil odit veniam.</p>
          <Link to="/createprod" className="btn btn-warning btn-sm">Create Product</Link>
        </div>
      </div>
      <div className="row mt-3 animated zoomIn delay-1s">
        <div className="col">
          <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
            <div className='w-50 bg-white rounded p-1'>
              <table className='table tab'>
                <thead style={{ backgroundColor: 'darkblue', color: 'white' }}>
                  <tr>
                    <th>Name</th>
                    <th>price</th>
                    <th>qty</th>
                    <th>action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    products.length > 0 ? (
                      products.map((p, index) => {
                        return <tr key={index}>
                          <td>{p.name}</td>
                          <td>{p.price}</td>
                          <td>{p.qty}</td>
                          <td>
                            <div className="d-flex ">
                              <Link className=" btn btn-success" to={`/updateProd/${p._id}`}>Edit</Link>
                              <button onClick={() => deleteHandler(p._id)} className="btn btn-danger btn-sm text-white">Delete</button>
                            </div>
                          </td>
                        </tr>
                      })
                    ) : (
                      <tr>
                        <td colSpan="3">
                          <h3>No data or products***</h3>
                        </td>
                      </tr>
                    )

                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <button className="nav-link btn btn-danger btn-link ml-auto" >
        <Link to="/login">
          Logout
        </Link>
      </button>


    </div>


  )
}

export default Admin
