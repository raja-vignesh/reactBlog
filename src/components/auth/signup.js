import React,{Component} from 'react';

export default class SignUp extends Component {

    state = {
        email:'',
        password:'',
        firstName:'',
        lastName:''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('test handleSubmit')
        console.log(this.state);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    render () {
    return (
        <div className="jumbotron" style={{background:'transparent'}}>
        <div className="container">
            <form>
                <div className="form-group row">
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="email" placeholder="Email" onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="firstName" className="col-sm-2 col-form-label">First Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="firstName" placeholder="First Name" onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="lastName" className="col-sm-2 col-form-label">Last Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="lastName" placeholder="Last Name" onChange={this.handleChange}/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
            </form>
        </div>
        </div>
    )}
}


