import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import BannerSix from '../components/banners/BannerSix';
import CallToActionOne from '../components/call-to-actions/CallToActionOne';
import SectionTitle from '../components/common/SectionTitle';
import CounterOne from '../components/counters/CounterOne';
import Layout from '../components/layouts/Layout';
import ServiceCardOne from '../components/services/ServiceCardOne';
import ServiceData from '../data/Services.json';
import {camelCaseToDashed} from '../helpers/utilities';

const ServiceTwo = () => {
    const [serviceCapabilities, setServiceCapabilities] = useState([]);
    const [servicesOurWay, setServicesOurWay] = useState([]);

    const [activeService, setActiveService] = useState(1);

    const changeActive = (index) => {
        setActiveService(index);
    };

    const getServicesByCategory = () => {
        const capabilities = ServiceData.filter(
                (service) => service.category === 'Our capabilities'
            ),
            ourWays = ServiceData.filter(
                (service) => service.category === 'Our ways'
            );

        setServiceCapabilities(capabilities);
        setServicesOurWay(ourWays);
    };

    useEffect(() => {
        getServicesByCategory();
    }, []);

    return (
        <Layout>
            <Head>
                <title>Services || keystroke Creative Agency Bootstrap5 Template</title>
            </Head>

            <main className="page-wrapper">
                <BannerSix/>

                <CounterOne/>

                <div className="axil-service-area ax-section-gap bg-color-lightest">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    title="Our capabilities"
                                    subtitle="what we can do for you"
                                    color="extra08-color"
                                    alignment="left"
                                />
                            </div>
                        </div>

                        <div className="row">
                            {serviceCapabilities?.map((service, index) => (
                                <ServiceCardOne
                                    key={service.id}
                                    column="col-lg-4 col-md-6 col-sm-6 col-12"
                                    index={index}
                                    activeIndex={activeService}
                                    alignment="center"
                                    data={service}
                                    changeActive={changeActive}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="axil-service-area ax-section-gap bg-color-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-xl-8">
                                <SectionTitle
                                    title="This is our way"
                                    subtitle="process"
                                    description="In vel varius turpis, non dictum sem. Aenean in efficitur ipsum, in egestas ipsum. Mauris in mi ac tellus."
                                    color="extra08-color"
                                    alignment="left"
                                />
                            </div>
                        </div>
                        <div className="row">
                            {servicesOurWay?.map((service, index) => (
                                <div className="col-lg-4 col-md-6 col-12 mt--50 mt_md--40 mt_sm--30"
                                     key={`service-${index}`}>
                                    <div
                                        className={`axil-service-style--3 ${
                                            index === 1
                                                ? "color-var--2"
                                                : index === 2
                                                    ? "color-var--3"
                                                    : ""
                                        }`}
                                    >
                                        <div className="icon">
                                            <Image
                                                width={50}
                                                height={49}
                                                src={service.imageLayer}
                                                alt="Icon Images"
                                                layout="fixed"
                                            />
                                            <div className="text">{index + 1}</div>
                                        </div>
                                        <div className="content">
                                            <h4 className="title">
                                                <Link
                                                    href={`/services/${camelCaseToDashed(service.category)}/${service.slug}`}>
                                                    {`${index + 1}. ${service.title}`}
                                                </Link>
                                            </h4>
                                            <p>{service.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <CallToActionOne/>
            </main>
        </Layout>
    );
};

export default ServiceTwo;
