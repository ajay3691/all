import React, { Component } from 'react'

export class ProductClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      prod_Name: "Samsung",
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQIfpEn01QWWd3_h7LhNyRWGyApj-NvdVt2J6LgEjmXagmhdoUWKB78mtaY1J3-i3_k3ZMhgGHIaAY&usqp=CAc",
      price: 4500,
      qty: 1
    }
  }
  incrHandler = () => {
    this.setState({ qty: this.state.qty + 1 })
  }
  decrHandler = () => {
    this.setState({ qty: this.state.qty - 1 })
  }
  render() {
    return (
      <div>
        <p>"Functins "only useState using "____In "class "" state and setState only..no need spredopertor also</p>
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
                    <td>{this.state.prod_Name}</td>
                    <td><img src={this.state.image} alt="" height='70px' /></td>
                    <td>{this.state.price}</td>
                    <td><i onClick={this.incrHandler} className='fa fa-plus-circle'></i>{this.state.qty} <i onClick={this.decrHandler}>-</i></td>
                    <td>{this.state.price * this.state.qty}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductClass
