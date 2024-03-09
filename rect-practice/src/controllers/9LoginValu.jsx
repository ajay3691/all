import React, { Component } from 'react'

export class LoginValu extends Component {
  state = {
    email: "",
    mobile: "",
    password: ""
  }
  updateHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
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
            <pre>{JSON.stringify(this.state)}</pre>
            <div className="col-md-4">
              <form>
                <div className="form-group">
                  <input onChange={this.updateHandler} name="email" type="text" placeholder='Email' className='form-control' />
                </div>
                <div className="form-group">
                  <input onChange={this.updateHandler} name="mobile" type="text" placeholder='Mobile' className='form-control' />
                </div>
                <div className="form-group">
                  <input onChange={this.updateHandler} name="password" type="text" placeholder='password' className='form-control' />
                </div>
                <button onClick={this.submitHandler} className='btn btn-success'>Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginValu
