import fs from 'fs';
import matter from 'gray-matter';
import {marked} from 'marked';
import Image from 'next/image';
import Head from 'next/head';
import path from 'path';
import BlogSidebar from '../../components/blogs/BlogSidebar';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import CallToActionOne from '../../components/call-to-actions/CallToActionOne';
import Layout from '../../components/layouts/Layout';
import AuthorData from '../../data/Authors.json';
import {getCategories, getTags} from '../../helpers/utilities';

const BlogDetails = ({blogdata, slug, content, allPosts}) => {
    const getAuthorInfo = (id, type) => {
        const author = AuthorData.find((author) => {
            return author.id === id;
        });

        if (type === "name") {
            return author.name;
        } else if (type === "avatar") {
            return author.avatar;
        } else if (type === "message") {
            return author.message;
        } else if (type === "socialLinks") {
            return author.socialLinks;
        }
    };

    return (
        <Layout>
            <Head>
                <title>
                    Blog Details || keystroke Creative Agency Bootstrap5 Template
                </title>
            </Head>

            <Breadcrumb
                title="Blog Details"
                root="Blog"
                rootUrl="/blog"
                current="Blog Details"
            />

            <main className="page-wrapper">
                <div className="axil-blog-area ax-section-gap bg-color-white">
                    <div className="container">
                        <div className="row row--40">
                            <div className="col-lg-8 col-md-12 col-12">
                                <div className="axil-blog-details-area">
                                    <div className="wrapper">
                                        <div className="blog-top">
                                            <h3 className="title">{blogdata.title}</h3>
                                            <div className="author">
                                                <div className="author-thumb">
                                                    <Image
                                                        width={50}
                                                        height={50}
                                                        src={getAuthorInfo(blogdata.authorId, "avatar")}
                                                        alt={getAuthorInfo(blogdata.authorId, "name")}
                                                    />
                                                </div>
                                                <div className="info">
                                                    <h6>{getAuthorInfo(blogdata.authorId, "name")}</h6>
                                                    <ul className="blog-meta">
                                                        <li>{blogdata.publishedAt}</li>
                                                        <li>{blogdata.readingTime}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="thumbnail mb--60 mb_sm--20 mb_md--20">
                                            <Image
                                                width={850}
                                                height={450}
                                                className="w-100"
                                                src={blogdata.thumbnail.large}
                                                alt="Blog Images"
                                            />
                                        </div>

                                        <div className="content mb--40 mb_sm--20 mb_md--20">
                                            <div
                                                dangerouslySetInnerHTML={{__html: marked(content)}}
                                            />
                                        </div>

                                        <ul className="liststyle bullet-list">
                                            <li>Email is a crucial channel in any marketing.</li>
                                            <li>Curious what to say? How to say it?</li>
                                            <li>Whether you’re kicking off a new campaign.</li>
                                            <li>
                                                Habitasse per feugiat aliquam luctus accumsan curae
                                            </li>
                                        </ul>

                                        <div
                                            className="blog-share d-flex flex-wrap align-items-center mb--80 mb_sm--30 mb">
                                            <span className="text">Share on:</span>
                                            <ul className="social-share d-flex">
                                                <li>
                                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                                        <i className="fab fa-facebook-f"/>Facebook
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                                        <i className="fab fa-twitter"/>Twitter
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                                        <i className="fab fa-linkedin-in"/>Linkedin
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="axil-blog-author">
                                            <div className="author d-flex">
                                                <div className="author-thumb">
                                                    <Image
                                                        width={100}
                                                        height={100}
                                                        src={getAuthorInfo(blogdata.authorId, "avatar")}
                                                        alt={getAuthorInfo(blogdata.authorId, "name")}
                                                    />
                                                </div>
                                                <div className="info">
                                                    <h5 className="title">
                                                        <a href="#">
                                                            {getAuthorInfo(blogdata.authorId, "name")}
                                                        </a>
                                                    </h5>
                                                    <p className="subtitle-2">
                                                        {getAuthorInfo(blogdata.authorId, "message")}
                                                    </p>
                                                    <ul className="social-share justify-content-start">
                                                        {getAuthorInfo(
                                                            blogdata.authorId,
                                                            "socialLinks"
                                                        )?.map((social, socialIndex) => (
                                                            <li key={`social-${socialIndex}`}>
                                                                <a href={social.url} target="_blank" rel="noreferrer">
                                                                    <i className={`fab fa-${social.type}`}/>
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="axil-blog-comment mt--60 mt_md--40 mt_sm--30">
                                        <h4 className="mb--40">Comments:</h4>
                                        <div className="comment-list">
                                            {blogdata.comments?.map((comment, commentIndex) => (
                                                <div key={`reply-${commentIndex}`}>
                                                    <div className="comment">
                                                        <div className="thumbnail">
                                                            <Image
                                                                width={60}
                                                                height={60}
                                                                src={getAuthorInfo(comment.authorId, "avatar")}
                                                                alt="Blog Comment"
                                                            />
                                                        </div>
                                                        <div className="content">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h5>
                                                                        {getAuthorInfo(comment.authorId, "name")}
                                                                    </h5>
                                                                </div>
                                                                <div className="coment-date">
                                                                    <p>{comment.commentedAt}</p>
                                                                    <a className="reply-btn" href="#">
                                                                        <i className="fas fa-reply"/>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <p className="description">{comment.title}</p>
                                                        </div>
                                                    </div>

                                                    {comment.replies?.map((reply, replyIndex) => (
                                                        <div
                                                            className="comment comment-reply"
                                                            key={`reply-${replyIndex}`}
                                                        >
                                                            <div className="thumbnail">
                                                                <Image
                                                                    width={60}
                                                                    height={60}
                                                                    src={getAuthorInfo(reply.authorId, "avatar")}
                                                                    alt="Blog Comment"
                                                                />
                                                            </div>
                                                            <div className="content">
                                                                <div className="heading">
                                                                    <div className="title">
                                                                        <h5>
                                                                            {getAuthorInfo(reply.authorId, "name")}
                                                                        </h5>
                                                                    </div>
                                                                    <div className="coment-date">
                                                                        <p>{reply.repliedAt}</p>
                                                                        <a className="reply-btn" href="#">
                                                                            <i className="fas fa-reply"/>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <p className="description">{reply.title}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="axil-comment-form mt--75 mt_md--40 mt_sm--30">
                                        <div className="inner">
                                            <h4 className="mb--40">Leave a comment:</h4>
                                            <form>
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <input type="text"/>
                                                            <label>Name</label>
                                                            <span className="focus-border"></span>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <input type="email"/>
                                                            <label>Email address</label>
                                                            <span className="focus-border"></span>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <input type="text"/>
                                                            <label>Company name</label>
                                                            <span className="focus-border"></span>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <input type="text"/>
                                                            <label>Website</label>
                                                            <span className="focus-border"></span>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <textarea></textarea>
                                                            <label>Write your comment here…</label>
                                                            <span className="focus-border"></span>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="comment-submit-btn">
                                                            <button
                                                                className="axil-button btn-large btn-transparent"
                                                                type="submit"
                                                            >
                                                                <span className="button-text">Submit</span>
                                                                <span className="button-icon"/>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-12 mt_md--40 mt_sm--40">
                                <BlogSidebar
                                    categories={getCategories(allPosts)}
                                    tags={getTags(allPosts)}
                                    recentPost={allPosts.slice(0, 3)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <CallToActionOne/>
            </main>
        </Layout>
    );
};

export default BlogDetails;

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join("data/posts"));
    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace(".md", ""),
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({params: {slug}}) {
    const mardownWithMeta = fs.readFileSync(
        path.join("data/posts", `${slug}.md`),
        "utf-8"
    );

    const {data: blogdata, content} = matter(mardownWithMeta);

    const files = fs.readdirSync(path.join("data/posts"));
    const allPosts = files.map((filename) => {
        const mardownWithMeta = fs.readFileSync(
            path.join("data/posts", filename),
            "utf-8"
        );

        const blogSlug = filename.replace(".md", "");
        const {data: postdata} = matter(mardownWithMeta);

        return {
            slug: blogSlug,
            postdata,
        };
    });

    return {
        props: {
            blogdata,
            slug,
            content,
            allPosts,
        },
    };
}
