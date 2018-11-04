import React from 'react';
import {Link} from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <ul className="navbar-nav  ml-auto">
            <li className="nav-item active">
                <Link to = '/login' className="nav-link">Login <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
                <Link to = '/signup' className="nav-link">Signup</Link>
            </li>
        </ul>
    )
}

export default SignedOutLinks;