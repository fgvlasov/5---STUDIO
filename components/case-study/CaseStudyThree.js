import Image from 'next/image';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';
import CaseStudyData from '../../data/CaseStudy.json';
import SectionTitle from '../common/SectionTitle';
import {SplitText} from '../common/SplitText';
import CaseStudyCard from './CaseStudyCard';
import {slugify} from '../../helpers/utilities';

const CaseStudyThree = () => {
    return (
        <div className="axil-case-study-area ax-section-gap bg-color-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            title="Some of our finest work."
                            subtitle="our projects"
                            color="extra10-color"
                            alignment="left"
                        />
                    </div>
                </div>
                <div className="row row--45">
                    <div className="col-lg-12 col-12">
                        <div className="axil-case-study with-mokup-images theme-gradient-5">
                            <div className="content">
                                <div className="inner">
                                    <span className="category">
                                      {CaseStudyData[6].category?.map(
                                          (cat, catIndex) => (
                                              <SplitText key={`category-${catIndex}`}>
                                                  {catIndex ===
                                                  CaseStudyData[6].category.length - 1
                                                      ? cat
                                                      : `${cat}, `}
                                              </SplitText>
                                          )
                                      )}
                                    </span>
                                    <h4 className="title">
                                        <Link href={`/projects/${slugify(CaseStudyData[6].title)}`}>
                                            <a>
                                                <SplitText>
                                                    {CaseStudyData[6].title}
                                                </SplitText>
                                            </a>
                                        </Link>
                                    </h4>
                                </div>
                            </div>
                            <div className="mockup">
                                <Tilt tiltMaxAngleX={7} tiltMaxAngleY={7}>
                                    <Image
                                        width={CaseStudyData[6].thumbnail.width}
                                        height={CaseStudyData[6].thumbnail.height}
                                        className="paralax-image w-100"
                                        src={CaseStudyData[6].thumbnail.src}
                                        alt="Mokup Image"
                                    />
                                </Tilt>
                            </div>
                        </div>
                    </div>

                    {CaseStudyData.slice(0, 4)?.map((caseStudy, index) => (
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

export default CaseStudyThree;
