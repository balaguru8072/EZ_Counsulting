import React from 'react';
import { HiArrowRight } from "react-icons/hi";
import VideoTwo from '../video/VideoTwo';
import { FiCheck } from "react-icons/fi";
import AboutFourImage from "../../assets/images/home page/10.png";


const PopupData = [
    {
        id: "01",
        image: AboutFourImage,
        popupLink: [
            'https://www.youtube.com/watch?v=ctsT5Y-InqE&ab_channel=Rainbow-Themes',
        ],
    }
]

const ThinkAbout = ({ image }) => {
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
                                <img src={item.image} alt={`Image for ${item.id}`} style={{width: "431px !important", height: "329px !important"}}/>
                            </div>
                        ))}
                    </div>
                    <div className="col-lg-6 mt_md--40 mt_sm--40">
                        <div className="content">
                            <div className="inner">
                                <h3 className="title" style={{color: "#059DFF", fontWeight: "900", marginBottom: "0px"}}>Things you
                                    didnt know !</h3>
                                <ul className="feature-list">
                                    <li>
                                        {/* <div className="icon">
                                            <FiCheck />
                                        </div> */}
                                        <div className="title-wrapper" style={{width: "100%"}}>
                                            {/* <h4 className="title">A good traveler has no fixed plans</h4> */}
                                            <p className="text">Interesting facts and stats
                                                about Ez Consluting</p>
                                        </div>
                                    </li>
                                    {/* <li>
                                        <div className="icon">
                                            <FiCheck />
                                        </div>
                                        <div className="title-wrapper">
                                            <h4 className="title">A good traveler has no fixed plans</h4>
                                            <p className="text">Lorem ipsum dolor consectetur adipiscing do eiusmod tempor incididunt labore.</p>
                                        </div>
                                    </li> */}
                                </ul>
                                <div className="about-btn mt--30">
                                    <a className="btn-default" href="/about-us">LEARN MORE<HiArrowRight style={{ width: '40px', fontSize: 'xx-large' }} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThinkAbout
