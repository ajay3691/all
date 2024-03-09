import React, { Component } from 'react'

export class Bind extends Component {
    state={
        msg:"Hello",
        money: 1
    }
    updateHandler =()=>{
        this.setState({msg:"goodMorning", money:500})
    }
  render() {
    return (
      <div>
        <h3>Message : {this.state.msg}</h3>
        <h3>Money : {this.state.money}</h3>
        <button onClick={this.updateHandler}>Gm</button>
      </div>
    )
  }
}

export default Bind
