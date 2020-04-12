import React, {useState,useEffect} from 'react';
import M from "materialize-css"
import {Col, Container, Row} from "../../components/grid/index"
import Card from "../../components/Card/card"
import All from "../../utils/data1.json"
import OG from "../../utils/janesSampledata.json"
import Banner from "../../components/Parallax/parallax"
import BannerImg from "../../assets/imgs/janesParalax.jpg"
import {GoogleMap, GoogleApiWrapper} from "google-maps-react";
import SimpleMap from "../../components/map/map"



  const Profile = ()=> {
    

    return <div>
    
    <Banner classes="parallax-container">
   <div class="section no-pad-bot">
      <Container>
        <h1 class="header center white-text text-lighten-2">Hello!</h1>
        
      </Container>
    </div>
    <Banner classes="parallax">
    <img src={BannerImg} alt="banner"></img>
    </Banner>
  </Banner>

  
        <Container>
            <Row size="m6 s12">
                <Col>
                    <Card classes="card">
                        <Card classes="card-title">
                            <h1>Favorites</h1>
                        </Card>
                    </Card>
                </Col>
                <Col>
                <Card classes="card">
                  <Card classes="card-title">
                    <h1>Locations</h1>
                  </Card>
                </Card>
                </Col>
                <Col>
                <Card classes="card">
                  <Card classes="card-title">
                    <h1>Map</h1>
                    <div class="col s12 m4">
          <SimpleMap classes= "map-container">
            <GoogleMap class="card grey lighten-1">
               <div class="card-content">
                  <div id="map"></div>
               </div>
            </GoogleMap>
            </SimpleMap>
         </div>

                  </Card>
                </Card>
                </Col>
            </Row>
        </Container>
        </div>
  }

  

export default Profile;