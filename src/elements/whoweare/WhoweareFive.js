import React from 'react'
import TeamOne from '../team/TeamOne'
import SectionTitle from '../sectionTitle/SectionTitle'

function WhoweareFive() {
    return (
        <div className="main-content">
            <div className="rwt-team-area rn-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <SectionTitle
                                textAlign="text-center"
                                radiusRounded=""
                                subtitle="Our Experts."
                                title="Our Expert Team."
                                description=""
                            />
                        </div>
                    </div>
                    <TeamOne column="col-lg-4 col-md-6 col-12 mt--30" teamStyle="team-style-default" />
                </div>
            </div>
        </div>
    )
}

export default WhoweareFive
