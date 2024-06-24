import React from 'react';
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import "../../assets/css/slick.css"
import InnovateImage from "../../assets/images/home page/case studies 1.jpg";
import PerformanceImage from "../../assets/images/home page/case studies 2.jpg";
import FullserviceImage from "../../assets/images/home page/case studies 3.jpg";


// const PerformanceImage = "../../assets/images/Services/image_service_resize.png"

const ServiceList = [
    {
        image: InnovateImage,
        title: '',
        description: 'B2B Wholesale Manufacturing & Distribution Company '
    },
    {
        image: PerformanceImage,
        title: '',
        description: 'Reporting and access to financial data - fast growing IT company.'
    },
    {
        image: FullserviceImage,
        title: '',
        description: 'Efficiency saving - from 2 days per week to 2 days per month'
    }
]
const ServiceTwo = ({ textAlign, cardStyle }) => {
    return (
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
                                        <p className={`description b1 color-gray `} dangerouslySetInnerHTML={{ __html: val.description }}></p>
                                        <Link className="btn-default" to="/consulting/WhoweareMain">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                ))}
            </div>
            <div className='mt-5 mb-0' style={{width: "auto", float: "inline-end"}}>

                <button className='btn-default'>SEE ALL OUT SERVICE</button>
            </div>
        </div>
    )
}
export default ServiceTwo;