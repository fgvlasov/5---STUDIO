import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import BannerFive from '../components/banners/BannerFive';
import BlogOne from '../components/blogs/BlogOne';
import CallToActionOne from '../components/call-to-actions/CallToActionOne';
import CounterOne from '../components/counters/CounterOne';
import Layout from '../components/layouts/Layout';
import PortfolioOne from '../components/portfolio/PortfolioOne';
import ServiceTwo from '../components/services/ServiceTwo';
import TeamOne from '../components/teams/TeamOne';
import TestimonialOne from '../components/testimonials/TestimonialOne';

const HomeFive = ({posts}) => {
    const layoutSettings = {
        header: {
            style: "two",
            leftColumn: "col-lg-3 col-xl-3 col-md-6 col-sm-6 col-8 header-left",
            rightColumn: "col-lg-2 col-xl-3 col-md-6 col-sm-6 col-4 header-right",
        },
        footer: {
            showCopyrightOnly: false,
        },
    };

    return (
        <Layout layoutSettings={layoutSettings}>
            <Head>
                <title>Home 05 || keystroke Creative Agency Bootstrap5 Template</title>
            </Head>

            <main className="page-wrapper">
                <BannerFive/>

                <ServiceTwo/>

                <PortfolioOne/>

                <CounterOne/>

                <TestimonialOne/>

                <TeamOne/>

                <BlogOne posts={posts.slice(0, 2)}/>

                <CallToActionOne/>
            </main>
        </Layout>
    );
};

export default HomeFive;

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
