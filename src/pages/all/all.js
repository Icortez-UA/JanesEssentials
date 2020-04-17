import React, {useState,useEffect} from 'react';
import M  from "materialize-css";
import {Col, Container, Row} from "../../components/grid/index";
import Card from "../../components/Card/card";
//import All from "../../utils/data1.json"
import OG from "../../utils/janesSampledata.json";
import Logo from "../../assets/imgs/icon-192x192.png";
import Banner from "../../components/Parallax/parallax";
import BannerImg from "../../assets/imgs/homepage.jpg";
import BrandImg from "../../assets/imgs/brandlogo.png";
import BackToTop from "../../components/backtotop/top";
import "./all.css";


function AllStrains(){

  const [ogStrain,setOgstrain] = useState(OG);
  const [searchTerm, setSearchTerm] = useState("");
  const [medical,setMedical]= useState("");
  let [pos] = useState(window.pageYOffset)
  let [visible, setVisible] = useState("scale-out")

  const strings= (str)=>{
 
    var newstr= str.replace(/,/g, ' ');

  return newstr;
};

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
     const results = OG.filter((a) =>
      a.Name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setOgstrain(results);
   };
   function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm(event.target.value);
    const results = OG.filter((a) =>
     a.Name.toLowerCase().includes(searchTerm.toLowerCase())
   );
   setOgstrain(results);
  }


   const handleEffect =(event)=>{
     setMedical(event.target.value);
     const result = OG.filter((a)=>{
      let effects= strings(a.Value_effects_medical);
     return  effects.toLowerCase().includes(medical.toLowerCase())
     })
     setOgstrain(result)
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


    window.addEventListener("scroll", scaleOut);

  },[searchTerm,medical])

  return <div>
<div>
 <Banner classes="parallax-container">
   <div className="section no-pad-bot">
      <Container>
        <h1 className="header center white-text text-lighten-2">Welcome To Janes Essentials</h1>
           <div className="col s12 m4">
          <Container>
          <form className="round-form white" onSubmit={handleSubmit}>
        <div className="input-field ">
        <i className="material-icons prefix">search</i>
          <input id="search" type="search" placeholder="Search by name?" value={searchTerm} onChange={handleChange} required></input>
          <label className="label-icon" htmlFor="search"></label>
          <i className="material-icons">close</i>
        </div>
      </form>
      </Container>

    </div>

      </Container>
    </div>
    <Banner classes="parallax">
    <img src={BannerImg} alt="banner"></img>
    </Banner>
    </Banner>
    </div>
  
  
 <Row>
  <div className="input-field col s12 l4 offset-l4">
    <select defaultValue={'DEFAULT'} onChange={e=> setOgstrain(filterResults(e.currentTarget.value,OG)) }>
      <option value="DEFAULT" disabled >Choose your Strain Type!</option>
      <option value="All">All</option>
      <option value="hybrid">Hybrid</option>
      <option value="indica">Indica</option>
      <option value="sativa">Sativa</option>
    </select>
  </div>

 </Row>

  <Row>
    <Container id="focus" >
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
            <a data-target={`modal${index}`} className="waves-effect waves-light btn modal-trigger">More Info</a>
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
              <h6>Strain Type: {ogStrain.Value_race}<i className="material-icons">eco</i></h6>
              <ul className="collapsible">
    <li>
      <div className="collapsible-header"><i className="material-icons">local_dining</i>Flavors</div>
      <div className="collapsible-body"><span>{ogStrain.Value_flavors}</span></div>
    </li>
        <li>
      <div className="collapsible-header"><i className="material-icons">local_hospital</i>Medical Uses</div>
      <div className="collapsible-body"><span>Used to Treat: {ogStrain.Value_effects_medical}</span></div>
    </li>
        <li>
      <div className="collapsible-header"><i className="material-icons">sentiment_satisfied_alt</i>Positive Effects</div>
      <div className="collapsible-body"><span>{ogStrain.Value_effects_positive}</span></div>
    </li>
    <li>
      <div className="collapsible-header"><i className="material-icons">sentiment_very_dissatisfied</i>Negative Effects</div>
      <div className="collapsible-body"><span>{ogStrain.Value_effects_negative}</span></div>
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