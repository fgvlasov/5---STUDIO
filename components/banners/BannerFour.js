import Tilt from "react-parallax-tilt";
import Image from "next/image";
import Link from "next/link";

const BannerFour = () => {
    return (
        <div className="axil-slider-area axil-slide-activation">
            <div className="axil-slide slide-style-4 theme-gradient-4 slider-fixed-height d-flex align-items-center">
                <div className="container pt--80 pt_sm--40 pt_md--40">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-12 order-2 order-lg-1 mt_md--40 mt_sm--30">
                            <div className="content">
                                <h1 className="axil-display-1 layer1"
                                    data-aos="aos-fade-in-up"
                                    data-aos-duration="1000">
                                    Think the design, design the thinking.
                                </h1>
                                <p className="layer2"
                                   data-aos="aos-fade-in-up"
                                   data-aos-duration="1000"
                                   data-aos-delay="300">
                                    Create live segments and target the right people for messages
                                    based on their behaviors.
                                </p>
                                <div className="slider-button"
                                     data-aos="aos-fade-in-up"
                                     data-aos-duration="1000"
                                     data-aos-delay="400">
                                    <Link href="/portfolio">
                                        <a className="axil-button btn-large btn-solid btn-extra07-color">
                                            <span className="button-text">See Our Projects</span>
                                            <span className="button-icon"/>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 order-1 order-lg-2">
                            <div className="thumbnail d-flex">
                                <div className="image image-one">
                                    <Tilt tiltMaxAngleX={7} tiltMaxAngleY={7} className="tilt-wrapper">
                                        <Image
                                            width={236}
                                            height={330}
                                            className="paralax-image"
                                            src="/images/slider/slider-01.png"
                                            alt="Slider Images"
                                        />
                                    </Tilt>
                                </div>
                                <div className="image image-two">
                                    <Tilt tiltMaxAngleX={7} tiltMaxAngleY={7} className="tilt-wrapper">
                                        <Image
                                            width={210}
                                            height={413}
                                            className="paralax-image"
                                            src="/images/slider/slider-02.png"
                                            alt="Slider Images"
                                        />
                                    </Tilt>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 order-3 order-lg-3">
                            <div className="follow-us">
                                <ul className="social-share social-share-style-2">
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                            <i className="fab fa-facebook-f"/>
                                            <span>Facebook</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                            <i className="fab fa-twitter"/>
                                            <span>twitter</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                            <i className="fab fa-linkedin-in"/>
                                            <span>Linkedin</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerFour;
