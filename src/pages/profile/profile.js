import React, {useState,useEffect} from 'react';

import {Col, Container, Row} from "../../components/grid/index"
import Card from "../../components/Card/card"
import All from "../../utils/data1.json"
import OG from "../../utils/janesSampledata.json"
import Logo from "../../assets/imgs/icon-192x192.png"
import Banner from "../../components/Parallax/parallax"
import BannerImg from "../../assets/imgs/janesParalax.jpg"


  const Profile = ()=> {
    

    return <div>
    
    <Banner classes="parallax-container">
   <div class="section no-pad-bot">
      <Container>
        <h1 class="header center white-text text-lighten-2">Hello Name!</h1>
        
      </Container>
    </div>
    <Banner classes="parallax">
    <img src={BannerImg} alt="banner"></img>
    </Banner>
  </Banner>

  
        <Container>
            <Row>
                <Col size="s6 m12">
                    <Card classes="card">
                        <Card classes="card-title">
                            <h1>Favorites</h1>
                        </Card>
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>
}

export default Profile;
