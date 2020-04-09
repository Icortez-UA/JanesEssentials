import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Side from "../sidenav/sidenav";
import Logo from "../../assets/imgs/janelogo.png"

 


function navbar(props){
  
  const styles ={
    width: 70, 
    marginleft:  20,
    margintop: -55,
    Height: 65

  }



   return <div className="navbar-fixed">
   <nav id="navBar" className={`grey scale-transition ${props.scale}`}>
      <div className="nav-wrapper">
      <Link to="/home" className="brand-logo">
        <img className="responsive-image" src={Logo} id="navlogo"  style={styles}></img></Link>
      <a data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
       <li><Link
          to="/home"
        
        >
          Home
        </Link></li>
        <li><Link
          to="/all"
        >
          All
        </Link></li>
        <li><Link
          to="/hybrid"
        >
          Hybrid
        </Link></li>
        
   </ul>
</div>
</nav>
<Side classes="sidenav" id="mobile-demo"></Side>
</div>
}
export default navbar;
