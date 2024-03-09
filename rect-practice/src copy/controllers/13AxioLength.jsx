import React, { Component } from 'react'
import Axios from 'axios'
export class AxioLength extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }
    componentWillUnmount = () => {
        console.log("Last to clean to object")
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
                <div className="container">
                    <div className="row">
                        <h3>length and map methods</h3>
                        <pre>{JSON.stringify(this.state)}</pre>
                        <div className="col-md-6">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.users.length > 0 ? <>
                                            {
                                                this.state.users.map((user) => {
                                                    return <tr key={user.id}>
                                                        <td>{user.id}</td>
                                                        <td>{user.name}</td>
                                                        <td>{user.email}</td>
                                                    </tr>
                                                })
                                            }
                                        </> : <tr><td colSpan="3"><h3>No data</h3></td></tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AxioLength
