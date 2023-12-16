import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import BannerFour from '../components/banners/BannerFour';
import BlogOne from '../components/blogs/BlogOne';
import BrandOne from '../components/brands/BrandOne';
import CaseStudyThree from '../components/case-study/CaseStudyThree';
import Layout from '../components/layouts/Layout';
import TestimonialOne from '../components/testimonials/TestimonialOne';

const HomeFour = ({posts}) => {
    const layoutSettings = {
        header: {
            style: 'four',
            leftColumn: 'col-lg-3 col-md-6 col-sm-6 col-8',
            rightColumn: 'col-lg-9 col-md-6 col-sm-6 col-4',
        },
        footer: {
            style: 'three',
        },
    };

    return (
        <Layout layoutSettings={layoutSettings}>
            <Head>
                <title>Home 04 || keystroke Creative Agency Bootstrap5 Template</title>
            </Head>

            <main className="page-wrappper">
                <BannerFour/>

                <CaseStudyThree/>

                <TestimonialOne/>

                <BrandOne
                    title="I’ve built <br/> solutions for..."
                    subtitle="clients"
                />

                <BlogOne posts={posts.slice(0, 2)}/>
            </main>
        </Layout>
    );
};

export default HomeFour;

export async function getStaticProps() {
    const files = fs.readdirSync(path.join("data/posts"));

    const posts = files.map((filename) => {
        const slug = filename.replace(".md", "");

        const mardownWithMeta = fs.readFileSync(
            path.join("data/posts", filename),
            "utf-8"
        );

        const {data: postdata} = matter(mardownWithMeta);

        return {
            slug,
            date: postdata.publishedAt,
            postdata,
        };
    });

    return {
        props: {
            posts: posts
        },
    };
}
