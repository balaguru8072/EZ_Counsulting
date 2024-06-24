import React from 'react'
import SEO from "../common/SEO";
import HeaderOne from '../common/header/HeaderOne';
import HeaderTopBar from '../common/header/HeaderTopBar';
import AboutFour from '../elements/about/AboutFour';
import AdvanceTabTwo from '../elements/advancetab/AdvanceTabTwo';
import CounterUpFour from '../elements/counterup/CounterUpFour';
import CalltoActionFive from '../elements/calltoaction/CalltoActionFive';
import TeamFour from '../elements/team/TeamFour';
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import Separator from "../elements/separator/Separator";
import FooterOne from '../common/footer/FooterOne';
import Copyright from '../common/footer/Copyright';
import { HiArrowRight } from "react-icons/hi";
import AboutFourImage from "../assets/images/home page/abstract-business-people-city-buildings.jpg";
import "../assets/css/slick.css"
import TeamThree from '../elements/team/TeamThree';
// import ServiceOne from '../elements/service/ServiceOne';
import ServiceTwo from '../elements/service/ServiceTwo';
import ThinkAbout from '../elements/about/Thinkabout';
import TestimonialOne from '../elements/testimonial/TestimonialOne';
import WeareHelp from '../elements/about/WeareHelp';
import ContactOne from '../elements/contact/ContactOne';
import images_hoems from "../assets/images/home page/10.png"
import stillunsure from "../assets/images/home page/11.png"
import Testimonialfour from '../elements/testimonial/Testimonialfour';
import FooterTwo from '../common/footer/FooterTwo';


const Consulting = () => {
    const images = AboutFourImage;
    const images_curosel = images_hoems;
    const still_unsure_img = stillunsure
    return (
        <>
            <SEO title="EZ Consulting" />
            <main className="page-wrapper">
                <HeaderTopBar />
                <HeaderOne btnStyle="btn-small" HeaderSTyle="header-transparent" />

                {/* Start Slider area  */}
                <div className="slider-area slider-style-2 variation-2  height-850 bg_image" style={{ backgroundImage: `url(${images})` }}>
                    <div className="container" style={{ marginBottom: "236px !important" }}>
                        <div className="row">
                            <div className="col-lg-8 col-xl-6">
                                <div className="inner text-start">
                                    <h3 className="title display-one">Grow Your Business with
                                        data-driven strategies</h3>
                                    <p className='text-white'> We Help businesses of all sizes achieve sustainable
                                        growth through stratgies consulting and
                                        implementation</p>
                                    {/* <h6 className="tag-title">SOLUTION FOR YOUR BUSINESS</h6> */}
                                    <button className='btn-default'>GET START <HiArrowRight style={{ width: '40px', fontSize: 'xx-large' }} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider area  */}
                <Separator />

                <AboutFour />

                {/* Start Elements Area  */}
                {/* <div className="rwt-counterup-area rn-section-gapBottom mt_dec--30">
                    <div className="container">
                        <CounterUpFour column="col-lg-3 col-md-6 col-sm-6 col-12" counterStyle="counter-style-4" textALign="text-center" />
                    </div>
                </div> */}
                {/* End Elements Area  */}


                <Separator />

                {/* Start Elements Area  */}
                {/* <div className="rwt-advance-tab-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--40">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="Consulting Report"
                                    title="Report Our Consulting Business."
                                    description=""
                                />
                            </div>
                        </div>
                        <AdvanceTabTwo />
                    </div>
                </div> */}
                {/* End Elements Area  */}


                <Separator />

                {/* Start Elements Area  */}
                <div className="rwt-team-area rn-section-gap">
                    <div className="wrapper plr--65 plr_sm--15">
                        <div className="row mb--20">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="Our Experts."
                                    title="OUR CLIENT VIDEO"
                                    description=""
                                />
                            </div>
                        </div>
                        <TeamFour column="col-lg-6 col-xl-3 col-md-6 col-12 mt--30" teamStyle="team-style-three" />
                    </div>
                </div>
                {/* End Elements Area  */}
                <Separator />


                {/* Start Elements Area  */}
                {/* <div className="rwt-callto-action-area rn-section-gapBottom">
                    <div className="wrapper">
                        <CalltoActionFive />
                    </div>
                </div> */}
                {/* End Elements Area  */}
                <div className="rwt-team-area rn-section-gap">
                    <div className="wrapper plr--65 plr_sm--15">
                        <div className="row mb--20">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="CLIENT TESTIMONIALS"
                                    title="CLIENT TESTIMONIALS"
                                    description=""
                                />
                            </div>
                        </div>
                        <Testimonialfour teamStyle=""/>
                    </div>
                </div>
                <Separator />
                <div className="rwt-team-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mb--15">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="Our Experts."
                                    title="What we Do"
                                    description=""
                                />
                            </div>
                        </div>
                        <TeamThree column="col-lg-3 col-md-6 col-12 mt--30" teamStyle="team-style-two" />
                    </div>
                </div>
                <Separator />
                <div className="rn-service-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="OUR CASE STUDY"
                                    title="OUR CASE STUDY"
                                    description=""
                                />
                            </div>
                        </div>
                        <ServiceTwo
                            cardStyle="card-style-1"
                            // textAlign="text-start"
                            serviceStyle="service__style--1 icon-circle-style"
                            textAlign="text-center"
                        />
                    </div>
                </div>

                <Separator />
                <div className="containerStill" style={{ backgroundImage: `url(${still_unsure_img})`, backgroundColor: "#8000804d", backgroundBlendMode: "overlay", opacity: "1" }}>
                    <div className="content">
                        <h1>Still Unsure ?</h1>
                        <p>
                            Request a call Back Book a meeting Ask for a proposal Have a Quick Questions ?
                        </p>
                        <button className="btn-default">ASK A QUESTIONS</button>
                    </div>
                    <div className="footer">
                        <hr className="line" style={{ width: "38px !important" }} />
                        <span className="footer-text">ASSOCIATIONS</span>
                        <hr className="line" style={{ width: "38px !important" }} />
                    </div>
                </div>
                <Separator />
                <ThinkAbout />
                <Separator />
                <div className="rwt-testimonial-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mb--10">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="OUR BLOGS"
                                    title="OUR BLOGS"
                                />
                            </div>
                        </div>
                        <TestimonialOne column="col-lg-4 col-md-6 col-12 mt--30" teamStyle="card-style-default testimonial-style-one" />
                    </div>
                </div>
                <Separator />
                <div className="rwt-testimonial-area " style={{padding: "27px 0"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mb--10">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="Help"
                                    title="We’re Here To Help."
                                />
                            </div>
                        </div>
                        <WeareHelp />
                    </div>
                </div>
                <Separator />
                <div className="rwt-testimonial-area rn-section-gap" style={{padding: "29px 0"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mb--10">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="GET IN TOUCH"
                                    title="We could make something great together"
                                />
                            </div>
                        </div>
                        <ContactOne />
                    </div>
                </div>
                <FooterTwo />
                <Copyright />
            </main>

        </>
    )
}

export default Consulting
