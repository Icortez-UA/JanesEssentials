import React from 'react';
import {Col} from '../grid/index';
import Card from '../Card/card';

function propsCard(props){


    return(
      <div>
              
                <Col key={props.index} size="s12 m4">
        <Card  classes="card hoverable medium">
        <Card  classes="card-image waves-effect waves-block waves-light">
        <img data-target={`modal${props.index}`} className="modal-trigger"src={props.Logo} alt="logo"></img>
        </Card>
          <Card classes="card-content">
            <Card classes="card-title grey-text text-darken-4">
              {props.Name}
            </Card>              
          </Card>
          <Card classes= "card-action">
          <a data-target={`modal${props.index}`} className="waves-effect waves-light btn modal-trigger">More info</a>
          </Card>
        </Card>
        <div id={`modal${props.index}`} className="modal modal-fixed-footer">
          <div className="modal-content">
            <div className="row">
            <Col size="s12 m6">
            <img style={{maxWidth: '100%'}} className="responsive-image" src={props.BrandImg} alt="logo"></img>
            </Col>
            
            <Col size="s12 m6">
            <h3>{props.Name}</h3>
            <h6>by: {props.brand}</h6>
            <ul className="collapsible">
  <li>
    <div className="collapsible-header"><i className="material-icons">sentiment_satisfied_alt</i>Category</div>
    <div className="collapsible-body"><span>{props.category}</span></div>
  </li>

  <li>
    <div className="collapsible-header"><i className="material-icons">local_dining</i>THC</div>
    <div className="collapsible-body"><span>{props.thc}</span></div>
  </li>
      <li>
    <div className="collapsible-header"><i className="material-icons">local_hospital</i>CBD</div>
    <div className="collapsible-body"><span>{props.cbd}</span></div>
  </li>
            </ul>
            </Col>
            </div>
            <div className="row">
              <Col size="s12 l6 offset-l6 flow-text">
                <h6>Description</h6>
                <div className="divider"></div>
              <p>{props.description}</p>
              </Col>
              
            </div>
          </div>
          <div className="modal-footer">
          <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>
    </Col>
      </div>



    )
}

export default propsCard;