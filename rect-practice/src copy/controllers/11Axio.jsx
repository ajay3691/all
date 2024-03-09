import React, { Component } from 'react'
import Axios from 'axios'
export class Axio extends Component {
    constructor(props) {
        super(props)
       // console.log("First constructor- will excute first")
        this.state = {
            users: []
        }
    }
    getuserData = () => {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                console.log(response.data)
                this.setState({ users: response.data })
            })
            .catch(() => { })
    }
    render() {
       // console.log("Second - Render method will excute")
        return (
            <div>
                <h3>Axios how to invoke data in api</h3>
                <pre>{JSON.stringify(this.state)}</pre>
                <button onClick={this.getuserData}>Det Data</button>
            </div>
        )
    }
}

export default Axio
