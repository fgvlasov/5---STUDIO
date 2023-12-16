import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer';
import BannerSeven from '../components/banners/BannerSeven';
import Layout from '../components/layouts/Layout';
import ServiceThree from '../components/services/ServiceThree';
import WorkingProcess from '../components/services/WorkingProcess';
import TeamOne from '../components/teams/TeamOne';
import CaseStudyData from '../data/CaseStudies.json';
import {slugify} from '../helpers/utilities';

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    const workingProcess = {
        title: "Our execution process",
        description:
            "Our comprehensive design strategy ensures a perfectly crafted design for your business.",
        strategies: [
            {
                id: 1,
                title: "Discover",
                subtitle: "our four step process",
                description:
                    "Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.",
                highlightColor: "extra04-color",
                image: "/images/process/process-01.jpg",
            },
            {
                id: 2,
                title: "Prototype",
                subtitle: "our four step process",
                description:
                    "Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.",
                highlightColor: "extra05-color",
                image: "/images/process/process-02.jpg",
            },
            {
                id: 3,
                title: "Test",
                subtitle: "our four step process",
                description:
                    "Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.",
                highlightColor: "extra06-color",
                image: "/images/process/process-03.jpg",
            },
            {
                id: 4,
                title: "Build",
                subtitle: "our four step process",
                description:
                    "Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.",
                highlightColor: "extra07-color",
                image: "/images/process/process-04.jpg",
            },
        ],
    };

    return (
        <Layout>
            <Head>
                <title>About Us || keystroke Creative Agency Bootstrap5 Template</title>
            </Head>

            <main className="page-wrapper">
                <BannerSeven/>

                <div
                    ref={ref}
                    className="axil-featured-area ax-section-gap bg-color-white"
                >
                    <div className="container">
                        <div className="row d-flex flex-wrap axil-featured row--40">
                            <div className="col-lg-6 col-xl-6 col-md-12 col-12">
                                <div className="thumb-inner">
                                    <div className="thumbnail">
                                        <Image
                                            width={801}
                                            height={712}
                                            className="image w-100"
                                            src="/images/featured/featured-image-02.jpg"
                                            alt="Featured Images"
                                        />
                                    </div>
                                    <div className="shape-group">
                                        <div className="shape">
                                            <i className="icon icon-breadcrumb-2"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-6 col-md-12 col-12 mt_md--40 mt_sm--40">
                                <div className="inner">
                                    <div className="section-title text-start">
                                        <span className="sub-title extra04-color">
                                          featured case study
                                        </span>
                                        <h2 className="title">
                                            <Link href={`/case-study/${slugify(CaseStudyData[0].title)}`}>
                                                <a>
                                                    Building software for world changers{" "}
                                                </a>
                                            </Link>
                                        </h2>
                                        <p className="subtitle-2">
                                            Donec metus lorem, vulputate at sapien sit amet, auctor
                                            iaculis lorem. In vel hendrerit nisi. Vestibulum eget
                                            risus velit. Aliquam tristique libero at dui sodales, et
                                            placerat orci lobortis. Maecenas ipsum neque, elementum id
                                            dignissim et, imperdiet vitae mauris.
                                        </p>
                                        <Link href={`/case-study/${slugify(CaseStudyData[0].title)}`}>
                                            <a className="axil-button btn-large btn-transparent">
                                                <span className="button-text">Read Case Study</span>
                                                <span className="button-icon"/>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="axil-counterup-area d-flex flex-wrap separator-line-vertical">
                                        <div className="single-counterup counterup-style-1">
                                            <h3 className="count">
                                                <CountUp start={0} end={inView ? "15" : 0}/>
                                            </h3>
                                            <p>ROI increase</p>
                                        </div>

                                        <div className="single-counterup counterup-style-1">
                                            <h3 className="count counter-k">
                                                <CountUp start={0} end={inView ? "60" : 0}/>
                                            </h3>
                                            <p>Monthly website visits</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ServiceThree/>

                <TeamOne/>

                <WorkingProcess process={workingProcess}/>
            </main>
        </Layout>
    );
};

export default About;
