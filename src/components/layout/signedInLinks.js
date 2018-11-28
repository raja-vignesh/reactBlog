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
                <a class="nav-link" onClick={props.signout}>Logout</a>
            </li>
            <li className="nav-item">
                <Link to = '/' className="btn btn-floating btn-circle btn-xl btn-danger">{props.initials}</Link>
            </li>
        </ul>
    )
}

const mapStatToProps = (state) => {
    console.log('signed in mapStatToProps')
    console.log(state)
    return {
        initials:state.firebase.profile.initials
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signout: () => dispatch(signoutActions())
    }
}

export default connect(mapStatToProps,mapDispatchToProps)(SignedInLinks);