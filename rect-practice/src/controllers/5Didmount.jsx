import React, { Component } from 'react'

export class Didmount extends Component {
    state = {
        ct: new Date().toLocaleString()
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ ct: new Date().toLocaleString() })
        }, [1000])
    }
    render() {
        return (
            <div>
                <h1>componentDidMount and setInterval</h1>
                <h3>Time :{this.state.ct}</h3>
            </div>
        )
    }
}

export default Didmount
