import React, { Component } from 'react'
export class State extends Component {
  wish = "hello"
  wishandler = () => {
    this.wish = "Hello good morning"
    this.forceUpdate()      // not working function
  }
// type TWO 2...
  state = {
    msg: "GM"
  }
  msgHandler = () => {
    this.setState({ msg: "How are you" })
  }
  render() {
    return (
      <div>
        <h1>State Class</h1>
        <hr />
        <h2>wish: {this.wish}</h2>
        <button onClick={this.wishandler}>change buddy</button>

        <h2>wish: {this.state.msg}</h2>
        <button onClick={this.msgHandler}> wish</button>
      </div>
    )
  }
}

export default State
