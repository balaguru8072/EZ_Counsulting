import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import ScrollAnimation from "react-animate-on-scroll";
import "../../assets/css/slick.css";
import { Link } from 'react-router-dom/cjs/react-router-dom';
import story1 from "../../assets/images/EZ Consulting What we do Page Images/case study (3).png";
import story2 from "../../assets/images/EZ Consulting What we do Page Images/case study.png";
import story3 from "../../assets/images/EZ Consulting What we do Page Images/Our service (2).png";
import story4 from "../../assets/images/EZ Consulting What we do Page Images/Our Service.png"




function InsightsOne({ column, teamStyle }) {
    const teamData = [
        {
            image: story1,
            name: 'ADAPTIVE CONSULTING',
            designation: 'READ MORE',
        },
        {
            image: story2,
            name: 'DATA SERVICES',
            designation: 'READ MORE',
        },
        {
            image: story3,
            name: 'CONSULTING SERVICES',
            designation: 'READ MORE',
        },
        {
            image: story2,
            name: 'INTEGRATION CONSULTANT',
            designation: 'READ MORE',
        },
    ]
    return (
        <div>
            <div className="row row--30">
                {/* <div className='d-flex justify-content-center'>

                    <Link className="btn-default" to="/contact">CONTACT US</Link>
                </div> */}
                {teamData.map((data, index) => (
                    <div className={`${column}`} key={index}>
                        <ScrollAnimation
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            animateOnce={true}>

                            <div className={`rn-team ${teamStyle}`}>
                                <div className="inner">

                                    <figure className="thumbnail">
                                        <img src={data.image} alt="Corporate React Template" />
                                    </figure>
                                    <figcaption className="content">
                                        <h2 className="title" style={{fontSize: "17px"}}>{data.name}</h2>
                                        <h6 className="subtitle theme-gradient">{data.designation}</h6>
                                    </figcaption>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InsightsOne
