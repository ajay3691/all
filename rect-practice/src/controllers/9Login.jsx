import React, { Component } from 'react'

export class Login extends Component {
    state = {
        email: "",
        password: ""
    }
    emailhandler = (event) => {
        this.setState({ email: event.target.value })
    }
    passwordhandler = (event) => {
        this.setState({ password: event.target.value })
    }
    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <pre>{JSON.stringify(this.state)}</pre>
                            <div className="card">
                                <div className="card-header">
                                    <h1>Login form</h1>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="from-group">
                                            <input onChange={this.emailhandler} type="text" placeholder='Email' className='form-control' />
                                        </div>
                                        <br />
                                        <div className="from-group">
                                            <input onChange={this.passwordhandler} type="text" placeholder='Password' className='form-control' />
                                        </div>
                                        <br />
                                        <button className='btn btn-success' onClick={this.submitHandler}>Login</button>
                                    </form>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
