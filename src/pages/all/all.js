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
    
    M.AutoInit();
    const results = OG.filter((a) =>
      a.Name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setOgstrain(results);


    
    

  
  },[searchTerm])

  return <div>
  <Banner classNamees="parallax-container">
  <div className="section no-pad-bot">
      <Container>
        <h1 className="header center white-text text-lighten-2">Welcome To Jane's Essentials</h1>
        <div className="row center">
          <h5 className="header col s12 white-text light">Search the strains</h5>
        </div>
      </Container>
    </div>
    <Banner classNamees="parallax">
    <img src={BannerImg} alt="banner"></img>
    </Banner>
  </Banner>
  
  
 <Row>
  <div classNameName="input-field col s4 offset-s2">
    <select defaultValue={'DEFAULT'} onChange={e=> setOgstrain(filterResults(e.currentTarget.value,OG)) }>
      <option value="DEFAULT" disabled >Choose your Strain!</option>
      <option value="All">All</option>
      <option value="hybrid">Hybrid</option>
      <option value="indica">Indica</option>
      <option value="sativa">Sativa</option>
    </select>
  </div>
  <div classNameName="col s4">
      <form>
        <div className="input-field">
        <i className="material-icons prefix">search</i>
          <input id="search" type="search" placeholder="Search by name?" value={searchTerm} onChange={handleChange} required></input>
          <label className="label-icon" for="search"></label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </div>
 </Row>

  <Row>
    <Container >
      {ogStrain.slice(0,750).map((ogStrain,index)=>(
        <Col key={index} size="s6 m4">
          <Card  classNamees="card hoverable medium">
          <Card  classNamees="card-image waves-effect waves-block waves-light">
          <img  src={Logo} alt="logo"></img>
          </Card>
          
            <Card classNamees="card-content">
              <Card classNamees="card-title grey-text text-darken-4">
                {ogStrain.Name}
              </Card>
                  <ul>
                    <li>Strain: {ogStrain.Value_race}</li>
                    <li>Flavors: {ogStrain.Value_flavors}</li>
                  </ul>     
            </Card>
          </Card>
      </Col>
      ))}

    </Container>
  </Row>
  </div>

}
export default AllStrains;