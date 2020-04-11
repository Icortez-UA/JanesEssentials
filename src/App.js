import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllStrains from "./pages/all/all";
import NavTabs from "./components/navbar/navbar"
import Home from "./pages/home/home";
import Hybrid from "./pages/hybrid/hybrid";
import LoginPage from "./pages/LoginPage/login";
import RegisterPage from "./pages/RegisterPage/register";




function App() {

    return (
      <Router>
        <div>
          <NavTabs />
          <Route exact path="/" component={Home} />
          <Route exact path="/all" component={AllStrains} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/hybrid" component={Hybrid} />
          <Route exact path="/LoginPage" component={} />
          <Route exact path="/RegisterPage" component={} />
        </div>
      </Router>
    );
  }
  
  export default App;