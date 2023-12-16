import Head from 'next/head';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
import Layout from '../../components/layouts/Layout';
import TeamData from '../../data/Team.json';

export async function getStaticPaths() {
    return {
        paths: TeamData?.map(({id}) => ({
            params: {
                id: id.toString(),
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const {params} = context;
    const teamData = TeamData.find(
        ({id}) => id.toString() === params.id.toString()
    );

    return {
        props: {
            teamData,
        },
    };
}

const TeamDetails = ({teamData}) => {
    const socialIcon = (type) => {
        if (type === "facebook") return "facebook-f";
        else if (type === "twitter") return "twitter";
        else if (type === "pinterest") return "pinterest-p";
        else if (type === "linkedin") return "linkedin-in";
        else if (type === "instagram") return "instagram";
        else if (type === "vimeo") return "vimeo-v";
        else if (type === "dribble") return "dribbble";
        else if (type === "behance") return "behance";
    };

    return (
        <Layout>
            <Head>
                <title>
                    Team Details || Keystroke Creative Agency Bootstrap 5 Template
                </title>
            </Head>

            <main className="page-wrapper">
                <div className="axil-team-details-area axil-team-details-wrapper theme-gradient-4">
                    <div className="container">
                        <div className="row align-items-center row--60">
                            <div className="col-lg-6 col-xl-5 col-md-12 col-12 order-2 order-lg-1">
                                <div className="team-details-inner">
                                    <div className="inner">
                                        <h1 className="title">{teamData.name}</h1>
                                        <span className="subtitle">{teamData.designation}</span>
                                        <ul className="social-share d-flex justify-content-start liststyle flex-wrap">
                                            {teamData.socials?.map((social, index) => (
                                                <li key={`social-${index}`}>
                                                    <a href={social.url}>
                                                        <i
                                                            className={`fab fa-${socialIcon(social.type)}`}
                                                        />
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="subtitle-2">{teamData.introduction}</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-6 col-xl-6 offset-xl-1 col-md-12 col-12 mt_md--40 mt_sm--40 order-1 order-lg-2 mb_sm--20 mb_md--20">
                                <div className="thumbnail text-end">
                                    <div className="inner">
                                        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} className="team-image">
                                            <Image
                                                width={630}
                                                height={628}
                                                src={teamData.image}
                                                alt={teamData.name}
                                            />
                                        </Tilt>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default TeamDetails;
