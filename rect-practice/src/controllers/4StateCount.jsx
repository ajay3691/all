import React, { Component } from 'react'

export class State extends Component {
  state = {
    qty: 1
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
        <h2>qty : {this.state.qty}</h2>
        <button onClick={this.incrHandler}>incr</button>
        <button onClick={this.decrHandler}>decr</button>
      </div>
    )
  }
}

export default State
