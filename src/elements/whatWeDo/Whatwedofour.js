import React from 'react';
import "../../assets/css/slick.css"
import InnovateImage from "../../assets/images/EZ Consulting What we do Page Images/Our area expxertise.png";
import PerformanceImage from "../../assets/images/EZ Consulting What we do Page Images/Our Area Expertise (3).png";
import FullserviceImage from "../../assets/images/EZ Consulting What we do Page Images/Our Area Expertise_resize.png";
import Digital_img from "../../assets/images/EZ Consulting What we do Page Images/our area expertise (6).png";
import Intelligent_img from "../../assets/images/EZ Consulting What we do Page Images/our area expertise (5).png";
import Modern_img from "../../assets/images/EZ Consulting What we do Page Images/our area expertise (4).png";
import Moderninf_img from "../../assets/images/EZ Consulting What we do Page Images/Our Area Expertise (2).png"
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from "react-router-dom";
import { FiActivity, FiCast, FiMap } from "react-icons/fi";


function Whatwedofour({ textAlign, cardStyle }) {
    const ServiceList = [
        {
            image: InnovateImage,
            title: 'Cloud',
            description: 'Build a private, public, hybrid or multicloud ecosystem that accelerates innovation using a performance- and cost-driven framework.'
        },
        {
            image: PerformanceImage,
            title: 'Cybersecurity',
            description: 'Develop a comprehensive security strategy that protects your network, end users and data to reduce organizational risk.'
        },
        {
            image: FullserviceImage,
            title: 'Data and AI',
            description: 'Leverage generative AI, data modeling, business analysis and more to navigate hurdles and improve productivity.'
        },
        {
            image: Digital_img,
            title: 'Digital Workplace',
            description: 'Give your employees modern work experience with top-tier support, tools that fuel productivity and end to end IT asset management.'
        },
        {
            image: Intelligent_img,
            title: 'Intelligent Edge',
            description: 'Leverage generative AI, data modeling, business analysis and more to navigate hurdles and improve productivity.'
        },
        {
            image: Modern_img,
            title: 'Modern Apps',
            description: 'Devleop new tools to drive business value transform legacy apllication and create a culture that embraces agile approches '
        },
        {
            image: Moderninf_img,
            title: 'Modern Infrastructure',
            description: 'Architect, modernize and manage your entire IT infrastructure to support business transformation goals.'
        }
    ]
    return (
        <div>
            <div>
                <div className="row row--15 service-wrapper aligin-item-center justify-content-center">
                    {ServiceList.map((val, i) => (
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                            <ScrollAnimation
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                <div className={`card-box ${cardStyle} ${textAlign}`}>
                                    <div className="inner">
                                        <div className="image">
                                            <Link to="#service">
                                                <img src={`${val.image}`} alt="card Images" />
                                            </Link>
                                        </div>
                                        <div className="content">
                                            <h4 className="title mb--20"><Link to="#service" dangerouslySetInnerHTML={{ __html: val.title }}></Link></h4>
                                            <p className={`description b1 color-gray margin-bottom-48 margin-bottom-27}`} dangerouslySetInnerHTML={{ __html: val.description }}></p>
                                            <Link className="btn-default btn-small btn-border" to="#service">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    ))}
                </div>
                {/* <div className='mt-5 mb-0' style={{ width: "auto", float: "inline-end" }}>
                    <button className='banner-button'>SEE ALL OUT SERVICE</button>
                </div> */}
            </div>
        </div>
    )
}

export default Whatwedofour
