import React from "react";
import { Link} from "react-router-dom";
import Side from "../sidenav/sidenav";

function navbar(){
   return <div>
   <nav className="grey">
      <div className="nav-wrapper">
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
