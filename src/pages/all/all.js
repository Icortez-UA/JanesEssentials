import React, {useState,useEffect} from 'react';
import M  from "materialize-css";
import { Container, Row} from "../../components/grid/index";
import OG from "../../utils/ogdata.json";
import products from "../../utils/productdata.json";
import JaneLogo from "../../assets/imgs/icon-192x192.png";
import Banner from "../../components/Parallax/parallax";
import BannerImg from "../../assets/imgs/homepage.jpg";
import BrandImg from "../../assets/imgs/brandlogo.png";
import BackToTop from "../../components/backtotop/top";
import Navtabs from "../../components/navbar/navbar"
import InfoCard from "../../components/infocard/info";
import "./all.css";


function AllStrains(){

  const [ogStrain,setOgstrain] = useState(OG);
  const [searchTerm, setSearchTerm] = useState("");
  const [product,setProduct]= useState(products);
  const [medical,setMedical]= useState("");
  const [itemChoice,setItemChoice]= useState(true)
  let [pos] = useState(window.pageYOffset)
  let [visible, setVisible] = useState("scale-out")
//function to swith between products or strains will update as we obtain more data
  const ItemSwitch=()=>{
    let checkbox =document.getElementById("switch")
    if(checkbox.checked ===true){
      return setItemChoice(true);
    }else{
      return setItemChoice(false);
    }
  };
//function to replace comma in data
  const strings= (str)=>{
 
    var newstr= str.replace(/,/g, ' | ');

  return newstr;
};
//function to scale out the return to top button
 const scaleOut = () => {
  let temp = window.pageYOffset;

  if (pos < temp) {
    setVisible('');
} else {
    setVisible('scale-out');
}
 };
//handle change of search term
  const handleChange = (event) => {
    let search = event.target.value;
    console.log(search)
    if(search===""){
      setSearchTerm(search)
      setOgstrain(OG);
    }
      else{setSearchTerm(search);
     let results = OG.filter((a) =>
      a.Name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setOgstrain(results);}
    };
// handle search of product category
    const handleProductSearch =(event) =>{
      let search = event.target.value;
        setSearchTerm(search);
      let result = product.filter((a)=>
        a.name.toLowerCase().includes(searchTerm.toLowerCase())
       )
       setProduct(result);
    };
// function to check if product or strains is chosen for given search
    const SearchWhat =(event)=>{
      if(itemChoice===true){
        return handleChange(event);
      }else{
        return handleProductSearch(event);
      }
    }
//handle submit of search
   function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm(event.target.value);
    const results = OG.filter((a) =>
     a.Name.toLowerCase().includes(searchTerm.toLowerCase())
   );
   setOgstrain(results);
  }

//function for search through medical effects subject to change
  /* const handleEffect =(event)=>{
     setMedical(event.target.value);
     const result = OG.filter((a)=>{
      let effects= strings(a.Value_effects_medical);
     return  effects.toLowerCase().includes(medical.toLowerCase())
     })
     setOgstrain(result)
   };*/
// functionl to filter results based on choice
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
// useeffect
  useEffect(()=>{    
    M.AutoInit();


    window.addEventListener("scroll", scaleOut);

  },[searchTerm,medical])

  return <div>
    <Navtabs />
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
          <input id="search" type="search" placeholder="Search by name?" value={searchTerm} onChange={SearchWhat}></input>
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
  <div className="switch">
    <label>
      products
      <input id="switch" type="checkbox"  checked={itemChoice} onChange={ItemSwitch}></input>
      <span className="lever"></span>
      Strains
    </label>
  </div>

 </Row>

 
    
      {(function(){
        if(itemChoice){
          return ( <Row>
          <Container id="focus" >
          {ogStrain.slice(0,500).map((ogStrain,index)=>(<InfoCard key={index} index={ogStrain.Name} Name={ogStrain.Name} race={ogStrain.Value_race}
    medical={strings(ogStrain.Value_effects_medical)} positive={strings(ogStrain.Value_effects_positive)} negative={ogStrain.Value_effects_negative}
    flavors={ogStrain.Value_flavors} Logo={JaneLogo} BrandImg={BrandImg}/>))}
     <BackToTop scale= {visible} />
    </Container>
    </Row>)
        }else{
          return  (<Row>
          <Container id="focus" >
          {products.slice(0,500).map((products,index)=>(<InfoCard key={index} Name={products.name} Logo={JaneLogo} BrandImg={BrandImg} />))}
          <BackToTop scale= {visible} />
          </Container>
          </Row>)
        }
      })()}


  
  </div>

}
export default AllStrains;