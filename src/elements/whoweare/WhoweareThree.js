import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faPlane, faStore, faCar } from '@fortawesome/free-solid-svg-icons';
import "../../assets/css/Whoweare.css";
import Sales_img from "../../assets/images/Ez consulting who we are images/sales.png";
import Finance_img from "../../assets/images/EZ Consulting who we are Icons/Finance.png";
import SupplyChin_img from "../../assets/images/Ez consulting who we are images/supply chain.png";
import HR_img from "../../assets/images/Ez consulting who we are images/hr.png"
import Separator from '../separator/Separator';

function WhoweareThree() {
    return (
        <div className='container'>
            <div className='mb-5'>
                <h2 className='text-center theme-gradient'>OUR PLEDGE</h2>
                <p className='text-justify font-weight-bold text-white'>pledge to leverage our expertise to transform businesses with innovative IT
                    solutions, committed to exceeding client expectations and driving success.</p>
            </div>
            <Separator className="mt-5" />

            <div className=''>
                <p className='text-left text-white' style={{ fontSize: "xxx-large", fontWeight: "900" }}>OUR EXPERTISE</p>
            </div>
            <Container className="text-center my-5">
                <h2 className="mb-4 theme-gradient">INDUSTRY EXPERIENCE</h2>
                <Row className="gy-4">
                    <Col xs={12} md={6} lg={3}>
                        <div className="p-3 border rounded">
                            <FontAwesomeIcon icon={faCoins} size="3x" className="mb-3" />
                            <h5>FINANCE</h5>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <div className="p-3 border rounded">
                            <FontAwesomeIcon icon={faPlane} size="3x" className="mb-3" />
                            <h5>TRAVEL</h5>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <div className="p-3 border rounded">
                            <FontAwesomeIcon icon={faStore} size="3x" className="mb-3" />
                            <h5>RETAIL AND WHOLESALE</h5>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <div className="p-3 border rounded">
                            <FontAwesomeIcon icon={faCar} size="3x" className="mb-3" />
                            <h5>AUTOMOTIVE</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="my-5">
                <h2 className="text-center mt-5 mb-5 theme-gradient">FUNCTIONAL EXPERTISE</h2>
                <Row className="text-center">
                    <Col xs={12} md={3} className="functional-col" style={{ height: "60vh" }}>
                        <div className="icon-container" style={{ marginTop: "105px", width: "53%", boxShadow: "rgb(235, 70, 128) 0px 5px 17px" }}>
                            <img src={Sales_img} alt="Sales" style={{ padding: "19px" }} />
                        </div>
                        <h3 className='mt-5 theme-gradient'>SALES</h3>
                    </Col>
                    <Col xs={12} md={3} className="functional-col" style={{ height: "60vh" }}>
                        <div className="icon-container" style={{ marginTop: "105px", width: "53%", boxShadow: "rgb(235, 70, 128) 0px 5px 17px" }}>
                            <img src={Finance_img} alt="Finance" style={{ padding: "22px" }} />
                        </div>
                        <h3 className='mt-5 theme-gradient'>FINANCE</h3>
                    </Col>
                    <Col xs={12} md={3} className="functional-col" style={{ height: "60vh" }}>
                        <div className="icon-container" style={{ marginTop: "105px", width: "53%", boxShadow: "rgb(235, 70, 128) 0px 5px 17px" }}>
                            <img src={SupplyChin_img} alt="Supply Chain" style={{ padding: "16px" }} />
                        </div>
                        <h3 className='mt-5 theme-gradient'>SUPPLY CHAIN</h3>
                    </Col>
                    <Col xs={12} md={3} className="functional-col" style={{ height: "60vh" }}>
                        <div className="icon-container" style={{ marginTop: "105px", width: "53%", boxShadow: "rgb(235, 70, 128) 0px 5px 17px" }}>
                            <img src={HR_img} alt="HR" style={{ padding: "16px" }} />
                        </div>
                        <h3 className='mt-5 theme-gradient'>HR</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default WhoweareThree
