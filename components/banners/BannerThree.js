import Image from 'next/image';
import {useEffect} from 'react';
import Link from "next/link";

const BannerThree = () => {
    const startMarqueeAnimation = () => {
        const marquee = document.querySelectorAll(".marque-images");
        marquee.forEach(function (item) {
            let t = 0,
                i = 1;

            setInterval(function () {
                t += i;
                item.style.backgroundPositionX = `${-t}px`;
            }, 10);
        });
    };

    useEffect(() => {
        startMarqueeAnimation();
    }, []);

    return (
        <div className="axil-slider-area portfolio-slider axil-slide-activation fix">
            <div className="axil-slide slide-style-3 theme-gradient-3 slider-fixed-height d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            <div className="content">
                                <span className="title"
                                      data-aos="aos-fade-in-up"
                                      data-aos-duration="1000">
                                  HARVEY LAWSON
                                </span>
                                <h1 className="axil-display-1"
                                    data-aos="aos-fade-in-up"
                                    data-aos-duration="1000"
                                    data-aos-delay="200">
                                    Website and user interface designer
                                </h1>
                                <div className="button-group"
                                     data-aos="aos-fade-in-up"
                                     data-aos-duration="1000"
                                     data-aos-delay="200">
                                    <a href="https://dribbble.com/axilweb/"
                                       target="_blank"
                                       rel="noreferrer"
                                       className="axil-button btn-large btn-transparent">
                                        <span className="button-text">Latest Work On Dribbble</span>
                                        <span className="button-icon"/>
                                    </a>
                                    <Link href="/about">
                                        <a className="axil-button axil-link-button">
                                            About Me
                                        </a>
                                    </Link>
                                </div>
                                <div className="scroll-down_btn">
                                    <a id="scrollDown"
                                       className="axil-scrollbown smoth-animation"
                                       href="#sectionBottom">
                                        <span/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="design-text marque-images"/>
                </div>
            </div>

            <div className="thumbnail">
                <div className="light-image">
                    <Image
                        width={1013}
                        height={917}
                        src="/images/about/about-01.png"
                        alt="About Images"
                    />
                </div>
                <div className="dark-image">
                    <Image
                        width={1013}
                        height={917}
                        className="dark-image"
                        src="/images/about/dark-image.png"
                        alt="About Images"
                    />
                </div>
            </div>
        </div>
    );
};

export default BannerThree;
