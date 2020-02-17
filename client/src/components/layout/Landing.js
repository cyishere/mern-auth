import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Landing extends Component {
    render() {
        return (
            <Router>
                <div className="uk-cover-container uk-background-primary uk-text-center" uk-height-viewport>
                    <h1 className="uk-heading-large">MERN AUTH Demo</h1>
                    <p className="uk-text-lead">Create a (minimal) full-stack app with user authentication via
                passport and JWTs</p>
                    <p uk-margin>
                        <Link to="/login" className="uk-button uk-button-default">Login</Link>
                        <Link to="/register" className="uk-button uk-button-danger">Register</Link>
                    </p>
                </div>
            </Router>
            
        );
    }
}

export default Landing;