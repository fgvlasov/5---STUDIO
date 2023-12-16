import Head from 'next/head';
import Image from 'next/image';
import {useEffect, useState} from 'react';
import Tilt from 'react-parallax-tilt';
import CallToActionOne from '../../components/call-to-actions/CallToActionOne';
import VideoPlayer from '../../components/common/VideoPlayer';
import Layout from '../../components/layouts/Layout';
import WorkingProcess from '../../components/services/WorkingProcess';
import CaseStudyData from '../../data/CaseStudy.json';
import BannerSix from '../../components/banners/BannerSix';
import {slugify} from '../../helpers/utilities';

export async function getStaticPaths() {
    return {
        paths: CaseStudyData?.map(({title}) => ({
            params: {
                slug: slugify(title),
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({params}) {
    const caseStudy = CaseStudyData.find(item => slugify(item.title) === params.slug);

    return {
        props: {
            caseStudy,
        },
    };
}

const ProjectDetails = ({caseStudy}) => {
    const [isWindow, setIsWindow] = useState(false);

    useEffect(() => {
        setIsWindow(true);
    }, []);

    return (
        <Layout>
            <Head>
                <title>
                    Case Study Details || Keystroke Creative Agency Bootstrap 5 Template
                </title>
            </Head>

            <main className="page-wrapper">
                <BannerSix
                    title={caseStudy.title}
                    subtitle="A quick view of industry specific problems solved with design by the awesome team at Keystroke."
                    bannerStyleClass="axil-breadcrumb-area breadcrumb-style-2 single-service pt--170 pb--70 theme-gradient"
                    bannerTitleClass="title"
                    leftColumn="col-lg-6 order-2 order-lg-1 mt_md--30 mt_sm--20"
                    rightColumn="col-lg-6 order-1 order-lg-2"
                    bannerImageOne="/images/slider/single-service-02.png"
                    bannerImageTwo="/images/slider/single-service-01.svg"
                    shapeImage={caseStudy.bannerImage ? caseStudy.bannerImage : caseStudy.thumbnail.src}
                    isServiceDetails={true}
                    showPersonImage={false}
                />

                <div className="axil-project-brief project-bief-styles ax-section-gap bg-color-white">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-xl-6 col-md-12 col-12">
                                <div className="thumbnail position-relative">
                                    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                                        <Image
                                            width={550}
                                            height={596}
                                            className="image w-100 paralax-image"
                                            src={caseStudy.projectBreif1.image}
                                            alt="Featured Images"
                                        />
                                    </Tilt>
                                    <div className="video-button position-to-top">
                                        <a
                                            className="play__btn video-btn"
                                            href="https://www.youtube.com/watch?v=Pj_geat9hvI"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                        >
                                            <span className="triangle"/>
                                        </a>
                                    </div>
                                    <div className="shape-group shape-01">
                                        <Image
                                            width={257}
                                            height={179}
                                            src="/images/others/contact-01.svg"
                                            alt="Shape image"
                                        />
                                    </div>
                                    <div className="shape-group shape-02">
                                        <Image
                                            width={410}
                                            height={424}
                                            src="/images/others/contact-03.svg"
                                            alt="Shape image"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-5 offset-xl-1 col-md-12 col-12">
                                <div className="content mt_md--30 mt_sm--30">
                                    <div className="inner">
                                        <h2 className="title mb--20">Project brief</h2>
                                        {caseStudy.projectBreif1.description?.map(
                                            (breif, index) => (
                                                <p
                                                    key={`project-breif-${index}`}
                                                    className={
                                                        index !==
                                                        caseStudy.projectBreif1.description.length - 1
                                                            ? "mb--30"
                                                            : ""
                                                    }
                                                >
                                                    {breif}
                                                </p>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="axil-project-brief project-bief-styles order-style-2 ax-section-gap bg-color-lightest">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-xl-5 col-md-12 col-12 order-2 order-lg-1 mt_md--30 mt_sm--30">
                                <div className="content">
                                    <div className="inner">
                                        <h2 className="title mb--20">Project brief</h2>
                                        {caseStudy.projectBreif2.description?.map(
                                            (breif, index) => (
                                                <p
                                                    key={`project-breif-${index}`}
                                                    className={
                                                        index !==
                                                        caseStudy.projectBreif2.description.length - 1
                                                            ? "mb--30"
                                                            : ""
                                                    }
                                                >
                                                    {breif}
                                                </p>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-6 offset-xl-1 col-md-12 col-12 order-1 order-lg-2">
                                <div className="thumbnail position-relative">
                                    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                                        <Image
                                            width={550}
                                            height={596}
                                            className="image w-100 paralax-image"
                                            src="/images/featured/featured-image-07.jpg"
                                            alt="Featured Images"
                                        />
                                    </Tilt>
                                    <div className="shape-group shape-01">
                                        <Image
                                            width={257}
                                            height={179}
                                            src="/images/others/contact-01.svg"
                                            alt="Shape image"
                                        />
                                    </div>
                                    <div className="shape-group shape-02">
                                        <Image
                                            width={410}
                                            height={424}
                                            src="/images/others/contact-03.svg"
                                            alt="Shape image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="axil-project-solutions-area shape-group-position ax-section-gap bg-color-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="content">
                                    <div className="section-title-inner text-start">
                                        <h2 className="title mb--20">Solutions</h2>
                                        {caseStudy.solution.description?.map((solution, index) => (
                                            <p
                                                key={`project-solution-${index}`}
                                                className={`subtitle-2 ${
                                                    index !== caseStudy.solution.description.length - 1
                                                        ? "mb--30"
                                                        : ""
                                                }`}
                                            >
                                                {solution}
                                            </p>
                                        ))}
                                    </div>
                                    <div className="thumbnail mt--60">
                                        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                                            <Image
                                                width={910}
                                                height={500}
                                                className="w-100 paralax-image"
                                                src="/images/featured/featured-b1.jpg"
                                                alt="Featured Images"
                                            />
                                        </Tilt>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shape-group">
                        <div className="shape">
                            <i className="icon icon icon-shape-19"/>
                        </div>
                    </div>
                </div>

                <WorkingProcess process={caseStudy.process}/>

                <CallToActionOne/>

                {isWindow && <VideoPlayer url={caseStudy.videoUrl}/>}
            </main>
        </Layout>
    );
};

export default ProjectDetails;
