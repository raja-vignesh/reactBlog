import React,{Component} from 'react';
import RecipeItem from './recipeItem';

class RecipeList extends Component {

    state = {
        recipes:[
            {id:1,title:'This is title 1',content:'This is content 1',author:'xx yy'},
            {id:2,title:'This is title 2',content:'This is content 2',author:'aa bb'},
            {id:3,title:'This is title 3',content:'This is content 3',author:'zz bb'}
        ]
    }

    render() {
        return(

            this.state.recipes.length > 0 ?  this.state.recipes.map(x => {
                return <RecipeItem item={x} key={x.id}/>
            }) :  <p>Loading content</p>
        )
    }
}


export default RecipeList;