import Head from 'next/head';
import BannerSeven from '../../components/banners/BannerSeven';
import Layout from '../../components/layouts/Layout';
import PortfolioOne from '../../components/portfolio/PortfolioOne';
import {fetchAPI } from "../../helpers/api";

const Portfolio = ({projects}) => {
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

                <PortfolioOne bgColor="bg-transparent" projects={projects}/>
            </main>
        </Layout>
    );
};

export default Portfolio;


export async function getStaticProps() {
	const [projectsRes] = await Promise.all([
	  fetchAPI("/portfolios", {
		populate: ["image"],
		fields: ["title", "slug", "description"],
		pagination: {
		  pageSize: 6,
		},
		publicationState: "live",
	  }),
	]);
  
	return {
	  props: {
		projects: projectsRes.data,
	  },
	  revalidate: 3600,
	};
  }