

import React, { Component } from 'react';
import AddRecipe from '../../actions/recipeActions';
import {connect} from 'react-redux';

class CreateRecipe extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      content: '',
    };

  }



  handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(this.state)
    this.props.addRecipe(this.state)
    this.props.history.push('/');

  }

  handleChange = (evt) => {
    console.log(evt)
    this.setState({
      [evt.target.id]: evt.target.value
    });
  };



  render() {

    console.log('render it again!!')
    return (
      <div className="jumbotron" style={{ background: 'transparent' }}>
        <div className="container">
          <form>
            <div className="form-group row">
              <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="title" placeholder="Title" onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="content" className="col-sm-2 col-form-label">Content</label>
              <div className="col-sm-10">
                <textarea type="text" className="form-control" id="content" placeholder="Content" onChange={this.handleChange} rows="6"/>
              </div>
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Create Recipe</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addRecipe: (details) => dispatch(AddRecipe(details))
    }
}


export default connect(null,mapDispatchToProps)(CreateRecipe);