import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import ContactOne from "./ContactOne";
import "../../assets/css/Contact.css"
import HeaderTopBar from '../../common/header/HeaderTopBar';
import ContactForm from './ContactForm';
import GoogleMapStyle from './GoogleMapStyle';

const Contact = () => {
    return (
        <>
            <SEO title="Contact || Doob - React Business  Template" />
            <HeaderTopBar />

            <Layout>
                <BreadcrumbOne
                    title="Reach out to us today and let's discuss how we can elevate your business with our expert IT consulting services. "
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Contact"
                />
                <div className="main-content">
                    {/* Start Contact Area  */}
                    <div className="rwt-contact-area rn-section-gap">
                        <div className="container">

                            <div className="container containeres">
                                <div className="card">
                                    <div className='d-flex justify-content-center'>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQI8XUhg4kIh2wdZ61D9HVMnipQywxgugJSGxT8XkG9dbh662B" alt="Client Experience Icon" />
                                    </div>
                                    <h2 className='mt-3'>Client experience</h2>
                                    <p className='mt-3'>Serve your customers better with the right IT infrastructure, hardware, software and applications.</p>
                                    <a href="#" className=''>Learn more →</a>
                                </div>
                                <div className="card">
                                    <div className='d-flex justify-content-center'>
                                        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTUPrCjsTIwGHWQYFVzbnN6dhQ16-AI8hwJ4FLcC00plqg3A1yM" alt="Grow Revenue Icon" />
                                    </div>
                                    <h2>Grow revenue</h2>
                                    <p>Take a proactive stance with business intelligence, predictive modeling and data analysis that give you an edge.</p>
                                    <a href="#">Learn more →</a>
                                </div>
                                <div className="card">
                                    <div className='d-flex justify-content-center'>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXVV8-jtzIgK89MXFFEpBB4LvlahquslLa0gM1zpmy1LybcYoI" alt="Manage Cost Icon" />
                                    </div>
                                    <h2>Manage cost</h2>
                                    <p>Optimize your technology investments across data center, cloud, hardware and software assets.</p>
                                    <a href="#">Learn more →</a>
                                </div>
                                <div className="card">
                                    <div className='d-flex justify-content-center'>
                                        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSFVVo610WmUcjealqeT-LaAzdl-J8oXUJ5VbI-gIEEyPVcAJc1" alt="Mitigate Risk Icon" />
                                    </div>
                                    <h2>Mitigate risk</h2>
                                    <p>Protect your data, systems, users and customers against a rapidly evolving landscape of threats.</p>
                                    <a href="#">Learn more →</a>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-lg-12 mb--40">
                                    <SectionTitle
                                        textAlign="text-center"
                                        radiusRounded=""
                                        subtitle="Contact Form"
                                        title="Our Contact Address Here."
                                        description=""
                                    />
                                </div>
                            </div>
                            <ContactOne />
                        </div>
                        <div className="container-fulid row mt--40 row--15" style={{padding: "27px"}}>
                            <div className="col-lg-7">
                                <ContactForm formStyle="contact-form-1" />
                            </div>
                            <div className="col-lg-5 mt_md--30 mt_sm--30">
                                <GoogleMapStyle />
                            </div>
                        </div>
                    </div>
                    {/* End Contact Area  */}
                </div>
            </Layout>
        </>
    )
}
export default Contact;