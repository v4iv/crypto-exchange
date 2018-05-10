/**
 * Created by vaibhav on 9/5/18
 */
import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar is-primary" aria-label="main navigation">
            <div className="navbar-brand">
                <span className="navbar-item">
                    <Link to="/" className="has-text-white">Crypto Exchange</Link>
                </span>
            </div>
        </nav>
    );
};

export default Navbar;