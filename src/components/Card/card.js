import React from "react";

//this component wil be a different type of card according to what class is used ie. classes="card-content"
//use materialize card documentation to find what you need 

function card({classes,children}){
    return <div className= {classes}>
        {children}

    </div>
}

export default card;