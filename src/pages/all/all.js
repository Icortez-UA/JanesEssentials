import React, {useState,useEffect,useRef} from 'react';
import M  from "materialize-css"
//import Panel from "../../components/cardpanel/Panel";
import {Col, Container, Row} from "../../components/grid/index"
import Card from "../../components/Card/card"
//import All from "../../utils/data1.json"
import OG from "../../utils/janesSampledata.json"
import Logo from "../../assets/imgs/icon-192x192.png"
import Banner from "../../components/Parallax/parallax"
import BannerImg from "../../assets/imgs/janesParalax.jpg"
import BrandImg from "../../assets/imgs/brandlogo.png"



function AllStrains(){
  //const [strain,setStrain] = useState(All.data);
  const [ogStrain,setOgstrain] = useState(OG);
  const [searchTerm, setSearchTerm] = useState("");


 

  const handleChange = (event) => {
     setSearchTerm(event.target.value);
   };

  const filterResults = (choice,obj) =>{
    if(choice === "DEFAULT"){
      return obj;
    }
    else if (choice === "All"){
      return obj;
    }
    else{
    var result = obj.filter((a) =>{
      return a.Value_race === choice
  });
      return result;
    }

  }

  useEffect(()=>{
    //setStrain(strain.sort((a, b) => (a.seedCompany.name > b.seedCompany.name) ? 1 : -1))
    
    M.AutoInit();
    const results = OG.filter((a) =>
      a.Name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setOgstrain(results);
    

  
  },[searchTerm])

  return <div>
  <Banner classes="parallax-container">
    <Banner classes="parallax">
    <img src={BannerImg} alt="banner"></img>
    </Banner>
  </Banner>
  
  
 <Row>
  <div className="input-field col s4 offset-s2">
    <select defaultValue={'DEFAULT'} onChange={e=> setOgstrain(filterResults(e.currentTarget.value,OG)) }>
      <option value="DEFAULT" disabled >Choose your Strain Type!</option>
      <option value="All">All</option>
      <option value="hybrid">Hybrid</option>
      <option value="indica">Indica</option>
      <option value="sativa">Sativa</option>
    </select>
  </div>
  <div className="col s4">
      <form>
        <div class="input-field">
        <i class="material-icons prefix">search</i>
          <input id="search" type="search" placeholder="Search by name?" value={searchTerm} onChange={handleChange} required></input>
          <label class="label-icon" for="search"></label>
          <i class="material-icons">close</i>
        </div>
      </form>
    </div>
 </Row>

  <Row>
    <Container >
      {ogStrain.slice(0,500).map((ogStrain,index)=>(
        <Col key={index} size="s6 m4">
          <Card  classes="card hoverable medium">
          <Card  classes="card-image waves-effect waves-block waves-light">
          <img data-target={`modal${index}`} className="responsive-image modal-trigger"src={Logo} alt="logo"></img>
          </Card>
            <Card classes="card-content">
              <Card classes="card-title grey-text text-darken-4">
                {ogStrain.Name}
              </Card>              
            </Card>
            <Card classes= "card-action">
            <a data-target={`modal${index}`} class="waves-effect waves-light btn modal-trigger">More Info</a>
            </Card>
          </Card>
          <div id={`modal${index}`} className="modal modal-fixed-footer">
            <div className="modal-content">
              <Col size="m6">
              <img className="responsive-image" src={BrandImg} alt="logo"></img>
              </Col>
              
              <Col size="m6">
              <h3>{ogStrain.Name}</h3>
              <h6>by: SampleBrand</h6>
              <ul className="collection">
              <li className="collection-item avatar">
              <img src={Logo} alt="" class="circle"></img>
              <span className="title"></span>
              <p>Strain Type: {ogStrain.Value_race}</p>
              <p>Flavors: {ogStrain.Value_flavors}</p>
              
              </li>
              <li class="collection-item avatar">
              <i class="material-icons circle">sentiment_very_satisfied</i>
              <span class="title">Positive Effects:</span>
              <p>{ogStrain.Value_effects_positive}</p>
              <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
              </li>
              <li class="collection-item avatar">
              <i class="material-icons circle">sentiment_very_dissatisfied</i>
              <span class="title">Negative Effects:</span>
              <p>{ogStrain.Value_effects_negative}</p>
              <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
              </li>
              <li class="collection-item avatar">
              <i class="material-icons circle">local_hospital</i>
              <span class="title">Medical use:</span>
              <p>{ogStrain.Value_effects_medical}</p>
              <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
              </li>
              </ul>
              </Col>
              
            </div>
            <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
            </div>
          </div>
      </Col>
      ))}

    </Container>
  </Row>
  </div>

}
export default AllStrains;