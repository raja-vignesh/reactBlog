import React,{Component} from 'react';
import RecipeItem from './recipeItem';
import {connect} from 'react-redux';
import RecipeListAction from '../../actions/recipeActions';
import {bindActionCreators} from 'redux';

class RecipeList extends Component {

    state = {
        
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.props.RecipeListAction()
    }

    render() {
        console.log('render')
        console.log(this.props.recipes);
        return(

            this.props.recipes.length > 0 ?  this.props.recipes.map(x => {
                return <RecipeItem item={x} key={x.id}/>
            }) :  <p>Loading content</p>
        )
    }
}

const mapStateToProps = (state) => {
    return {recipes:state.recipes}
}

const mapDispatchToProps = (dispatch,props) => {
    console.log('mapDispatchToProps');
    return bindActionCreators({
        RecipeListAction
    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(RecipeList);