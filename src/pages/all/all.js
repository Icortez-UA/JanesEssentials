import React, {useEffect} from 'react';
import M from "materialize-css"
import Panel from "../../components/cardpanel/Panel";
import {Col, Container, Row} from "../../components/grid/index"
import Card from "../../components/Card/card"
import All from "../../utils/all-strains.json"
import Logo from "../../assets/imgs/icon-192x192.png"
import Banner from "../../components/Parallax/parallax"
import BannerImg from "../../assets/imgs/janesParalax.jpg"



function AllStrains(){
  useEffect(()=>{
    M.AutoInit();
  
  })

  return <div>
  <Banner classes="parallax-container">
    <Banner classes="parallax">
    <img src={BannerImg} alt="banner"></img>
    </Banner>
  </Banner>
  
  <Row>
    <Container>
      {All.slice(0,52).map(All=>(
        <Col size="s6 m4">
          <Card classes="card hoverable medium">
          <Card classes="card-image waves-effect waves-block waves-light">
          <img data-id='+res[i].id+' src={Logo} alt="logo"></img></Card>
            <Card classes="card-content">
              <Card classes="card-title grey-text text-darken-4">
                {All.Name}
              </Card>
            </Card>
          </Card>
      </Col>
      ))}

    </Container>
  </Row>
  </div>

}
export default AllStrains;