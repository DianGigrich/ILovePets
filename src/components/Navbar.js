import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {

    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand">I love Pets!</a>
                </div>
                <ul className="nav navbar-nav">
                    <Link to="/">Home</Link>
                    <Link to="/profile">Profile</Link>
                </ul>
            </div>
        </nav>
    )
}
