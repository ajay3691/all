import React, { Component } from 'react'

export class Clock extends Component {
    state = {
        ct: new Date().toLocaleTimeString(),//ct:new Date().toLocaleString()
        cd: new Date().toLocaleDateString() ///Both Time Date
    }
    //ct:new Date().toLocaleString() ***Both Time Date
    updateTime = () => {
        this.setState({ ct: new Date().toLocaleTimeString() ,cd: new Date().toLocaleDateString() })
    }
   /*  updateDate = () => {
        this.setState({ cd: new Date().toLocaleDateString() })
    } */
    render() {
        return (
            <div>
                <h1>Digital Clock</h1>
                <h3>Time : {this.state.ct}</h3>
                <h3>date : {this.state.cd}</h3>
                <button onClick={this.updateTime}>Refresh </button>
                {/* <button onClick={this.updateDate}>Refresh Date</button> */}
            </div>
        )
    }
}

export default Clock
