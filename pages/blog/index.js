import Head from "next/head";

import {useEffect, useState} from "react";
import BlogPost from "../../components/blogs/BlogPost";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import CallToActionOne from "../../components/call-to-actions/CallToActionOne";
import Layout from "../../components/layouts/Layout";
import Pagination from "../../components/pagination/Pagination";

import { fetchAPI } from 'helpers/api';

const Blog = ({posts, blogArticles}) => {
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);



    const handleClick = (num) => {
        setPage(num);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };



    return (
        <Layout>
            <Head>
                <title>Blog || {process.env.NEXT_WEBSITE_NAME}</title>
            </Head>

            <Breadcrumb/>

            <main className="page-wrappper">
                <div className="axil-blog-area ax-section-gap bg-color-white">
                    <div className="container">
                        <div className="row row--40">
                            <div className="col-lg-8 col-md-12 col-12">
                                {blogArticles?.map((post, index) => (
                                    <div
                                        key={`blog-post-${index}`}
                                        className={
                                            index !== 0 ? "mt--80 mt_md--30 mt_sm--30 mt_lg--50" : ""
                                        }
                                        data-aos="aos-fade-in-up"
                                        data-aos-duration="1000"
                                    >
                                        <BlogPost post={post}/>
                                    </div>
                                ))}

                                <Pagination
                                    totalPages={totalPages}
                                    pageNumber={page}
                                    handleClick={handleClick}
                                />
                            </div>
                            {/* <div className="col-lg-4 col-md-12 col-12 mt_md--40 mt_sm--40">
                                <BlogSidebar
                                    categories={getCategories(posts)}
                                    tags={getTags(posts)}
                                    recentPost={posts.slice(0, 3)}
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

export default Blog;

export async function getStaticProps() {
	const [blogsRes] = await Promise.all([
	  fetchAPI("/blogs", {
		populate: ["image"],
		fields: ["title", "slug", "text"],
		pagination: {
		  pageSize: 6,
		},
		publicationState: "live",
	  }),
	]);
  
	return {
	  props: {
		blogArticles: blogsRes.data,
	  },
	  revalidate: 3600,
	};
  }
// export async function getStaticProps() {
//     // Get files from the post directory
//     const files = fs.readdirSync(path.join("data/posts"));

//     // Get slug and postdata from posts
//     const posts = files.map((filename) => {
//         const slug = filename.replace(".md", "");

//         // Get postdata
//         const mardownWithMeta = fs.readFileSync(
//             path.join("data/posts", filename),
//             "utf-8"
//         );

//         const {data: postdata} = matter(mardownWithMeta);

//         return {
//             slug,
//             postdata,
//         };
//     });

//     return {
//         props: {
//             posts: posts,
//         },
//     };
// }

