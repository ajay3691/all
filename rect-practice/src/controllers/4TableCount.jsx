import React, { Component } from 'react'

export class TableCount extends Component {
  state = {
    name: "Realme c2",
    image: 'https://rukminim1.flixcart.com/image/312/312/l0jwbrk0/mobile/a/p/r/-original-imagcb64gwkhzdk5.jpeg?q=70',
    price: 8000,
    qty: 1
  }
  incrHandler = () => {
    this.setState({...this.state, qty: this.state.qty + 1 }) //spred operator
  }
  decrHandler = () => {
    this.setState({ qty: this.state.qty - 1 })
  }
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state)}</pre>
        <table className='table'>
          <thead>
            <tr>
              <td>Name</td>
              <td>image</td>
              <td>Price</td>
              <td>Qty</td>
              <td>Total</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.name}</td>
              <td><img src={this.state.image} alt="" height="120xxxxxpx" /></td>
              <td>{this.state.price}</td>
              <td><i className="fa fa-plus-circle" onClick={this.incrHandler}></i>{this.state.qty} <i onClick={this.decrHandler}>-</i></td>
              <td>{this.state.qty * this.state.price}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default TableCount
