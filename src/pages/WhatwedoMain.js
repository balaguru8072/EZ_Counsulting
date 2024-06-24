import React from 'react';
import "../assets/css/Whatwedo.css";
import { Container, Button } from 'react-bootstrap';
import SEO from '../common/SEO'
import HeaderTopBar from '../common/header/HeaderTopBar'
import HeaderOne from '../common/header/HeaderOne'
import SectionTitle from '../elements/sectionTitle/SectionTitle'
import WhatwedoOne from '../elements/whatWeDo/WhatwedoOne'
import WhatwedoTwo from '../elements/whatWeDo/WhatwedoTwo'
import Separator from '../elements/separator/Separator'
import ServiceTwo from '../elements/service/ServiceTwo';
import WhatwedoThree from '../elements/whatWeDo/WhatwedoThree';
import Whatwedofour from '../elements/whatWeDo/Whatwedofour';
import WhatwedoFive from '../elements/whatWeDo/WhatwedoFive';
import Whatwedosix from '../elements/whatWeDo/Whatwedosix';
import FooterTwo from '../common/footer/FooterTwo';
import Copyright from '../common/footer/Copyright';
import BreadcrumbOne from '../elements/breadcrumb/BreadcrumbOne';

function WhatwedoMain() {
    return (
        <div>
            <SEO title="What we Do" />
            <HeaderTopBar />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-transparent" />
                <BreadcrumbOne
                    title="EZ Consulting is the partner to help you tackle your biggest initiatives and achieve your most ambitious technology goals."
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="WHAT WE DOs"
                />
                <div className="rn-service-area mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mb-0">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="what we do"
                                // title="Services provide for you."
                                // description="There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                                />
                            </div>
                        </div>
                        <WhatwedoOne />
                    </div>
                </div>
                <Separator />
                <div className="rn-service-area mt-0 my-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    // radiusRounded=""
                                    // subtitle="What we  do for you"
                                    title="KEY BUSINESS OUTCOMES"
                                // description="There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                                />
                            </div>
                        </div>
                        <WhatwedoTwo />
                    </div>
                </div>
                <Separator />
                {/* <div className="rn-service-area mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="What we  do for you"
                                    title="Services provide for you."
                                    description="As a global Solutions Integrator with vast technical expertise and deep industry experience, we’re uniquely equipped to help you navigate an always-changing, always-growing digital economy"
                                />
                            </div>
                            <p>As a global Solutions Integrator with vast technical expertise and deep industry experience, we’re uniquely equipped to help you navigate an always-changing, always-growing digital economy</p>
                        </div>
                        <div>
                            <hr style={{ backgroundColor: "white", border: "1px solid white", width: "auto" }} />
                        </div>
                        <Container className="text-center my-5 case-study">
                            <Button variant="warning" className="case-study-button" style={{ fontSize: "medium", color: "white", fontWeight: "900" }}>Case Study &gt;</Button>
                            <h2 className="mt-4">For more than three decades, we’ve helped organizations transform their business obstacles into opportunities to accomplish big things.</h2>
                            <p className="mt-3">Explore our case studies, and discover some of our ambitious collaborations.</p>
                        </Container>
                    </div>
                </div> */}
                <Separator />
                <div className="rn-service-area mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="OUR EXPERTISE"
                                    title="AREAS OF EXPERTISE"
                                    description=""
                                />
                            </div>
                        </div>
                        <WhatwedoThree />
                    </div>
                </div>
                <Separator />

                <Separator />
                <div className="rn-service-area mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="OUR EXPERTISE"
                                    title="OUR AREA EXPERTISE"
                                    description="EZ Consulting is a leading Solutions Integrator, helping you navigate today’s ever-changing business environment with teams of technical
                                                    experts and decades of industry experience."
                                />
                            </div>
                        </div>
                        <Whatwedofour  cardStyle="card-style-1"
                                textAlign="text-start"/>
                    </div>
                </div>
                <Separator />
                <div className="rn-service-area mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="OUR SERVICE"
                                    title="OUR SERVICE"
                                    description="EZ Consulting is a leading Solutions Integrator, helping you navigate today’s ever-changing business environment with teams of technical
                                                    experts and decades of industry experience."
                                />
                            </div>
                        </div>
                        <WhatwedoFive />
                    </div>
                </div>
                <Separator />
                <Whatwedosix />
                <Separator />
                <FooterTwo />
                <Separator />
                <Copyright />
            </main>
        </div>
    )
}

export default WhatwedoMain
