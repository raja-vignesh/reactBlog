//Base layout class
import React from 'react';
import {Link} from 'react-router-dom';
import SignedOutLinks from './signedOutLinks';
import SignedInLinks from './signedInLinks';
import {connect} from 'react-redux'

const NavBar = (props) => {
    const {auth} = props;
    console.log('NavBar')
    console.log(auth)
    const links = auth ?   <SignedInLinks/> :<SignedOutLinks/> 
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to = '/' className="navbar-brand">Blog</Link>
                {links}
            </nav>
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        auth:state.firebase.auth.uid
    }
}

export default connect(mapStateToProps)(NavBar);
