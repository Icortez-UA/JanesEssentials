import React from "react";
import {Col, Row, Container } from "../../components/grid/index"
import Card from "../../components/Card/card"

//use the col row and container for the grid as we would normally on html 
//With the card component you can change what card class it is by adding classes= "some materialize card class"

const Hybrid = ()=> {
    
    return (
        <Container>
            <Row>
                <Col size="s6 m12">
                    <Card classes="card">
                        <Card classes="card-title">
                            <h1>Welcome!</h1>
                        </Card>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Hybrid;