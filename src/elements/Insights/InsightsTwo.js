import React from 'react'

function InsightsTwo() {
  return (
    <div>
      <div className="container text-center my-5">
      <h2>What business outcome are you looking to address?</h2>
      <div className="row justify-content-center mt-4">
        <div className="col-md-2 col-sm-4 col-6 mb-3">
          <button className="btn-default btn-dark btn-block rounded-pill" style={{    padding: "1px 7px", fontSize: "15px", fontWeight: "900"}}>Client experience</button>
        </div>
        <div className="col-md-2 col-sm-4 col-6 mb-3">
          <button className="btn-default btn-dark btn-block rounded-pill" style={{padding: "1px 7px", fontSize: "15px", fontWeight: "900"}}>Grow Revenue</button>
        </div>
        <div className="col-md-2 col-sm-4 col-6 mb-3">
          <button className="btn-default btn-dark btn-block rounded-pill" style={{padding: "1px 7px", fontSize: "15px", fontWeight: "900"}}>Manage Costs</button>
        </div>
        <div className="col-md-2 col-sm-4 col-6 mb-3">
          <button className="btn-default btn-dark btn-block rounded-pill" style={{padding: "1px 7px", fontSize: "15px", fontWeight: "900"}}>Mitigate Risks</button>
        </div>
        {/* <div className="col-md-2 col-sm-4 col-6 mb-3">
          <button className="btn-default btn-dark btn-block rounded-pill" style={{padding: "1px 7px", fontSize: "15px", fontWeight: "900"}}>Operational efficiencies</button>
        </div> */}
      </div>
    </div>
    </div>
  )
}

export default InsightsTwo
