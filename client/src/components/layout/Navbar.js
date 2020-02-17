import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="uk-navbar-container">
                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav">
                        <li><i uk-icon="icon: code"></i> MERN</li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;