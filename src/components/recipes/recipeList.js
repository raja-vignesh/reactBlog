import React,{Component} from 'react';
import RecipeItem from './recipeItem';
import {connect} from 'react-redux';
import RecipeListAction from '../../actions/recipeActions';
import {bindActionCreators} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';

class RecipeList extends Component {

    state = {
        
    }

    componentDidMount() {
        console.log('componentDidMount')
        //this.props.RecipeListAction()
    }

    render() {
        console.log(this.props);
        const {projects} = this.props;
        const {auth} = this.props;
        console.log('uid')
        console.log(auth.uid)
        if (!auth.uid) return <Redirect to='/signin'/>
        console.log('render')
        console.log(this.props.recipes);
        return(

            this.props.recipes && this.props.recipes.length > 0 ?  this.props.recipes.map(x => {
                return <RecipeItem item={x} key={x.id}/>
            }) :  <p>Loading content</p>
        )
    }
}

const mapStateToProps = (state) => {
    return {recipes:state.firestore.ordered.recipes,auth:state.firebase.auth}
}

const mapDispatchToProps = (dispatch,props) => {
    console.log('mapDispatchToProps');
    return bindActionCreators({
        RecipeListAction
    }, dispatch)
}

export default compose(connect(mapStateToProps,mapDispatchToProps),firestoreConnect([{
    collection:'recipes',

}]))(RecipeList);


