import React from 'react'
import "../../assets/css/Insights.css"

function Insightsforu() {
    return (
        <div>
            <div className="container Finding my-5">
                <div className=" text-white text-center p-5" >
                    <h2>Finding the path to the future</h2>
                    <p style={{color: "white"}}>
                        Many organizations have already laid the groundwork for digital transformation.
                        With future-proof platforms in place, optimization has become a critical goal to
                        support the next wave of innovation.
                    </p>
                    <p style={{color: "white"}}>
                        In the <p className='theme-gradient' style={{display: "inline"}}>2023 EZ Technology</p> Report, we spoke with business leaders, finding that:
                    </p>
                </div>
                <div className="row text-center mt-4" >
                    <div className="col-md-4 col-sm-6 mb-3" style={{padding: "14px"}}>
                        <h3 className="text-warning">46%</h3>
                        <p style={{color: "white"}}>claim legacy technical debt is holding back the organization</p>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-3" style={{padding: "14px"}}>
                        <h3 className="text-warning">44%</h3>
                        <p style={{color: "white"}}>don’t expect changes to their digital spend in the next 12 months.</p>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-3" style={{padding: "14px"}}>
                        <h3 className="text-warning">33%</h3>
                        <p style={{color: "white"}}>plan to increase digital spend more than originally planned.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Insightsforu
