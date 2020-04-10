import React from 'react';


function scrollToTop(props){

   const Top = ()=>{
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
    
    return <div class="fixed-action-btn" onClick= {()=>{Top()}}>
    <a id="top1" class={`btn-floating btn-large green darken-2 scale-transition ${props.scale}`}>
       <i class="large material-icons">arrow_upward</i>
    </a>
 </div>
}

export default scrollToTop;