import React from 'react'
import HeaderTopBar from '../common/header/HeaderTopBar'
import HeaderOne from '../common/header/HeaderOne'
import WhatWedo from './WhatWedo'
import WhoweareOne from '../elements/whoweare/WhoweareOne'
import Separator from '../elements/separator/Separator'
import WhoweareTwo from '../elements/whoweare/WhoweareTow'
import WhoweareThree from '../elements/whoweare/WhoweareThree'
import Whowearefour from '../elements/whoweare/Whowearefour'
import WhoweareFive from '../elements/whoweare/WhoweareFive'
import WhoweareSix from '../elements/whoweare/WhoweareSix'
import Whoweareseven from '../elements/whoweare/Whoweareseven'
import SectionTitle from '../elements/sectionTitle/SectionTitle'
import Copyright from '../common/footer/Copyright'
import FooterTwo from '../common/footer/FooterTwo'
import SEO from '../common/SEO'
import BreadcrumbOne from '../elements/breadcrumb/BreadcrumbOne'

function WhoweareMain() {
    return (
        <>
            <SEO title="Who we are || EZ consulting Who we are" />
            <HeaderTopBar />
            <main className='page-wrapper'>
                {/* <HeaderTopBar /> */}
                <HeaderOne btnStyle="btn-small" HeaderSTyle="header-transparent" />
                <BreadcrumbOne
                    title="We are EZ Consulting, leaders in IT consulting, driven by innovation and expertise. With a focus on client-centric solutions, we navigate the complexities of technology to drive growth. "
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="WHO WE ARE"
                />
                <WhatWedo />
                <Separator />
                <WhoweareOne />
                <Separator />
                <WhoweareTwo />
                <Separator />
                <WhoweareThree />
                {/* <Separator /> */}
                {/* <Whowearefour /> */}
                <Separator />
                <WhoweareFive />
                <Separator />
                {/* <WhoweareSix /> */}
                <Separator />
                <div className="container mt-5">
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
                        <Whoweareseven />
                    </div>
                </div>
                <Separator />
                <FooterTwo />
                <Separator />
                <Copyright />

            </main>
        </>
    )
}

export default WhoweareMain
