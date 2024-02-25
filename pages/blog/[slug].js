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
import { fetchAPI } from 'helpers/api';
import { getStrapiMedia } from 'helpers/media';

const BlogDetails = ({blogdata}) => {

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
                                            <h3 className="title">{blogdata.attributes.title}</h3>
                                        </div>

                                        <div className="thumbnail mb--60 mb_sm--20 mb_md--20">
                                            <Image
                                                width={850}
                                                height={450}
                                                className="w-100"
                                                src={getStrapiMedia(blogdata.attributes.image)}
                                                alt="Blog Images"
                                            />
                                        </div>

                                        <div className="content mb--40 mb_sm--20 mb_md--20">
                                            <div
                                                dangerouslySetInnerHTML={{__html: marked(blogdata.attributes.text)}}
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
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-4 col-md-12 col-12 mt_md--40 mt_sm--40">
                                <BlogSidebar
                                    categories={getCategories(allPosts)}
                                    tags={getTags(allPosts)}
                                    recentPost={allPosts.slice(0, 3)}
                                />
                            </div> */}
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
	const blogsRes = await fetchAPI("/blogs", { fields: ["slug"]      
	},
	);
  
	const blogPaths = blogsRes.data.map((blog) => ({
	  params: {
		slug: blog.attributes.slug,
	  },
	}));
  
	return {
	  paths: [...blogPaths],
	  fallback: false,
	};
  }
  
  export async function getStaticProps({ params, locale }) {
	const [matchingBlogs] = await Promise.all([
	  fetchAPI("/blogs", {
		filters: { slug: params.slug },
		locale: locale,
		publicationState: "live",
		populate: "*",
	  }),
	]);
	const blogdata = matchingBlogs.data.length > 0 ? matchingBlogs.data[0] : null;
	return {
	  props: {
		blogdata,
	  },
	  revalidate: 3600,
	};
  }