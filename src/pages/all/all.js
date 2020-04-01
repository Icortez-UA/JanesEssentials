import React from 'react';
import Panel from "../../components/cardpanel/Panel";
import {Col, Container, Row} from "../../components/grid/index"
import Card from "../../components/Card/card"
import All from "../../utils/all-strains.json"

function AllStrains(){

  return <div>
  <Panel title="Welcome to Janes Essentials"></Panel>
  <Row>
    <Container>
      <Col size="s6 m3">
          <Card classes="card">
            <Card classes="card-content">

            </Card>
          </Card>
      </Col>
      <Col size="s6 m3">
        <Card classes= "card">
          <Card classes="card-content">

          </Card>
        </Card>
      </Col>

    </Container>
  </Row>
  </div>

}
export default AllStrains;