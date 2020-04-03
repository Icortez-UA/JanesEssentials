import React, {useState,useEffect} from 'react';
import M  from "materialize-css"
import Panel from "../../components/cardpanel/Panel";
import {Col, Container, Row} from "../../components/grid/index"
import Card from "../../components/Card/card"
import All from "../../utils/data1.json"
import OG from "../../utils/janesSampledata.json"
import Logo from "../../assets/imgs/icon-192x192.png"
import Banner from "../../components/Parallax/parallax"
import BannerImg from "../../assets/imgs/janesParalax.jpg"



function AllStrains(){
  const [strain,setStrain] = useState(All.data);
  const [ogStrain,setOgstrain] = useState(OG);
  const [dropdown,setDropdown] = useState("");

  const filterResults = (choice,obj) =>{
    if(choice === "DEFAULT"){
      return obj;
    }
    else if (choice === "All"){
      return obj;
    }
    else{
    var result = obj.filter((a) =>{
      return a.Value_race == choice
  });
      return result;
    }

  }
  useEffect(()=>{
    //setStrain(strain.sort((a, b) => (a.seedCompany.name > b.seedCompany.name) ? 1 : -1))
    
    M.AutoInit();

  
  },[])

  return <div>
  <Banner classes="parallax-container">
    <Banner classes="parallax">
    <img src={BannerImg} alt="banner"></img>
    </Banner>
  </Banner>
  
  
 <Row>
  <div className="input-field col s4 offset-s4">
    <select defaultValue={'DEFAULT'} onChange={e=> setOgstrain(filterResults(e.currentTarget.value,OG)) }>
      <option value="DEFAULT" disabled >Choose your Strain!</option>
      <option value="All">All</option>
      <option value="hybrid">Hybrid</option>
      <option value="indica">Indica</option>
      <option value="sativa">Sativa</option>
    </select>
  </div>
 </Row>

  <Row>
    <Container>
      {ogStrain.slice(0,150).map((ogStrain,index)=>(
        <Col key={index} size="s6 m4">
          <Card  classes="card hoverable medium">
          <Card  classes="card-image waves-effect waves-block waves-light">
          <img  src={Logo} alt="logo"></img></Card>
            <Card classes="card-content">
              <Card classes="card-title grey-text text-darken-4">
                {ogStrain.Name}
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