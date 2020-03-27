import React from "react";
import {Col, Row, Container } from "../../components/grid/index"
import Card from "../../components/Card/card"

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