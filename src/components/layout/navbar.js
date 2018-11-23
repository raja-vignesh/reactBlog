//Base layout class
import React from 'react';
import {Link} from 'react-router-dom';
import SignedOutLinks from './signedOutLinks';
import SignedInLinks from './signedInLinks';

const NavBar = () => {
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to = '/' className="navbar-brand">Blog</Link>
                <SignedOutLinks/>
                <SignedInLinks/>
            </nav>
        </div>
    )
}

export default NavBar;
