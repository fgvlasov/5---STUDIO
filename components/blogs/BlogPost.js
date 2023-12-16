import Image from 'next/image';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import AuthorData from '../../data/Authors.json';
import VideoPlayer from '../../components/common/VideoPlayer';

let settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const BlogPost = ({post, postType = 'default'}) => {
    const [isWindow, setIsWindow] = useState(false);
    const [author, setAuthor] = useState({});

    useEffect(() => {
        const getAuthor = () => {
            const blogAuthor = AuthorData.find((author) => {
                return author.id === post.postdata.authorId;
            });
            setAuthor(blogAuthor);
        };
        getAuthor();
        setIsWindow(true);
    }, [post, setAuthor, setIsWindow]);

    return (
        <>
            {postType === "default" && (
                <div className="axil-blog-list">
                    <div className="blog-top">
                        <h3 className="title">
                            <Link href={`/blog/${post.slug}`}>{post.postdata.title}</Link>
                        </h3>
                        <div className="author">
                            <div className="author-thumb">
                                {author.avatar && (
                                    <Image
                                        width={50}
                                        height={50}
                                        src={author.avatar}
                                        alt="Blog Author"
                                    />
                                )}
                            </div>
                            <div className="info">
                                <h6>{author.name}</h6>
                                <ul className="blog-meta">
                                    <li>{post.postdata.publishedAt}</li>
                                    <li>{post.postdata.readingTime}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="thumbnail">
                        <Link href={`/blog/${post.slug}`}>
                            <a>
                                <Image
                                    width={850}
                                    height={450}
                                    className="w-100"
                                    src={post.postdata.thumbnail.large}
                                    alt="Blog Images"
                                    priority={true}
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="content">
                        <p>{post.postdata.excerpt}</p>
                        <Link href={`/blog/${post.slug}`}>
                            <a className="axil-button btn-large btn-transparent">
                                <span className="button-text">Read More</span>
                                <span className="button-icon"/>
                            </a>
                        </Link>
                    </div>
                </div>
            )}

            {postType === "gallery" && (
                <div className="axil-blog-list gallery-post">
                    <div className="blog-top">
                        <h3 className="title">
                            <Link href={`/blog/${post.slug}`}>{post.postdata.title}</Link>
                        </h3>
                        <div className="author">
                            <div className="author-thumb">
                                {author.avatar && (
                                    <Image
                                        width={50}
                                        height={50}
                                        src={author.avatar}
                                        alt="Blog Author"
                                    />
                                )}
                            </div>
                            <div className="info">
                                <h6>{author.name}</h6>
                                <ul className="blog-meta">
                                    <li>{post.postdata.publishedAt}</li>
                                    <li>{post.postdata.readingTime}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div
                        className="thumbnail axil-carousel axil-arrow-button botton-bottom-transparent axil-carousel slick-carousel-0 slick-initialized slick-slider slick-dotted">
                        {post.postdata.thumbnail.gallery.length > 0 && (
                            <Slider {...settings}>
                                {post.postdata.thumbnail.gallery.map((item, index) => {
                                    return (
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            key={`gallery-item-${index}`}
                                        >
                                            <a>
                                                <Image
                                                    width={850}
                                                    height={450}
                                                    className="w-100"
                                                    src={item}
                                                    alt="Blog Images"
                                                />
                                            </a>
                                        </Link>
                                    );
                                })}
                            </Slider>
                        )}
                    </div>

                    <div className="content">
                        <p>{post.postdata.excerpt}</p>
                        <Link href={`/blog/${post.slug}`}>
                            <a className="axil-button btn-large btn-transparent">
                                <span className="button-text">Read More</span>
                                <span className="button-icon"></span>
                            </a>
                        </Link>
                    </div>
                </div>
            )}

            {postType === "sticky" && (
                <div className="axil-blog-list sticky-blog">
                    <div className="blog-top">
                        <h3 className="title">
                            <Link href={`/blog/${post.slug}`}>{post.postdata.title}</Link>
                        </h3>
                        <div className="info">
                            <div className="info d-flex align-items-center">
                                <h6 className="mb--0 pr--10">BBC News</h6>
                                <ul className="blog-meta d-flex align-items-center liststyle">
                                    <li>{post.postdata.publishedAt}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="sticky">
                            <i className="fas fa-link"/>
                        </div>
                        <div className="shape-group">
                            <div className="shape shape-1">
                                <Image width={146} height={71} src="/images/others/shape-17.svg" alt="Shape Image"/>
                            </div>
                            <div className="shape shape-2">
                                <Image width={146} height={71} src="/images/others/shape-18.svg" alt="Shape Image"/>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {postType === "quote" && (
                <div className="axil-blog-list quote-blog">
                    <div className="blog-top">
                        <blockquote>
                            <h3 className="title">
                                <Link href={`/blog/${post.slug}`}>{post.postdata.title}</Link>
                            </h3>
                        </blockquote>
                        <div className="author">
                            <div className="author-thumb">
                                <Image width={50} height={50} src="/images/blog/author-01.jpg" alt="Blog Author"/>
                            </div>
                            <div className="info">
                                <h6>{author.name}</h6>
                                <ul className="blog-meta">
                                    <li>{author.designation}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="shape-group">
                            <div className="shape shape-1">
                                <i className="icon icon-shape-17"/>
                            </div>
                            <div className="shape shape-2">
                                <i className="icon icon-shape-18"/>
                            </div>
                            <div className="shape shape-3">
                                <i className="icon icon-quote"/>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {postType === "video" && (
                <div className="axil-blog-list">
                    <div className="blog-top">
                        <h3 className="title">
                            <Link href={`/blog/${post.slug}`}>{post.postdata.title}</Link>
                        </h3>
                        <div className="author">
                            <div className="author-thumb">
                                {author.avatar && (
                                    <Image
                                        width={50}
                                        height={50}
                                        src={author.avatar}
                                        alt="Blog Author"
                                    />
                                )}
                            </div>
                            <div className="info">
                                <h6>{author.name}</h6>
                                <ul className="blog-meta">
                                    <li>{post.postdata.publishedAt}</li>
                                    <li>{post.postdata.readingTime}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="thumbnail position-relative">
                        <Link href={`/blog/${post.slug}`}>
                            <a>
                                <Image
                                    width={850}
                                    height={450}
                                    className="w-100"
                                    src={post.postdata.thumbnail.large}
                                    alt="Blog Images"
                                />
                            </a>
                        </Link>
                        <div className="video-button position-to-top">
                            <a className="play__btn video-btn"
                               href="https://www.youtube.com/watch?v=Pj_geat9hvI"
                               data-bs-toggle="modal"
                               data-bs-target="#exampleModal">
                                <span className="triangle"/>
                            </a>
                        </div>
                    </div>
                    <div className="content">
                        <p>{post.postdata.excerpt}</p>
                        <Link href={`/blog/${post.slug}`}>
                            <a className="axil-button btn-large btn-transparent">
                                <span className="button-text">Read More</span>
                                <span className="button-icon"/>
                            </a>
                        </Link>
                    </div>
                </div>
            )}

            {(isWindow && post.postdata.videoUrl) && (
                <VideoPlayer url={post.postdata.videoUrl}/>
            )}
        </>
    );
};

export default BlogPost;
