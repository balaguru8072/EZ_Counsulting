import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faPlane, faStore, faCar } from '@fortawesome/free-solid-svg-icons';
import "../../assets/css/Whoweare.css";
import Sales_img from "../../assets/images/EZ Consulting who we are Icons/sales.png";
import Finance_img from "../../assets/images/EZ Consulting who we are Icons/Finance.png";
import SupplyChin_img from "../../assets/images/EZ Consulting who we are Icons/Supply chain.png";
import HR_img from "../../assets/images/EZ Consulting who we are Icons/HR.png"

function WhoweareThree() {
    return (
        <div className='container'>
            <div >
                <h2 className='text-center'>OUR PLEDGE</h2>
                <p className='text-justify font-weight-bold'>pledge to leverage our expertise to transform businesses with innovative IT
                    solutions, committed to exceeding client expectations and driving success.</p>
            </div>
            <div className='bg-warning'>
                <p className='text-left text-white' style={{ fontSize: "xxx-large", fontWeight: "900" }}>OUR EXPERTISE</p>
            </div>
            <Container className="text-center my-5">
                <h2 className="mb-4">INDUSTRY EXPERIENCE</h2>
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
                <h2 className="text-center mb-5">FUNCTIONAL EXPERTISE</h2>
                <Row className="text-center">
                    <Col xs={12} md={3} className="functional-col" style={{ backgroundColor: "rgb(255, 244, 209)", borderTopLeftRadius: "378px", borderTopRightRadius: "366px", height: "100vh" }}>
                        <div className="icon-container" style={{ marginTop: "105px", width: "60%" }}>
                            <img src={Sales_img} alt="Sales" style={{padding: "19px"}}/>
                        </div>
                        <h3>SALES</h3>
                    </Col>
                    <Col xs={12} md={3} className="functional-col" style={{ backgroundColor: "#D7D98A", borderTopLeftRadius: "378px", borderTopRightRadius: "366px", height: "100vh" }}>
                        <div className="icon-container" style={{ marginTop: "105px", width: "60%" }}>
                            <img src={Finance_img} alt="Finance" style={{padding: "22px"}}/>
                        </div>
                        <h3>FINANCE</h3>
                    </Col>
                    <Col xs={12} md={3} className="functional-col" style={{ backgroundColor: "#D3EDEA", borderTopLeftRadius: "378px", borderTopRightRadius: "366px", height: "100vh" }}>
                        <div className="icon-container" style={{ marginTop: "105px", width: "60%" }}>
                            <img src={SupplyChin_img} alt="Supply Chain" style={{padding: "16px"}}/>
                        </div>
                        <h3>SUPPLY CHAIN</h3>
                    </Col>
                    <Col xs={12} md={3} className="functional-col" style={{ backgroundColor: "#FFFAC8", borderTopLeftRadius: "378px", borderTopRightRadius: "366px", height: "100vh" }}>
                        <div className="icon-container" style={{ marginTop: "105px", width: "60%" }}>
                            <img src={HR_img} alt="HR" style={{padding: "16px"}}/>
                        </div>
                        <h3>HR</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default WhoweareThree
