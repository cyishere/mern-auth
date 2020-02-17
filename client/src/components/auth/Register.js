import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            password: '',
            passconf: '',
            errors: {}
        };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            passconf: this.state.passconf
        };

        console.log(newUser);
    };

    render() {
        const { errors } = this.state;

        return (
            <div className="uk-container">
                <p className="uk-text-medium"><i uk-icon="icon: chevron-left"></i> <Link to="/">Back to Home</Link></p>
                <form className="uk-form-horizontal uk-margin-large" noValidate onSubmit={this.onSubmit}>

                    <fieldset className="uk-fieldset">

                        <legend className="uk-legend"><strong>REGISTER</strong> Below</legend>

                        <div className="uk-margin">
                            <label className="uk-form-label">USERNAME</label>
                            <div className="uk-form-controls">
                                <input
                                    className="uk-input"
                                    type="text"
                                    placeholder="Your username..."
                                    name="username"
                                    onChange={this.onChange}
                                    value={this.state.username}
                                    error={errors.username}
                                    id="username"
                                />
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label">EMAIL</label>
                            <div className="uk-form-controls">
                                <input
                                    className="uk-input"
                                    type="email"
                                    placeholder="Your email..."
                                    name="email"
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    error={errors.email}
                                    id="email"
                                />
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label">PASSWORD</label>
                            <div className="uk-form-controls">
                                <input
                                    className="uk-input"
                                    type="password"
                                    placeholder="Your password..."
                                    name="password"
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    error={errors.password}
                                    id="password"
                                />
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label">CONFIRM PASSWORD</label>
                            <div className="uk-form-controls">
                                <input
                                    className="uk-input"
                                    type="password"
                                    placeholder="Confirm your password..."
                                    name="passconf"
                                    onChange={this.onChange}
                                    value={this.state.passconf}
                                    error={errors.passconf}
                                    id="passconf"
                                />
                            </div>
                        </div>

                        <div className="uk-margin">
                            <div className="uk-form-controls">
                                <button type="submit" className="uk-button uk-button-danger uk-width-1-1">Register</button>
                                <p>Already has a account? <Link to="/login">Login</Link></p>
                            </div>
                        </div>

                    </fieldset>

                </form>
            </div>
        );
    }
}

export default Register;