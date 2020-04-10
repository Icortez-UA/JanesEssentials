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
import BackToTop from "../../components/backtotop/top"



function AllStrains(){
  //const [strain,setStrain] = useState(All.data);
  const [ogStrain,setOgstrain] = useState(OG);
  const [searchTerm, setSearchTerm] = useState("");
  let [pos, setPos] = useState(window.pageYOffset)
  let [visible, setVisible] = useState("")


 const scaleOut = () => {
  let temp = window.pageYOffset;

  if (pos < temp) {
    setVisible('');
} else {
    setVisible('scale-out');
}
 };

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
    window.addEventListener("scroll", scaleOut);

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
              <Col size="s12 m6">
              <img className="responsive-image" src={BrandImg} alt="logo"></img>
              </Col>
              
              <Col size="s12 m6">
              <h3>{ogStrain.Name}</h3>
              <h6>by: SampleBrand</h6>
              <h6>Strain Type: {ogStrain.Value_race}<i class="material-icons">eco</i></h6>
              <ul className="collapsible">
    <li>
      <div class="collapsible-header"><i class="material-icons">local_dining</i>Flavors</div>
      <div class="collapsible-body"><span>{ogStrain.Value_flavors}</span></div>
    </li>
        <li>
      <div class="collapsible-header"><i class="material-icons">local_hospital</i>Medical Uses</div>
      <div class="collapsible-body"><span>Used to Treat: {ogStrain.Value_effects_medical}</span></div>
    </li>
        <li>
      <div class="collapsible-header"><i class="material-icons">sentiment_satisfied_alt</i>Positive Effects</div>
      <div class="collapsible-body"><span>{ogStrain.Value_effects_positive}</span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">sentiment_very_dissatisfied</i>Negative Effects</div>
      <div class="collapsible-body"><span>{ogStrain.Value_effects_negative}</span></div>
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

  <BackToTop scale= {visible} />
    </Container>

  </Row>
  </div>

}
export default AllStrains;