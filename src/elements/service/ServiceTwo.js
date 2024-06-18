import React from 'react';
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        image: '/images/service/serviice-01.jpg',
        title: 'We innovate',
        description: 'We innovate systematically, Continuously and successfully. '
    },
    {
        image: '/images/service/serviice-02.jpg',
        title: 'Performance',
        description: 'Performance is about solving Problems and building business.'
    },
    {
        image: '/images/service/serviice-03.jpg',
        title: 'A full service',
        description: 'We are a full service Business solutions provider.'
    }
]
const ServiceTwo = ({textAlign, cardStyle}) => {
    return (
        <div className="row row--15 service-wrapper aligin-item-center justify-content-center">
              {ServiceList.map( (val , i) => (
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
                                    <h4 className="title mb--20"><Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
                                    <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                                    <Link className="btn-default btn-small btn-border" to="#service">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceTwo;