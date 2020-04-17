import React from "react";
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



   return <div>
        <div className="navbar-fixed">
   <nav id="navBar" className={`grey scale-transition ${props.scale}`}>
      <div className="nav-wrapper">
      <Link to="/home" className="brand-logo">
        <img className="responsive-image" src={Logo} id="navlogo" alt="logo"  style={styles}></img></Link>
      <a data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link
          to="/home"
        >
          Home
        </Link></li>
        <li><Link
          to="/LoginPage"
        >
         Login
        </Link></li>
        <li><Link
          to="/RegisterPage"
        >
          Register
        </Link></li>
        
   </ul>
</div>
</nav>
</div>
<Side classes="sidenav" id="mobile-demo"></Side>

   </div>


}
export default navbar;
