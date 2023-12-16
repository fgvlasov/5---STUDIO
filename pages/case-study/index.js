import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';
import CountUp from 'react-countup';
import {useState} from 'react';
import {InView} from 'react-intersection-observer';
import BannerSeven from '../../components/banners/BannerSeven';
import CallToActionOne from '../../components/call-to-actions/CallToActionOne';
import Layout from '../../components/layouts/Layout';
import CaseStudiesData from '../../data/CaseStudies.json';
import {slugify} from '../../helpers/utilities';

const CaseStudy = () => {
    const [inView, setInView] = useState(false);

    return (
        <Layout>
            <Head>
                <title>
                    Case Study || Keystroke Creative Agency Bootstrap 5 Template
                </title>
            </Head>

            <main className="page-wrapper">
                <BannerSeven
                    title="Case study"
                    subtitle="A quick view of industry specific problems solved with design by the awesome team at Keystroke."
                />

                <div className="axil-featured-area ax-section-gap bg-color-lightest color-darkest">
                    <div className="container">
                        {CaseStudiesData?.map((caseStudy, index) => (
                            <div
                                className={`row d-flex flex-wrap axil-featured row--0 ${
                                    index !== 0 ? "ax-section-gapTop" : ""
                                } ${index % 2 !== 0 ? "axil-featured-left" : ""}`}
                                key={`case-study-${index}`}
                            >
                                <div
                                    className={`col-lg-6 col-xl-6 col-md-12 col-12 ${
                                        index % 2 !== 0 ? "order-1 order-lg-2" : "order-1"
                                    }`}
                                >
                                    <div className="thumbnail">
                                        <Link href={`/case-study/${slugify(caseStudy.title)}`}>
                                            <a>
                                                <Tilt tiltMaxAngleX={9} tiltMaxAngleY={9}>
                                                    <Image
                                                        width={661}
                                                        height={668}
                                                        className="image w-100 paralax-image"
                                                        src={caseStudy.image}
                                                        alt="Featured Images"
                                                        priority
                                                    />
                                                </Tilt>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div
                                    className={`col-lg-6 col-xl-5 offset-xl-1 col-md-12 col-12 mt_md--40 mt_sm--40 ${
                                        index % 2 !== 0 ? "order-2 order-lg-1" : "order-2"
                                    }`}
                                >
                                    <div className="inner">
                                        <div className="section-title text-start">
                                            <span className="sub-title extra04-color">
                                              {caseStudy.subtitle}
                                            </span>
                                            <h2 className="title">
                                                <Link href={`/case-study/${slugify(caseStudy.title)}`}>
                                                    {caseStudy.title}
                                                </Link>
                                            </h2>
                                            <p className="subtitle-2">{caseStudy.description}</p>
                                            <Link href={`/case-study/${slugify(caseStudy.title)}`}>
                                                <a className="axil-button btn-large btn-transparent">
                                                    <span className="button-text">Read Case Study</span>
                                                    <span className="button-icon"/>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="axil-counterup-area d-flex flex-wrap separator-line-vertical">
                                            {caseStudy.counter?.map((counter, counterIndex) => (
                                                <InView
                                                    triggerOnce
                                                    onChange={(inView, entry) => setInView(true)}
                                                    key={`counter-item-${counterIndex}`}
                                                >
                                                    <div className="single-counterup counterup-style-1">
                                                        <h3 className={`count ${caseStudy.counter.length - 1 === counterIndex ? "counter-k" : ""}`}>
                                                            <CountUp
                                                                start={0}
                                                                end={inView ? counter.amount : 0}
                                                            />
                                                        </h3>
                                                        <p>{counter.title}</p>
                                                    </div>
                                                </InView>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <CallToActionOne/>
            </main>
        </Layout>
    );
};

export default CaseStudy;
