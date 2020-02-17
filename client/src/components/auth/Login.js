import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        console.log(userData);
    };

    render() {
        const { errors } = this.state;

        return (
            <div className="uk-container">
                <p className="uk-text-medium"><i uk-icon="icon: chevron-left"></i> <Link to="/">Back to Home</Link></p>
                <form className="uk-form-stacked" noValidate onSubmit={this.onSubmit}>
                    <fieldset className="uk-fieldset">

                        <legend className="uk-legend"><strong>LOGIN</strong> Below</legend>

                        <div className="uk-margin">
                            <label className="uk-form-label">EMAIL</label>
                            <div className="uk-form-controls">
                                <input
                                    className="uk-input"
                                    id="email"
                                    type="email"
                                    placeholder="Input your email..."
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    error={errors.email}
                                />
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label">PASSWORD</label>
                            <div className="uk-form-controls">
                                <input
                                    className="uk-input"
                                    id="password"
                                    type="password"
                                    placeholder="Input your password..."
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    error={errors.email}
                                />
                            </div>
                        </div>

                        <div className="uk-margin">
                            <div className="uk-form-controls">
                                <button type="submit" className="uk-button uk-button-primary uk-width-1-1">Login</button>
                                <p>Already has a account? <Link to="/register">Register</Link></p>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default Login;