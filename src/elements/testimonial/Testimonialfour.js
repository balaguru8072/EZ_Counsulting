import React from 'react';
import Slider from "react-slick";
import { slickDot } from "../../utils/script";
import images_hoems from "../../assets/images/home page/10.png"
import stillunsure from "../../assets/images/home page/11.png"
import coroselimges from "../../assets/images/home page/7.png"

function Testimonialfour({teamStyle}) {

    const coroselimg = images_hoems;
    const still_unsure_img = stillunsure;
    const coroseal = coroselimges;

    const TestimonialData = [
        {
            // form: "Poland",
            description: "provide specialist accounting services to freelance contractors, medical professionals and SMEs offering a fresh perspective to your accounts",
            name: "EZ CONSULTING SERVICE",
            // subtitle: "App Developer",
            image: coroselimg
        },
        {
            form: "EZ CONSULTING SERVICE",
            description: "We are experienced Chartered Certified Accountants and business advisors, dedicated to helping clients maximize profits and build on their success.",
            name: "John Due",
            // subtitle: "App Developer",
            image: still_unsure_img
        },
        {
            // form: "EZ CONSULTING SERVICE",
            description: "we pride ourselves on the quality of our service. If at any time you are unhappy with the service provided its simple... You won't pay for it",
            name: "EZ CONSULTING SERVICE",
            // subtitle: "App Developer",
            image: coroseal
        },
    ]

    return (
        <div>
            <div className="row">
                <div className="col-lg-12">
                    <Slider className="slick-space-gutter--15 rn-slick-dot rn-slick-arrow mb--60" {...slickDot}>
                        {TestimonialData.map((data, index) => (
                            <div key={index} className={`testimonial-style-two ${teamStyle}`}>
                                <div className="row align-items-center row--20">
                                    <div className="order-2 order-md-1 col-lg-6 col-md-8 offset-lg-1">
                                        <div className="content mt_sm--40">
                                            <span className="form">{data.form}</span>
                                            <p className="description">{data.description}</p>
                                            <div className="client-info">
                                                <h4 className="title">{data.name}</h4>
                                                <h6 className="subtitle">{data.subtitle}</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-1 order-md-2 col-lg-4 col-md-4">
                                        <div className="thumbnail">
                                            <img className="w-100" src={data.image} alt="Corporate React Template" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonialfour
