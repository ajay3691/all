import React, { Component } from 'react'
import Axios from 'axios'
export class AxioDidmount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }
    componentDidMount = () => {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                this.setState({ users: response.data })
                //console.log(response.data)
            })
            .catch((err) => { 
                console.log("Error Message")
                console.log(err)
            })
    }
    render() {
        return (
            <div>
                <h4>usin "componentDidMount" No button data will come</h4>
                <pre>{JSON.stringify(this.state)}</pre>
            </div>
        )
    }
}

export default AxioDidmount
