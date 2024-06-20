import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import "../../assets/css/slick.css"
import images1 from "../../assets/images/home page/3.png";
import images2 from "../../assets/images/home page/4.png";
import images3 from "../../assets/images/home page/5.png";
import images4 from "../../assets/images/home page/6.png";

const teamData = [
    {
        image: images1,
        name: 'IT Stratgies',
        designation: 'LEARN MORE',
    },
    {
        image: images2,
        name: 'IT Stratgies',
        designation: 'LEARN MORE',
    },
    {
        image: images3,
        name: 'IT Stratgies',
        designation: 'LEARN MORE',
    },
    {
        image: images4,
        name: 'IT Stratgies',
        designation: 'LEARN MORE',
    },
]


const TeamThree = ({ column, teamStyle }) => {
    return (
        <div>
            <div className="row row--30">
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
                                        <h2 className="title">{data.name}</h2>
                                        <h6 className="subtitle theme-gradient">{data.designation}</h6>
                                    </figcaption>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                ))}
            </div>
            <div className='mt-5 mb-0' style={{width: "auto", float: "inline-end"}}>

                <Link className="btn-default btn-border" to="/WhatwedoMain">SEE ALL OUT SERVICE</Link>
            </div>
        </div>
    )
}

export default TeamThree;
