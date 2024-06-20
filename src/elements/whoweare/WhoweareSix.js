import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../../assets/css/Whoweare.css"

function WhoweareSix() {
    return (
        <div>
            <Container className="text-center my-5">
                <h2 className="mb-3">OUR PARTNERS</h2>
                <p className="mb-4" style={{fontSize: "x-large", fontWeight: "600"}}>We collaborate with industry-leading partners to deliver cutting-edge IT solutions,
                    ensuring maximum value and innovation for our clients</p>
                <Row className="gy-4">
                    <Col xs={12} md={6} lg={3}>
                        <div className="service-box">PARTNERS 1</div>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <div className="service-box">PARTNERS 2</div>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <div className="service-box">PARTNERS 3</div>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <div className="service-box">PARTNERS 4</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default WhoweareSix
