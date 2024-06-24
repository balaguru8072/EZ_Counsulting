import React from 'react';
import { HiArrowRight } from "react-icons/hi";
import VideoTwo from '../video/VideoTwo';
import { FiCheck } from "react-icons/fi";
import AboutFourImage from "../../assets/images/home page/about  ez.jpg";


const PopupData = [
    {
        id: "01",
        image: AboutFourImage,
        popupLink: [
            'https://www.youtube.com/watch?v=ctsT5Y-InqE&ab_channel=Rainbow-Themes',
        ],
    }
]

const AboutFour = ({ image }) => {
    return (
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
                                <img src={item.image} alt={`Image for ${item.id}`} style={{ height: "22.313rem !important" }} />
                            </div>
                        ))}
                    </div>
                    <div className="col-lg-6 mt_md--40 mt_sm--40">
                        <div className="content">
                            <div className="inner">
                                <h3 className="title" style={{ color: "white" }}>About <br /> <strong>EZ Consulting</strong> Services</h3>
                                <ul className="feature-list">
                                    <li>
                                        <div className="icons">
                                            <FiCheck />
                                        </div>
                                        <div className="title-wrapper">
                                            <h4 className="title" style={{marginBottom: "20px"}}>We are qualified and experience
                                                consultants and Business advisors with many
                                                years experience from plan optimization to
                                                revenue strategy</h4>
                                            {/* <p className="text" style={{display: "hide"}}>Lorem ipsum dolor consectetur adipiscing do eiusmod tempor incididunt labore.</p> */}

                                        </div>
                                    </li>
                                    <li>
                                        <div className="icons">
                                            <FiCheck />
                                        </div>
                                        <div className="title-wrapper">
                                            <h4 className="title">have helped a wide
                                                variety of clients in meeting their aims of
                                                maximising profits, retaining and building on
                                                the rewards of their hard work</h4>
                                            {/* <p className="text">Lorem ipsum dolor consectetur adipiscing do eiusmod tempor incididunt labore.</p> */}
                                        </div>
                                    </li>
                                </ul>
                                <div className="about-btn mt--30">
                                    <a className="btn-default" href="/">READ MORE <HiArrowRight style={{ width: '40px', fontSize: 'xx-large' }} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutFour
