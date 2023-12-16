import {motion} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';
import {slugify} from '../../helpers/utilities';

const PortfolioCard = ({data, index, activeIndex, changeActive}) => {
    const item = {
        hidden: {y: 20, opacity: 0},
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <motion.div
            variants={item}
            className={`portfolio portfolio_style--1 axil-control ${
                activeIndex === index ? "active" : ""
            }`}
            onMouseEnter={() => changeActive(index)}
        >
            <div className="inner">
                <Tilt tiltMaxAngleX={9} tiltMaxAngleY={9}>
                    <div className="thumb">
                        <Link href={`/portfolio/${slugify(data.title)}`}>
                            <a>
                                <Image
                                    width={400}
                                    height={380}
                                    src={data.image}
                                    alt={`${data.title} portfolio image`}
                                />
                            </a>
                        </Link>
                    </div>
                </Tilt>

                <div className="port-overlay-info">
                    <div className="hover-action">
                        <h4 className="title">
                            <Link href={`/portfolio/${slugify(data.title)}`}>
                                <a>{data.title}</a>
                            </Link>
                        </h4>
                        <span className="category">
              {data.categories?.map((category, index) => {
                  return category;
              })}
            </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default PortfolioCard;
