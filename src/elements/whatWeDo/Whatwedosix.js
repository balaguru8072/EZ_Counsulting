import React from 'react';
import "../../assets/css/Servicess.css"
import consulting_img from "../../assets/images/EZ Consulting What we do Page Images/Our Service.png"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


function Whatwedosix() {
    return (
        <div>
            <div className='text-center'>
                <p style={{ color: "blue", fontSize: "33px", fontWeight: "900" }}>We help clients drive digital transformation.</p>
                <p style={{ fontSize: "18px" }}>With us, you get access to deep expertise, broad capabilities and
                    unmatched scale as a leading Solutions Integrator.</p>
            </div>
            <div className="container text-center my-5">
                {/* <h2 className="mb-5">WHAT BUSINESS OUTCOMES ARE YOU LOOKING TO ADDRESS?</h2> */}
                <div className="row mb-4">
                    <div className="col">
                        <button className="btn btn-warning mx-2" style={{ padding: "16px", fontSize: "13px", fontWeight: "900" }}>ADAPTIVE
                            CONSULTING</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-warning mx-2" style={{ padding: "16px", fontSize: "13px", fontWeight: "900" }}>DATA SERVICES</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-warning mx-2" style={{ padding: "6px", fontSize: "13px", fontWeight: "900" }}>INTEGRATION
                            CONSULTING
                        </button>
                    </div>
                    <div className="col">
                        <button className="btn btn-warning mx-2" style={{ padding: "6px", fontSize: "13px", fontWeight: "900" }}>MIMPLEMENTATION
                            SERVICES</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-warning mx-2" style={{ padding: "16px", fontSize: "13px", fontWeight: "900" }}>CONSULTING
                            SERVICE</button>
                    </div>
                </div>
            </div>
            <div className="consulting-container">
                <div className="consulting-image">
                    <img src={consulting_img} alt="Consulting Services" style={{height: "437px"}}/>
                </div>
                <div className="consulting-content " style={{ padding: '80px' }}>
                    <h2 className='theme-gradient mb-4'>CONSULTING SERVICES</h2>
                    <p className='text-white mb-5'>
                        Navigate the complexities of your IT ecosystem with confidence. Our
                        technical experts and technology specialists are equipped with partner
                        certifications, industry knowledge and deep expertise to guide you
                        along the way.
                    </p>
                    <div className='d-flex justify-content-center mt-5 '>
                        <Link className="btn-default" to="/consulting/contact">Explore consulting services</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whatwedosix
