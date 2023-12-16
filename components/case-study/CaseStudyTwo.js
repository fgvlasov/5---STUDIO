import CaseStudyData from '../../data/CaseStudy.json';
import SectionTitle from '../common/SectionTitle';
import CaseStudyCard from './CaseStudyCard';

const CaseStudyTwo = () => {
    return (
        <div className="axil-case-study-area ax-section-gap bg-color-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            title="Photography & drawing"
                            subtitle="case study"
                            color="extra07-color"
                            alignment="left"
                        />
                    </div>
                </div>
                <div className="row row--45">
                    {CaseStudyData.slice(4, 6)?.map((caseStudy, index) => (
                        <CaseStudyCard
                            key={`case-study-${index}`}
                            column="col-lg-6 col-md-6 col-sm-6 col-12"
                            data={caseStudy}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CaseStudyTwo;
