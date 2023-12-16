import Link from 'next/link';
import ContactFormOne from '../forms/ContactFormOne';

const BannerFive = () => {
    return (
        <div className="axil-slider-area axil-slide-activation position-relative">
            <div className="axil-slide slide-style-5 theme-gradient-8 d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center w-100">
                        <div className="col-lg-8 col-12">
                            <div className="content">
                                <div className="inner">
                                    <h1 className="axil-display-1 mb--40"
                                        data-aos="aos-fade-in-up"
                                        data-aos-duration="1000">
                                        Technology <br/> & design studio
                                    </h1>
                                    <Link href="/portfolio">
                                        <a className="axil-button btn-large btn-transparent"
                                           data-aos="aos-fade-in-up"
                                           data-aos-duration="1000"
                                           data-aos-delay="300">
                                            <span className="button-text">View Showcase</span>
                                            <span className="button-icon"/>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <div className="axil-contact-form contact-form-style-1">
                        <h3 className="title">Get a free Keystroke quote now</h3>
                        <ContactFormOne/>
                        <div className="callto-action-wrapper text-center">
                            <span className="text">Or call us now</span>
                            <span>
                               <i className="fal fa-phone-alt"/> <a href="#">(123) 456 7890</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerFive;
