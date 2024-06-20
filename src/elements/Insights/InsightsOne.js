import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import ScrollAnimation from "react-animate-on-scroll";
import "../../assets/css/slick.css"


function InsightsOne({ column, teamStyle }) {
    const teamData = [
        {
            image: 'team-04',
            name: 'IT Stratgies',
            designation: 'READ MORE',
        },
        {
            image: 'team-05',
            name: 'IT Stratgies',
            designation: 'READ MORE',
        },
        {
            image: 'team-06',
            name: 'IT Stratgies',
            designation: 'READ MORE',
        },
        {
            image: 'team-07',
            name: 'IT Stratgies',
            designation: 'READ MORE',
        },
    ]
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
                                        <img src={`./images/team/${data.image}.jpg`} alt="Corporate React Template" />
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
        </div>
    )
}

export default InsightsOne
