import React from 'react';
import { Button } from 'react-bootstrap';
import AboutFourImage from "../../assets/images/EZ Consulting What we do Page Images/Our service (2).png";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


function WhatwedoFive() {
    const PopupData = [
        {
            id: "01",
            image: AboutFourImage,
            popupLink: [
                'https://www.youtube.com/watch?v=ctsT5Y-InqE&ab_channel=Rainbow-Themes',
            ],
        }
    ]

    return (
        <div>
            <main className='page-wrapper'>
                {/* <HeaderTopBar />
            <HeaderOne btnStyle="btn-small" HeaderSTyle="header-transparent" /> */}
                <div className="about-area about-style-4 rn-section-gap">
                    <div className="container">
                        <div className="row row--40 align-items-center">
                            <div className="col-lg-6 mt_md--40 mt_sm--40">
                                <div className="content">
                                    <div className="inner">
                                        <h3 className="title theme-gradient" style={{paddingLeft: "13px"}}>OUR SERVICE</h3>
                                        <ul className="feature-list">
                                            <li style={{paddingRight: "100px"}}>
                                                <div className="title-wrapper">
                                                    <h4 className="title">Guidance and support from
                                                        true industry experts for the
                                                        road ahead on your IT
                                                        transformation journey</h4>
                                                    <p className="text" >Achieve your ambitious IT goals with EZ Consulting.
                                                    </p>
                                                    <Link variant="warning" className="btn-default" to="/consulting/contact" style={{ fontSize: "medium", color: "white", fontWeight: "900" }}>Get a Customized solution</Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                {PopupData.map((item) => (
                                    <div className="image-container" key={item.id}>
                                        <img src={item.image} alt={`Image for ${item.id}`} style={{borderRadius: "16px"}}/>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default WhatwedoFive
