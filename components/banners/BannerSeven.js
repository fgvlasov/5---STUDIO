import Tilt from "react-parallax-tilt";
import Image from "next/image";

const BannerSeven = (
    {
        title = "One of the fastest growing agency",
        subtitle = "We design and develop web and mobile applications for our clients worldwide.",
        thumbnailImageOne = "/images/slider/white-shape.png",
        thumbnailImageTwo = "/images/slider/banner-about.svg",
    }
) => {
    return (
        <div className="axil-breadcrumb-area breadcrumb-style-2 single-service pt--170 pb--70 theme-gradient">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-2 order-lg-1 mt_md--30 mt_sm--30">
                        <div className="inner">
                            <h1 className="title">{title}</h1>
                            <p>{subtitle}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2">
                        <div className="thumbnail text-start text-lg-end">
                            <div className="image-group text-end">
                                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                                    <Image
                                        width={370}
                                        height={466}
                                        className="image-1 paralax-image"
                                        src={thumbnailImageOne}
                                        alt="Slider images"
                                    />
                                </Tilt>
                                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} className="banner-paralax-image-2">
                                    <Image
                                        width={519}
                                        height={395}
                                        className="image-2 paralax-image"
                                        src={thumbnailImageTwo}
                                        alt="Slider images"
                                    />
                                </Tilt>
                            </div>
                            <div className="shape-group">
                                <div className="shape shape-1">
                                    <i className="icon icon-breadcrumb-1"/>
                                </div>
                                <div className="shape shape-2">
                                    <i className="icon icon-breadcrumb-2"/>
                                </div>
                                <div className="shape shape-3 customOne">
                                    <i className="icon icon-breadcrumb-3"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSeven;
