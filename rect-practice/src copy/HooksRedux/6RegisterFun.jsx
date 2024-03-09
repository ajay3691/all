import React, { useState } from 'react';

const RegisterFun = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        termsAccepted: false,
    });

    let updateHandler = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    let acceptTermHandler = (event) => {
        setFormData({ ...formData, termsAccepted: event.target.checked });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <div className="container">
            <h2>Register form Function</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={updateHandler} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={formData.password} onChange={updateHandler} className="form-control" />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={acceptTermHandler} className="form-check-input" required />
                    <label className="form-check-label">
                        Accept terms and conditions
                    </label>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={!formData.termsAccepted}
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegisterFun;
