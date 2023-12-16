import Link from 'next/link';
import CaseStudyData from '../../data/CaseStudy.json';
import SectionTitle from '../common/SectionTitle';
import CaseStudyCard from './CaseStudyCard';

const CaseStudyOne = () => {
    return (
        <div
            className="axil-case-study-area ax-section-gap bg-color-lightest"
            id="sectionBottom"
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            title="Selected projects"
                            subtitle="case study"
                            color="extra07-color"
                            alignment="left"
                        />
                    </div>
                </div>
                <div className="row row--45">
                    {CaseStudyData.slice(0, 4)?.map((caseStudy, index) => (
                        <CaseStudyCard
                            key={`case-study-${index}`}
                            column="col-lg-6 col-md-6 col-sm-6 col-12"
                            data={caseStudy}
                        />
                    ))}
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div
                            className="case-study-btn text-center mt--60"
                            data-aos="aos-fade-in-up"
                            data-aos-duration="1000"
                        >
                            <Link href="/portfolio">
                                <a className="axil-button btn-large btn-xxl btn-transparent">
                                    <span className="button-text">Discover More Projects</span>
                                    <span className="button-icon"/>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudyOne;
