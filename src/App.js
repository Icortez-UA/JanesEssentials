import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";





function App() {
    return (
      <Router>
        <div>
          <NavTabs />
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/discover" component={Discover} />
          <Route path="/search" component={Search} />
        </div>
      </Router>
    );
  }
  
  export default App;