import React from 'react'
import WhatweDoFirstImg from "../../assets/images/EZ Consulting What we do Page Images/EZ Consluting.png";

function WhatwedoOne() {

    const PopupData = [
        {
            id: "01",
            image: WhatweDoFirstImg,
            popupLink: [
                'https://www.youtube.com/watch?v=ctsT5Y-InqE&ab_channel=Rainbow-Themes',
            ],
        }
    ]
    return (
        <div>
            <div className="about-area about-style-4 " style={{padding: "38px 0 !important"}}>
                <div className="container">
                    <div className="row row--40 align-items-center">
                        <div className="col-lg-6">
                            {/* {PopupData.map((item) => (
                            <div className="video-btn" key={item.id}>
                                <VideoTwo imagename={`${image}`} galleryItem={item} />
                            </div>
                        ))} */}
                            {PopupData.map((item) => (
                                <div className="image-container" key={item.id} style={{ width: "fit-content", marginLeft: "73px" }}>
                                    <img src={item.image} alt={`Image for ${item.id}`} style={{ width: "408px", height: "411px !important" }} />
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-6 mt_md--40 mt_sm--40">
                            <div className="content">
                                <div className="inner">
                                    <h3 className="title text-white mb-2" style={{fontWeight: "bold"}}>What we do </h3>
                                    <ul className="feature-list">
                                        <li>
                                            <div className="title-wrapper">
                                                {/* <h4 className="title">WHO WE ARE</h4> */}
                                                <p className="text mb-1" style={{ color: "#00408B", fontSize: "25px ", fontWeight: "bold" }}>EZ Consulting is the partner
                                                    to help you tackle your
                                                    biggest initiatives and
                                                    achieve your most ambitious
                                                    technology goals.</p>
                                                <br />
                                                <p className='text-white'>With an unmatched combination of solutions
                                                    expertise and delivery capabilities, we navigate
                                                    complexity and drive digital transformation for
                                                    top organizations across industries.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container text-center my-5 mt-5">
                    <h2 className="mb-5 mt-5">WHAT BUSINESS OUTCOMES ARE YOU LOOKING TO ADDRESS?</h2>
                    <div className="row mb-4">
                        <div className="col">
                            <button className="btn btn-warning mx-2" style={{padding: "17px", fontSize: "13px", fontWeight: "900"}}>CLIENT EXPERIENCE</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-warning mx-2" style={{padding: "17px", fontSize: "13px", fontWeight: "900"}}>GROW REVENUE</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-warning mx-2" style={{padding: "17px", fontSize: "13px", fontWeight: "900"}}>MANAGE COSTS</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-warning mx-2" style={{padding: "17px", fontSize: "13px", fontWeight: "900"}}>MITIGATE RISKS</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-warning mx-2" style={{padding: "8px", fontSize: "13px", fontWeight: "900"}}>OPERATIONAL EFFICIENCES</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mt-5">
                            <p className='text-white'>
                                Whether you need consulting for a data platform modernization, Legacy
                                Application Modernization, an end-to-end technology refresh or anything
                                in between we’re here to guide you every step of the way.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatwedoOne
