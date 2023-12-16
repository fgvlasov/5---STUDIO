import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const BrandTwo = () => {
    const brands = [
        {
            "id": 1,
            "image": {
                "src": "/images/brand/brand-11.png",
                "width": 166,
                "height": 60
            }
        },
        {
            "id": 2,
            "image": {
                "src": "/images/brand/brand-12.png",
                "width": 88,
                "height": 88
            }
        },
        {
            "id": 3,
            "image": {
                "src": "/images/brand/brand-08.png",
                "width": 120,
                "height": 80
            }
        },
        {
            "id": 4,
            "image": {
                "src": "/images/brand/brand-07.png",
                "width": 128,
                "height": 48
            }
        },
        {
            "id": 5,
            "image": {
                "src": "/images/brand/brand-05.png",
                "width": 103,
                "height": 56
            }
        },
        {
            "id": 6,
            "image": {
                "src": "/images/brand/brand-09.png",
                "width": 312,
                "height": 64
            }
        }
    ]

    let settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <div className="axil-client-area bg-shape-image-position axil-bg-oval">
            <div className="bg-shape-container">
                <div className="light">
                    <Image src="/images/others/background-shape.svg" alt="shape image" layout="fill"/>
                </div>
                <div className="dark">
                    <Image src="/images/others/background-shape-dark.svg" alt="shape image" layout="fill"/>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title mb--60 text-center">
                            <h5>We’ve built solutions for...</h5>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="client-logo">
                            <ul className="client-list axil-carousel liststyle">
                                {brands.length > 0 && (
                                    <Slider {...settings}>
                                        {brands?.map((brand, index) => {
                                            return (
                                                <div key={`brand-${index}`}>
                                                    <Link href="#">
                                                        <a>
                                                            <Image
                                                                width={brand.image.width}
                                                                height={brand.image.width}
                                                                src={brand.image.src}
                                                                alt="Client Images"
                                                            />
                                                        </a>
                                                    </Link>
                                                </div>
                                            );
                                        })}
                                    </Slider>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandTwo;
