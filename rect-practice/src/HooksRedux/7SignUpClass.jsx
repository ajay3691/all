import React, { Component } from 'react';

export class SignUpClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            mobile: "",
            password: "",
            termsAccepted: false,
        };
        // this.buttonEl = React.createRef(); // Define the ref here

    }

    updateHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    acceptTermHandler = (event) => {
        this.setState({ termsAccepted: event.target.checked });
        //this.buttonEl.current.disabled = !event.target.checked;
        // this.buttonEl = React.createRef(); // Define the ref here
    }

    render() {
        return (
            <div>
                <div className="container">
                <h2>Register form Class</h2>
                    <div className="row">
                        <pre>{JSON.stringify(this.state)}</pre>
                        <div className="col-md-4">
                            <form>
                                <div className="form-group">
                                    <input type="email"
                                        onChange={this.updateHandler}
                                        name="email"
                                        placeholder='Email'
                                        className='form-control'
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="number"
                                        onChange={this.updateHandler}
                                        name="mobile"
                                        placeholder='Mobile'
                                        className='form-control'
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="password"
                                        onChange={this.updateHandler}
                                        name="password"
                                        placeholder='password'
                                        className='form-control'
                                    />
                                </div>
                                <div className="form-check">
                                    <input type="checkbox"
                                        onChange={this.acceptTermHandler}
                                        className="form-check-input"
                                    />
                                    <label className="form-check-label">
                                        Accept Terms and Conditions
                                    </label>
                                </div>

                                <button
                                    onClick={this.submitHandler}
                                    //ref={this.buttonEl}
                                    className='btn btn-success'
                                    disabled={!this.state.termsAccepted}
                                >
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUpClass;
