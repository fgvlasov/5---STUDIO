import Image from "next/image";
import Tilt from "react-parallax-tilt";
import Link from "next/link";

const BlogCardOne = ({column, data, index, activeIndex}) => {
    return (
        <div className={column}>
            <div
                className={`axil-blog axil-control mt--40 ${
                    activeIndex === index ? "active" : ""
                }`}
                onMouseEnter={() => changeActive(index)}
            >
                <div className="content">
                    <Tilt tiltMaxAngleX={7} tiltMaxAngleY={7}>
                        <div className="content-wrap paralax-image">
                            <div className="inner">
                                <span className="category">{data.category}</span>
                                <h5 className="title">
                                    <Link href={`/blog/${data.slug}`}>
                                        <a>{data.title}</a>
                                    </Link>
                                </h5>
                                <p>
                                    {data.description}
                                </p>
                            </div>
                        </div>
                    </Tilt>
                </div>
                <div className="thumbnail">
                    <div className="image">
                        <Image
                            width={410}
                            height={452}
                            src={data.thumbnails.medium}
                            alt={data.title}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCardOne;
