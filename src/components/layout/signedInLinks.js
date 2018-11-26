import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {signoutActions} from '../../actions/authActions';
const SignedInLinks = (props) => {
    return (
        <ul className="navbar-nav  ml-auto">
            <li className="nav-item active">
                <Link to = '/createRecipe' className="nav-link">Create Recipe <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
                <Link to = '/' className="nav-link">Recipes List</Link>
            </li>
            <li className="nav-item">
                <a onClick={props.signout}>Logout</a>
            </li>
            <li className="nav-item">
                <Link to = '/' className="btn btn-floating btn-circle btn-xl btn-danger">XX</Link>
            </li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signout: () => dispatch(signoutActions())
    }
}

export default connect(null,mapDispatchToProps)(SignedInLinks);