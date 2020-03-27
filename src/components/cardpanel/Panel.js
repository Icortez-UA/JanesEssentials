import React from "react";


function cardPanel(props){
    return <div>
          <div id="headerInfo" className="container">
            <div className="card-panel white center-align">
               <h2>{props.title}</h2>
            </div>
         </div>
       </div>
    
    
 
}

export default cardPanel;