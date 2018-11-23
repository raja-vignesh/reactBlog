import React, { Component } from 'react';
import {AuthActions} from '../../actions/authActions';
import {connect} from 'react-redux';

class Signin extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

  }



  handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(this.state)
    this.props.signin(this.state)
  }

  handleChange = (evt) => {
    console.log(evt)
    this.setState({
      [evt.target.id]: evt.target.value
    });
  };



  render() {


    return (
      <div className="jumbotron" style={{ background: 'transparent' }}>
        <div className="container">
          <form>
            <div className="form-group row">
              <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="email" placeholder="Email" onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.handleChange} />
              </div>
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Signin</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signin: (creds) => dispatch(AuthActions(creds))
  }
}


export default connect(null,mapDispatchToProps)(Signin);
