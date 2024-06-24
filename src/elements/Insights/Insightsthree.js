import React from 'react';
import "../../assets/css/Insights.css"

function Insightsthree() {
    return (
        <div>
            <div className="container text-center my-5">
                <h2>Insight by the numbers</h2>
                <div className="row mt-4">
                    <div className="col-md-4 col-sm-6 mb-3">
                        <div className=" bg-dark text-white" style={{padding: "15px"}}>
                            <h3 className='text-white'>8k+</h3>
                            <p className='theme-gradient font-weight-bold'>hardware, software & cloud partners</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-3">
                        <div className=" bg-dark text-white" style={{padding: "15px"}}>
                            <h3 className='text-white'>13k+</h3>
                            <p className='theme-gradient font-weight-bold'>Insight teammates worldwide</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-3">
                        <div className="  bg-dark text-white" style={{padding: "2px"}}>
                            <h3 className='text-white'>5.7k+</h3>
                            <p className='theme-gradient font-weight-bold'>skilled, certified consulting and service delivery professionals</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 mb-3">
                        <div className="  bg-dark text-white" style={{padding: "15px"}}>
                            <h3 className='text-white'>19</h3>
                            <p className='theme-gradient font-weight-bold'>countries with Insight operations</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 mb-3">
                        <div className="  bg-dark text-white" style={{padding: "1px"}}>
                            <h3 className='text-white'>#1</h3>
                            <p className='theme-gradient font-weight-bold'>on the abcd Futures MSP 501<br />Awarded in 2000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Insightsthree
