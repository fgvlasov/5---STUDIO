import Head from 'next/head';
import BannerThree from '../components/banners/BannerThree';
import BrandOne from '../components/brands/BrandOne';
import CaseStudyOne from '../components/case-study/CaseStudyOne';
import CaseStudyTwo from '../components/case-study/CaseStudyTwo';
import ContactOne from '../components/contact/ContactOne';
import Layout from '../components/layouts/Layout';
import TestimonialTwo from '../components/testimonials/TestimonialTwo';

const HomeThree = () => {
    const layoutSettings = {
        header: {
            style: "three",
            leftColumn: "col-lg-4 col-md-6 col-sm-6 col-8 header-left",
            rightColumn: "col-lg-8 col-md-6 col-sm-6 col-4 header-right",
        },
        footer: {
            showCopyrightOnly: true,
        },
    };

    return (
        <Layout layoutSettings={layoutSettings}>
            <Head>
                <title>Home 03 || keystroke Creative Agency Bootstrap5 Template</title>
            </Head>

            <main className="page-wrapper">
                <BannerThree/>

                <CaseStudyOne/>

                <CaseStudyTwo/>

                <BrandOne bgColor="bg-color-lightest"/>

                <TestimonialTwo/>

                <ContactOne/>
            </main>
        </Layout>
    );
};

export default HomeThree;
