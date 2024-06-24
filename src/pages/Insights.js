import React from 'react'
import SEO from '../common/SEO'
import HeaderTopBar from '../common/header/HeaderTopBar'
import Separator from '../elements/separator/Separator'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import SectionTitle from '../elements/sectionTitle/SectionTitle'
import HeaderOne from '../common/header/HeaderOne'
import TeamThree from '../elements/team/TeamThree'
import InsightsOne from '../elements/Insights/InsightsOne'
import InsightsTwo from '../elements/Insights/InsightsTwo'
import WhatwedoTwo from '../elements/whatWeDo/WhatwedoTwo'
import Insightsthree from '../elements/Insights/Insightsthree'
import Insightsforu from '../elements/Insights/Insightsforu'
import InsightsFive from '../elements/Insights/InsightsFive'
import FooterTwo from '../common/footer/FooterTwo'
import Copyright from '../common/footer/Copyright'
import BreadcrumbOne from '../elements/breadcrumb/BreadcrumbOne'

function Insights() {
    return (
        <div>
            <SEO title="Indights" />
            <HeaderTopBar />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-transparent" />
                <Separator />
                <BreadcrumbOne
                    title="Check out our collection of helpful resources, our clients, and growth below. Click here for our latest research and methodologies. "
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="INSIGHTS"
                />
                <div style={{ paddingTop: "9rem !important" }} className="rn-service-area pt-5 mt-5 mb-0 " >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    // radiusRounded=""
                                    // subtitle="STAY UP TO DATE"
                                    // title="INSIGHTS"
                                    // description="Check out our collection of helpful resources, our clients, and growth below. Click here for our latest research and methodologies."
                                />
                            </div>
                        </div>
                        
                        {/* <WhatwedoOne /> */}
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
                                    subtitle="CUSTOMER SUCCESS STORIES"
                                    title="CUSTOMER SUCCESS "
                                    description=""
                                />
                            </div>
                        </div>
                        <InsightsOne column="col-lg-3 col-md-6 col-12 mt--30" teamStyle="team-style-two" />
                    </div>
                </div>
                <Separator />
                <InsightsTwo />
                <Separator />
                <WhatwedoTwo />
                <Separator />
                <div className="rwt-team-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mb--15">
                                <SectionTitle
                                    textAlign="text-center"
                                    subtitle="Insight by the numbers"
                                    // title="Insight by the numbers"
                                    description=""
                                />
                            </div>
                        </div>
                        <Insightsthree />
                    </div>
                </div>
                <Separator />
                <div className="rwt-team-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mb--15">
                                <SectionTitle
                                    textAlign="text-center"
                                    subtitle="Finding the path to the future"
                                    // title="Insight by the numbers"
                                    description=""
                                />
                            </div>
                        </div>
                        <Insightsforu />
                    </div>
                </div>
                <Separator />
                <InsightsFive />
                <Separator />
                <FooterTwo />
                <Separator />
                <Copyright />
            </main>
        </div>
    )
}

export default Insights
