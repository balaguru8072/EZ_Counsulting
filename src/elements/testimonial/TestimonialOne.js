import React from 'react';
import "../../assets/css/slick.css";
import { HiArrowRight } from "react-icons/hi";

import ScrollAnimation from "react-animate-on-scroll";

const testimonialData = [
    {
        image: 'testimonial-01',
        name: 'FREELANCE CONTACTORS',
        // designation: 'Sr Product Designer',
        // location: 'CO Miego, AD, USA', 
        description: 'B2B Wholesale Manufacturing & Distribution Company',

    },
    {
        image: 'testimonial-02',
        name: 'NEW STARTUPS',
        // designation: 'App Developer',
        // location: 'Bangladesh', 
        description: 'Reporting and access to financial data - fast growing IT company',

    },
    {
        image: 'testimonial-03',
        name: 'CONSULTANTS',
        // designation: 'Accounts Manager',
        // location: 'Poland', 
        description: 'Efficiency saving - from 2 days per week to 2 days per month',
    },
]


const TestimonialOne = ({ column, teamStyle }) => {
    return (
        <div>
            <div className="row row--15">
                {testimonialData.map((data, index) => (
                    <div className={`${column}`} key={index}>
                        <ScrollAnimation
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            animateOnce={true}>
                            <div className={`rn-box-card ${teamStyle}`}>
                                <div className="inner">
                                    <figure className="thumbnail">
                                        <img src={`./images/testimonial/${data.image}.jpg`} alt="Corporate React Template" />
                                    </figure>
                                    <figcaption className="content">
                                        <p className="description">{data.description}</p>
                                        <h2 className="title">{data.name}</h2>
                                        <h6 className="subtitle theme-gradient">{data.designation}</h6>
                                    </figcaption>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                ))}
            </div>
            <div className='mt-5 mb-0' style={{ width: "auto", float: "inline-end" }}>

                <button className='banner-button'>READ MORE CASE STUDY <HiArrowRight style={{ width: '40px', fontSize: 'xx-large' }} /></button>
            </div>
        </div>
    )
}

export default TestimonialOne;
