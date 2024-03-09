import React, { Component } from 'react'

export class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            termsAccepted: false,
        };
        this.buttonRef = React.createRef();
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleTermsCheck = (event) => {
        const isChecked = event.target.checked;
        this.setState({ termsAccepted: isChecked });
        this.buttonRef.current.disabled = !isChecked;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted with data:', this.state);
    }

    render() {
        const { email, password, termsAccepted } = this.state;

        return (
            <div className="registration-form">
                <h2>Registration Form </h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="checkbox"
                            id="termsCheckbox"
                            onChange={this.handleTermsCheck}
                        />
                        <label htmlFor="termsCheckbox">Accept Terms and Conditions</label>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        ref={this.buttonRef}
                        disabled={!termsAccepted}
                    >
                        Register
                    </button>
                </form>
            </div>
        );
    }
}
export default Register
