import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import HeaderOne from "../../common/header/HeaderOne";
import FooterOne from "../../common/footer/FooterOne";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import ServiceOne from "./ServiceOne";
import ServiceTwo from "./ServiceTwo";
import ServiceThree from "./ServiceThree";
import ServiceFour from "./ServiceFour";
import ServiceFive from "./ServiceFive";
import Separator from "../separator/Separator";
import "../../assets/css/Servicess.css"
import HeaderTopBar from '../../common/header/HeaderTopBar';

const Service = () => {
    return (
        <>

            <SEO title="Service || Doob - React Business  Template" />
            <HeaderTopBar />

            <Layout>
                <BreadcrumbOne
                    title="Navigate the complexities of your IT ecosystem with confidence. Our technical experts and technology specialists are equipped with partner certifications, industry knowledge and deep expertise to guide you along the way"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Service"
                />
                <div className="main-content">

                    {/* Start Service Area  */}
                    <div className="rn-service-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign="text-center"
                                        radiusRounded=""
                                        subtitle="What we can do for you"
                                        title="We help clients drive digital transformation."
                                        description="With us, you get access to deep expertise, broad capabilities and unmatched scale as a leading Solutions Integrator."
                                    />
                                </div>
                            </div>
                            <ServiceOne
                                serviceStyle="service__style--1 bg-color-blackest radius mt--25"
                                textAlign="text-center"
                            />
                        </div>
                    </div>
                    {/* End Service Area  */}


                    <Separator />

                    {/* Start Service Area  */}
                    {/* <div className="rn-service-area rn-section-gap ">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign="text-center"
                                        radiusRounded=""
                                        subtitle="What we can do for you"
                                        title="Services provide for you."
                                        description="There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                                    />
                                </div>
                            </div>
                            <ServiceOne
                                serviceStyle="service__style--1 bg-color-blackest radius mt--25 rbt-border"
                                textAlign="text-start"
                            />
                        </div>
                    </div> */}
                    {/* End Service Area  */}

                    {/* <Separator /> */}

                    {/* Start Service Area  */}
                    <div className="rn-service-area rn-section-gap ">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign="text-center"
                                        radiusRounded=""
                                        subtitle="What we can do for you"
                                        title="Services provide for you."
                                        description="There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                                    />
                                </div>
                            </div>
                            <ServiceTwo
                                cardStyle="card-style-1"
                                textAlign="text-start"
                            />
                        </div>
                    </div>
                    {/* End Service Area  */}

                    <Separator />

                    {/* Start Service Area  */}
                    {/* <div className="rn-service-area rn-section-gap ">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign="text-center"
                                        radiusRounded=""
                                        subtitle="What we can do for you"
                                        title="Services provide for you."
                                        description="There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                                    />
                                </div>
                            </div>
                            <ServiceThree
                                serviceStyle="service__style--2"
                                textAlign="text-center"
                            />
                        </div>
                    </div> */}
                    {/* End Service Area  */}

                    <Separator />


                    {/* Start Service Area  */}
                    <div className="rn-service-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign="text-center"
                                        radiusRounded=""
                                        subtitle="What we can do for you"
                                        title="Services provide for you."
                                        description="There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                                    />
                                </div>
                            </div>
                            <ServiceOne
                                serviceStyle="service__style--1 icon-circle-style"
                                textAlign="text-center"
                            />
                        </div>
                    </div>
                    {/* End Service Area  */}


                    <Separator />


                    {/* Start Service Area  */}
                    <div className="rn-service-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign="text-center"
                                        radiusRounded=""
                                        subtitle="What we can do for you"
                                        title="Services provide for you."
                                        description="There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                                    />
                                </div>
                            </div>
                            <ServiceFour
                                serviceStyle="service__style--1 icon-circle-style with-working-process"
                                textAlign="text-center"
                            />
                        </div>
                    </div>
                    {/* End Service Area  */}


                    <Separator />

                    {/* Start Service Area  */}
                    {/* <div className="rn-service-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign="text-center"
                                        radiusRounded=""
                                        subtitle="What we can do for you"
                                        title="Services provide for you."
                                        description="There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                                    />
                                </div>
                            </div>
                            <ServiceFive
                                serviceStyle="gallery-style"
                                textAlign="text-start"
                            />
                        </div>
                    </div> */}
                    {/* End Service Area  */}
                    <div className="consulting-container">
                        <div className="consulting-image">
                            <img src="https://doob.rainbowit.net/images/bg/bg-image-12.jpg" alt="Consulting Services" />
                        </div>
                        <div className="consulting-content" style={{padding: '19px'}}>
                            <h2>CONSULTING SERVICES</h2>
                            <p>
                                Navigate the complexities of your IT ecosystem with confidence. Our
                                technical experts and technology specialists are equipped with partner
                                certifications, industry knowledge and deep expertise to guide you
                                along the way.
                            </p>
                            <div className='d-flex justify-content-center'>
                            <button className="explore-button">Explore consulting services</button>
                            </div>
                        </div>
                    </div>

                </div>

            </Layout>

        </>
    )
}

export default Service;
