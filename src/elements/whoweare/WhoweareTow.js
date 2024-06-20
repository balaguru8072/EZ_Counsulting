import React from 'react';
// import { HiArrowRight } from "react-icons/hi";
// import VideoTwo from '../video/VideoTwo';
// import { FiCheck } from "react-icons/fi";
import AboutFourImage from "../../assets/images/Services/about_growth.jpg";



const PopupData = [
    {
        id: "01",
        image: AboutFourImage,
        popupLink: [
            'https://www.youtube.com/watch?v=ctsT5Y-InqE&ab_channel=Rainbow-Themes',
        ],
    }
]

const WhoweareTwo = ({ image }) => {
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
                                <img src={item.image} alt={`Image for ${item.id}`} style={{ borderTopLeftRadius: "100px" }} />
                            </div>
                        ))}
                    </div>
                    <div className="col-lg-6 mt_md--40 mt_sm--40">
                        <div className="content">
                            <div className="inner">
                                <h3 className="title" style={{ textAlign: "center" }}>OUR VISSION</h3>
                                <ul className="feature-list">
                                    <li>
                                        <div className="title-wrapper">
                                            {/* <h4 className="title">WHO WE ARE</h4> */}
                                            <p className="text" >our vision is to be the forefront of technological
                                                advancement, shaping the future of industries
                                                worldwide. We aspire to create a seamless digital
                                                ecosystem where businesses thrive through
                                                innovation and adaptability.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhoweareTwo
