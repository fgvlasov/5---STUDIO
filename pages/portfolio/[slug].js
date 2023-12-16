import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import {useEffect, useState} from 'react';
import CallToActionOne from '../../components/call-to-actions/CallToActionOne';
import VideoPlayer from '../../components/common/VideoPlayer';
import Layout from '../../components/layouts/Layout';
import PortfolioData from '../../data/Portfolio.json';
import {slugify} from '../../helpers/utilities';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

export async function getStaticPaths() {
    return {
        paths: PortfolioData?.map(({title}) => ({
            params: {
                slug: slugify(title),
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({params}) {
    const portfolio = PortfolioData.find(item => slugify(item.title) === params.slug);

    return {
        props: {
            portfolio,
        },
    };
}

const PortfolioDetails = ({portfolio}) => {
    const [isWindow, setIsWindow] = useState(false);

    useEffect(() => {
        setIsWindow(true);
    }, []);

    return (
        <Layout>
            <Head>
                <title>
                    {portfolio.title} || Keystroke Creative Agency Bootstrap 5 Template
                </title>
            </Head>

            <main className="page-wrapper">
                <Breadcrumb
                    title="Portfolio Details"
                    current="Portfolio Details"
                />

                <div className="axil-portfolio-details ax-section-gap bg-color-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-6 col-sm-12 col-12">
                                <div className="portfolio-wrapper">
                                    <div className="section-title text-start">
                                        <span className="sub-title extra04-color">
                                          {portfolio.categories?.map((category, categoryIndex) => (
                                              <span key={`category-${categoryIndex}`}>
                                              {category} {categoryIndex !== portfolio.categories.length - 1 ? ", " : ''}
                                            </span>
                                          ))}
                                        </span>
                                        <h2 className="title">
                                            <span>{portfolio.title}</span>
                                        </h2>
                                        <p
                                            className="subtitle-2 mb--40"
                                            dangerouslySetInnerHTML={{
                                                __html: portfolio.description,
                                            }}
                                        />
                                        <Link href="#">
                                            <a className="axil-button btn-large btn-transparent">
                                                <span className="button-text">Launch The Site </span>
                                                <span className="button-icon"/>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-5 col-lg-6 col-sm-12 col-12 mt_md--40 mt_sm--40">
                                <div className="portfolio-inner-details">
                                    <h3 className="title mb--20 md_md--10 md_sm--10">
                                        We delivered
                                    </h3>
                                    <p className="mb--35 md_md--10 md_sm--10 subtitle-2">
                                        {portfolio.delivered}
                                    </p>

                                    <div
                                        id="accordion"
                                        className="axil-accordion mt--15 mt_md--15 mt_sm--15"
                                    >
                                        <div className="card">
                                            <div className="card-header" id="headingOne">
                                                <h5 className="mb-0">
                                                    <button
                                                        className="btn btn-link"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapseOne"
                                                        aria-expanded="true"
                                                        aria-controls="collapseOne"
                                                    >
                                                        <i className="fal fa-compress-wide"/>
                                                        <span>Strategy</span>
                                                    </button>
                                                </h5>
                                            </div>

                                            <div
                                                id="collapseOne"
                                                className="collapse show"
                                                aria-labelledby="headingOne"
                                                data-bs-parent="#accordion"
                                            >
                                                <div className="card-body">
                                                    {portfolio.strategy}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header" id="headingTwo">
                                                <h5 className="mb-0">
                                                    <button
                                                        className="btn btn-link collapsed"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapseTwo"
                                                        aria-expanded="false"
                                                        aria-controls="collapseTwo"
                                                    >
                                                        <i className="fal fa-code"/>
                                                        <span>Design</span>
                                                    </button>
                                                </h5>
                                            </div>
                                            <div
                                                id="collapseTwo"
                                                className="collapse"
                                                aria-labelledby="headingTwo"
                                                data-bs-parent="#accordion"
                                            >
                                                <div className="card-body">
                                                    {portfolio.design}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header" id="headingThree">
                                                <h5 className="mb-0">
                                                    <button
                                                        className="btn btn-link collapsed"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapseThree"
                                                        aria-expanded="false"
                                                        aria-controls="collapseThree"
                                                    >
                                                        <i className="fal fa-globe"/>
                                                        <span>Development</span>
                                                    </button>
                                                </h5>
                                            </div>
                                            <div
                                                id="collapseThree"
                                                className="collapse"
                                                aria-labelledby="headingThree"
                                                data-bs-parent="#accordion"
                                            >
                                                <div className="card-body">
                                                    {portfolio.development}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="axil-video-area bg-color-lightest ax-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-center">
                                    <div className="thumbnail position-relative">
                                        <Image
                                            width={930}
                                            height={521}
                                            className="w-100"
                                            src="/images/portfolio/portfolio-big-image-01.jpg"
                                            alt="POrtfolio Images"
                                        />
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <CallToActionOne/>

                {isWindow && (
                    <VideoPlayer url={portfolio.videoUrl}/>
                )}
            </main>
        </Layout>
    );
};

export default PortfolioDetails;
