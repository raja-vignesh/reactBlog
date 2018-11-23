import React from 'react';
import {Link} from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className="navbar-nav  ml-auto">
            <li className="nav-item active">
                <Link to = '/createRecipe' className="nav-link">Create Recipe <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
                <Link to = '/recipeList' className="nav-link">Recipes List</Link>
            </li>
            <li className="nav-item">
                <Link to = '/' className="btn btn-floating btn-circle btn-xl btn-danger">XX</Link>
            </li>
        </ul>
    )
}

export default SignedInLinks;