import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import ContactOne from "./ContactOne";
import "../../assets/css/Contact.css"

const Contact = () => {
    return (
        <>
            <SEO title="Contact || Doob - React Business  Template" />
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
                            <div className="row">
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
                            <div className="container containeres">
                                <div className="card">
                                    <img src="/path/to/client-experience-icon.png" alt="Client Experience Icon" />
                                    <h2>Client experience</h2>
                                    <p>Serve your customers better with the right IT infrastructure, hardware, software and applications.</p>
                                    <a href="#">Learn more →</a>
                                </div>
                                <div className="card">
                                    <img src="/path/to/grow-revenue-icon.png" alt="Grow Revenue Icon" />
                                    <h2>Grow revenue</h2>
                                    <p>Take a proactive stance with business intelligence, predictive modeling and data analysis that give you an edge.</p>
                                    <a href="#">Learn more →</a>
                                </div>
                                <div className="card">
                                    <img src="/path/to/manage-cost-icon.png" alt="Manage Cost Icon" />
                                    <h2>Manage cost</h2>
                                    <p>Optimize your technology investments across data center, cloud, hardware and software assets.</p>
                                    <a href="#">Learn more →</a>
                                </div>
                                <div className="card">
                                    <img src="/path/to/mitigate-risk-icon.png" alt="Mitigate Risk Icon" />
                                    <h2>Mitigate risk</h2>
                                    <p>Protect your data, systems, users and customers against a rapidly evolving landscape of threats.</p>
                                    <a href="#">Learn more →</a>
                                </div>
                            </div>
                            <ContactOne />
                        </div>
                    </div>
                    {/* End Contact Area  */}
                </div>
            </Layout>
        </>
    )
}
export default Contact;