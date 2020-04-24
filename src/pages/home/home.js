import React,{useEffect} from "react";
import M from "materialize-css"
import {Container} from "../../components/grid/index"
import Banner from "../../components/Parallax/parallax"
import BannerImg from "../../assets/imgs/homepage.jpg"


function Home(){
  useEffect(()=>{
    M.AutoInit();
  
  })
    return <div>
 <Banner classes="parallax-container">
   <div className="section no-pad-bot">
      <Container>
        <h1 className="header center white-text text-lighten-2">Welcome To Janes Essentials</h1>
        <div className="row center">
          <h5 className="header col s12 white-text light">Check us out</h5>
        </div>
      </Container>
    </div>
    <Banner classes="parallax">
    <img src={BannerImg} alt="banner"></img>
    </Banner>
  </Banner>
      </div>

}
export default Home;








