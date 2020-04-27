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
            <h6>by: SampleBrand</h6>
            <h6>Strain Type: {props.race}<i className="material-icons">eco</i></h6>
            <ul className="collapsible">
  <li>
    <div className="collapsible-header"><i className="material-icons">local_dining</i>Flavors</div>
    <div className="collapsible-body"><span>{props.flavors}</span></div>
  </li>
      <li>
    <div className="collapsible-header"><i className="material-icons">local_hospital</i>Medical Uses</div>
    <div className="collapsible-body"><span>Used to Treat: {props.medical}</span></div>
  </li>
      <li>
    <div className="collapsible-header"><i className="material-icons">sentiment_satisfied_alt</i>Positive Effects</div>
    <div className="collapsible-body"><span>{props.positive}</span></div>
  </li>
  <li>
    <div className="collapsible-header"><i className="material-icons">sentiment_very_dissatisfied</i>Negative Effects</div>
    <div className="collapsible-body"><span>{props.negative}</span></div>
  </li>


            </ul>
            </Col>
            </div>
            <div className="row">
              <Col size="s12 l6 offset-l6">
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