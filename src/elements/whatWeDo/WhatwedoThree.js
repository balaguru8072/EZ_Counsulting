import React from 'react';
import AboutFourImage from "../../assets/images/EZ Consulting What we do Page Images/Our Expertise.png";
import { Button } from 'react-bootstrap';


function WhatwedoThree() {
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
        <main className='page-wrapper'>
            {/* <HeaderTopBar />
            <HeaderOne btnStyle="btn-small" HeaderSTyle="header-transparent" /> */}
            <div className="about-area about-style-4 pb-5" style={{padding: "38px 0 !important"}}>
                <div className="container">
                    <div className="row row--40 align-items-center">
                        <div className="col-lg-6 mt_md--40 mt_sm--40">
                            <div className="content">
                                <div className="inner">
                                    <h3 className="title theme-gradient" >AREAS OF EXPERTISE</h3>
                                    <ul className="feature-list">
                                        <li>
                                            <div className="title-wrapper">
                                                <h4 className="title">Innovative, secure and
                                                    future-proof solutions to
                                                    address your organization’s
                                                    top challenges head on</h4>
                                                <p className="text text-white" >Our IT experts are ready to take your business to the
                                                    next level, are you?</p>
                                                <Button variant="warning" className="btn-default" style={{ fontSize: "medium", color: "white", fontWeight: "900" }}>Hear from out team</Button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {PopupData.map((item) => (
                                <div className="image-container" key={item.id}>
                                    <img src={item.image} alt={`Image for ${item.id}`} style={{height: "384px", borderRadius: "21px"}}/>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}

export default WhatwedoThree
