import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../../assets/css/Whoweare.css"

function Whowearefour() {
    return (
        <div>
            <Container className="text-center my-5">
                <h2 className="mb-3">OUR SERVICES</h2>
                <p className="mb-4">Comprehensive IT solutions tailored to your business needs</p>
                <Row className="gy-4">
                    <Col xs={12} md={6} lg={3}>
                        <div className="service-box">Service 1</div>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <div className="service-box">Service 2</div>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <div className="service-box">Service 3</div>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <div className="service-box">Service 4</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Whowearefour
