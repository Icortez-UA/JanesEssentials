import React from 'react';


function scrollToTop(props){

   const Top = ()=>{
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
    
    return <div className="fixed-action-btn" onClick= {()=>{Top()}}>
    <a id="top1" className={`btn-floating btn-large green darken-2 scale-transition ${props.scale}`}>
       <i className="large material-icons">arrow_upward</i>
    </a>
 </div>
}

export default scrollToTop;