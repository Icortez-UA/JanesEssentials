import React from "react";
import { Link, useLocation } from "react-router-dom";



function navbar(){
   return <div>
   <nav className="grey">
      <div className="nav-wrapper">
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
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
</div>
}
export default navbar;
