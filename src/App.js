import React, {useState,useEffect} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllStrains from "./pages/all/all";
import NavTabs from "./components/navbar/navbar"
import Home from "./pages/home/home";
import Hybrid from "./pages/hybrid/hybrid"




function App() {
  let [pos, setPos] = useState(window.pageYOffset)
  let [visible, setVisible] = useState("")
   
   useEffect(()=> {
      const handleScroll = () => {
         let temp = window.pageYOffset
         
         setVisible(pos > temp);
         setPos(temp)
      };
      window.addEventListener("scroll", handleScroll);
      return(() => {
         window.removeEventListener("scroll", handleScroll);
      })
   })
    return (
      <Router>
        <div>
          <NavTabs scale={(!visible ? "scale-out" : " ")} />
          <Route exact path="/" component={Home} />
          <Route exact path="/all" component={AllStrains} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/hybrid" component={Hybrid} />
        </div>
      </Router>
    );
  }
  
  export default App;