import {useEffect, useState} from 'react';
import {useInView} from 'react-intersection-observer';
import SectionTitle from '../common/SectionTitle';
import ServiceCardOne from './ServiceCardOne';

const ServiceSection = (
    {
        sectionId,
        sectionTitle,
        sectionSubtitle,
        sectionBg,
        serviceType,
        services,
        changeActiveSection,
    }
) => {
    const [activeService, setActiveService] = useState(1);

    const changeActive = (index) => {
        setActiveService(index);
    };

    const {ref, inView, entry} = useInView({
        threshold: 0,
    });

    useEffect(() => {
        if (inView) {
            changeActiveSection(sectionId);
        }
    }, [inView, changeActiveSection, sectionId]);

    return (
        <div
            ref={ref}
            id={sectionId}
            className={`section axil-service-area ${sectionBg} ax-section-gap`}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            title={sectionTitle}
                            subtitle={sectionSubtitle}
                            color="extra04-color"
                            alignment="left"
                        />
                    </div>
                </div>

                <div className="row">
                    {services?.map((service, index) => (
                        <ServiceCardOne
                            key={service.id}
                            column="col-lg-4 col-md-6 col-sm-6 col-12"
                            index={index}
                            activeIndex={activeService}
                            alignment="left"
                            data={service}
                            changeActive={changeActive}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;
