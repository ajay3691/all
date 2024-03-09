import React, { Component } from 'react'

export class Bind extends Component {
    state = {
        msg: "Hello",
        money: 1
    }
    updateHandler = (msg, money) => {
        this.setState({ msg: msg, money: money })
    }
    render() {
        return (
            <div>
                <h2>Bind methods*****</h2>
                <h3>Message : {this.state.msg}</h3>
                <h3>Money : {this.state.money}</h3>
                <button onClick={this.updateHandler.bind(this, "Good morning", 200)}>Gm</button>
                <button onClick={this.updateHandler.bind(this, "Good Night", 300)}>Gn</button>
                <button onClick={this.updateHandler.bind(this, "N0 Job", "No Money")}>job</button>
            </div>
        )
    }
}

export default Bind
