import React from 'react';

const RecipeItem = (props) => {
    const {item} = props;
    console.log(item);
    return (

        <div className="container" style={{marginTop:'20px'}}>
        <div className="row-justify-content-md-center">
            <div className="card">
                <div className="card-body text-left">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.content}</p>
                    <p className="card-text"><small class="text-muted">Authored by {item.author}</small></p>
                </div>
            </div>
        </div>
        </div>
    )
}
        
export default RecipeItem;
