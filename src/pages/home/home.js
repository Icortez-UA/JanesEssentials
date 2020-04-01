import React from "react";
import Panel from "../../components/cardpanel/Panel";
import {Col, Container, Row} from "../../components/grid/index"
import Card from "../../components/Card/card"
import Banner from "../../components/Parallax/parallax"
import BannerImg from "../../assets/imgs/janesParalax.jpg"


function Home(){
    return <div>
 <Banner classes="parallax-container">
   <div class="section no-pad-bot">
      <Container>
        <h1 class="header center white-text text-lighten-2">Welcome To Janes Essentials</h1>
        <div class="row center">
          <h5 class="header col s12 white-text light">Check us out</h5>
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







