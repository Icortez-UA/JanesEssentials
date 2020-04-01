import React from "react";
import Panel from "../../components/cardpanel/Panel";
import {Col, Container, Row} from "../../components/grid/index"
import Card from "../../components/Card/card"

function Home(){
    return <div>
      <Panel title="Welcome to Janes Essentials"></Panel>
      <Row>
        <Container>
          <Col size="s6 md3">
              <Card classes="card">
                <Card classes="card-content">

                </Card>
              </Card>
          </Col>

        </Container>
      </Row>
      </div>

}
export default Home;







