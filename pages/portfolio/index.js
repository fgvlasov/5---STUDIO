import Head from 'next/head';
import BannerSeven from '../../components/banners/BannerSeven';
import Layout from '../../components/layouts/Layout';
import PortfolioOne from '../../components/portfolio/PortfolioOne';

const Portfolio = () => {
    return (
        <Layout>
            <Head>
                <title>
                    Portfolio || keystroke Creative Agency Bootstrap5 Template
                </title>
            </Head>

            <main className="page-wrapper">
                <BannerSeven
                    title="Our projects"
                    subtitle="A quick view of industry specific problems solved with design by the awesome team at Keystroke."
                />

                <PortfolioOne bgColor="bg-transparent"/>
            </main>
        </Layout>
    );
};

export default Portfolio;
