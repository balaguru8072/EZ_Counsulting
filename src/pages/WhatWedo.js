import React from 'react';
import { HiArrowRight } from "react-icons/hi";
// import VideoTwo from '../video/VideoTwo';
import { FiCheck } from "react-icons/fi";
import AboutFourImage from "../assets/images/Ez consulting who we are images/who we are.jpeg";


const PopupData = [
    {
        id: "01",
        image: AboutFourImage,
        popupLink: [
            'https://www.youtube.com/watch?v=ctsT5Y-InqE&ab_channel=Rainbow-Themes',
        ],
    }
]

const WhatWedo = ({ image }) => {

    return (
        <>
        
        <div className="about-area about-style-4 rn-section-gap">
            <div className="container">
                <div className="row row--40 align-items-center">
                    <div className="col-lg-6">
                        {/* {PopupData.map((item) => (
                            <div className="video-btn" key={item.id}>
                                <VideoTwo imagename={`${image}`} galleryItem={item} />
                            </div>
                        ))} */}
                        {PopupData.map((item) => (
                            <div className="image-container" key={item.id}>
                                <img src={item.image} alt={`Image for ${item.id}`} style={{borderRadius: "16px"}}/>
                            </div>
                        ))}
                    </div>
                    <div className="col-lg-6 mt_md--40 mt_sm--40">
                        <div className="content">
                            <div className="inner">
                                <h3 className="title theme-gradient" style={{ textAlign: "center" , color: "white"}}>WHO WE ARE</h3>
                                <ul className="feature-list">
                                    <li>
                                        <div className="title-wrapper">
                                            {/* <h4 className="title">WHO WE ARE</h4> */}
                                            <p className="text text-white" style={{ textAlign: "center" }}>We are EZ Consulting, leaders in IT consulting,
                                                driven by innovation and expertise. With a
                                                focus on client-centric solutions, we navigate
                                                the complexities of technology to drive
                                                growth. Our seasoned professionals specialize
                                                in cloud computing, cybersecurity, and data
                                                analytics. We forge partnerships with
                                                organizations, empowering them to thrive in
                                                the digital age. At EZ Consulting, we don't just
                                                offer services; we provide tailored strategies
                                                for success. Join us on the journey of
                                                transformation</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default WhatWedo
