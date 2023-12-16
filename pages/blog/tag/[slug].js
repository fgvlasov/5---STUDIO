import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import path from "path";
import BlogPost from "../../../components/blogs/BlogPost";
import BlogSidebar from "../../../components/blogs/BlogSidebar";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import CallToActionOne from "../../../components/call-to-actions/CallToActionOne";
import Layout from "../../../components/layouts/Layout";
import {getCategories, getTags, slugify} from "../../../helpers/utilities";

const TagPost = ({slug, posts, allPosts}) => {
    return (
        <Layout>
            <Head>
                <title>Blog || keystroke Creative Agency Bootstrap5 Template</title>
            </Head>

            <Breadcrumb
                title={slug.replace("-", " ")}
                current={slug.replace("-", " ")}
            />

            <main className="page-wrappper">
                <div className="axil-blog-area ax-section-gap bg-color-white">
                    <div className="container">
                        <div className="row row--40">
                            <div className="col-lg-8 col-md-12 col-12">
                                {posts?.map((post, index) => (
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

export default TagPost;

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join("data/posts"));
    let tempStorage = [];

    const temppaths = files.map((filename) => {
        const markdownWithMeta = fs.readFileSync(
            path.join("data/posts", filename),
            "utf-8"
        );

        const {data: frontmatter} = matter(markdownWithMeta);

        frontmatter.tags.map((tag) => {
            let slug = slugify(tag);
            tempStorage.push({params: {slug}});
        });
    });

    const paths = tempStorage.filter((item, index) => {
        return tempStorage.indexOf(item) === index;
    });

    return {paths, fallback: false};
}

export async function getStaticProps({params: {slug}}) {
    const files = fs.readdirSync(path.join("data/posts"));
    let tempStorage = [];

    const tempPosts = files.map((filename) => {
        const postSlug = filename.replace(".md", "");

        const markdownWithMeta = fs.readFileSync(
            path.join("data/posts", filename),
            "utf-8"
        );

        const {data: frontmatter} = matter(markdownWithMeta);

        frontmatter.tags.map((tag) => {
            let tagSlug = slugify(tag);
            if (slug === tagSlug) {
                tempStorage.push({
                    postdata: frontmatter,
                    slug: postSlug,
                });
            }
        });
    });

    const posts = tempStorage.filter((post) => {
        return {
            post,
        };
    });

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
            slug,
            posts,
            allPosts,
        },
    };
}
