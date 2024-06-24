import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import VideoTwo from '../video/VideoTwo';
import consulting_img from "../../assets/images/home page/5.png";
import newstartup_img from "../../assets/images/home page/9.png";
import freelence_img from "../../assets/images/home page/8.png";
import dentists_img from "../../assets/images/home page/7.png"

const teamData = [
    {
        image: consulting_img,
        name: 'CONSULTANTS',
        // designation: 'Sr Product Designer',
        // location: 'CO Miego, AD, USA', 
        // description: 'Yes, I am a product designer. I have a passion for product design.',
        // socialNetwork: [
        //     {
        //         icon: <FiFacebook />,
        //         url: '#'
        //     },
        //     {
        //         icon: <FiTwitter />,
        //         url: '#'
        //     },
        //     {
        //         icon: <FiInstagram />,
        //         url: '#'
        //     },
        // ]

    },
    {
        image: newstartup_img,
        name: 'NEW START UP',
        // designation: 'Manager',
        // location: 'Bangladesh', 
        // description: 'Yes, I am a product designer. I have a passion for product design.',
        // socialNetwork: [
        //     {
        //         icon: <FiFacebook />,
        //         url: '#'
        //     },
        //     {
        //         icon: <FiTwitter />,
        //         url: '#'
        //     },
        //     {
        //         icon: <FiLinkedin />,
        //         url: '#'
        //     },]

    },
    {
        image: freelence_img,
        name: 'FREELANCE CONTRACTORS ',
        // designation: 'Software Developer',
        // location: 'Poland', 
        // description: 'Yes, I am a product designer. I have a passion for product design.',
        // socialNetwork: [
        //     {
        //         icon: <FiFacebook />,
        //         url: '#'
        //     },
        //     {
        //         icon: <FiTwitter />,
        //         url: '#'
        //     },
        //     {
        //         icon: <FiInstagram />,
        //         url: '#'
        //     },
        // ]

    },
    {
        image: dentists_img,
        name: 'DENTISTS & PHARMACISTS',
        // designation: 'Accounts Manager',
        // location: 'Poland', 
        // description: 'Yes, I am a product designer. I have a passion for product design.',
        // socialNetwork: [
        //     {
        //         icon: <FiFacebook />,
        //         url: '#'
        //     },
        //     {
        //         icon: <FiTwitter />,
        //         url: '#'
        //     },
        //     {
        //         icon: <FiInstagram />,
        //         url: '#'
        //     },
        // ]

    },
]


const TeamFour = ({ column, teamStyle }) => {
    return (
        <div className="row row--15">
            {teamData.map((data, index) => (
                <div className={`${column}`} key={index} style={{cursor: "pointer"}}>
                    <ScrollAnimation
                        animateIn="fadeInUp"
                        animateOut="fadeInOut"
                        animateOnce={true}>
                        <div className={`rn-team ${teamStyle}`}>
                            <div className="inner">
                                <figure className="thumbnail video-btn">
                                    <img src={data.image} className='video-btn' alt="Corporate React Template" />
                                    
                                        {/* <div className="video-btn" key={data.id}>
                                            <VideoTwo imagename={`${data.image}`} galleryItem={data} />
                                        </div> */}
                                </figure>
                                <figcaption className="content">
                                    <div className="team-info">
                                        <h2 className="title">{data.name}</h2>
                                        <h6 className="subtitle theme-gradient">{data.designation}</h6>
                                        <div className="team-form">
                                            <span className="location">{data.location}</span>
                                        </div>
                                    </div>
                                </figcaption>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default TeamFour;
