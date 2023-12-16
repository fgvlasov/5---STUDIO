import Image from 'next/image';
import Link from "next/link";

const TestimonialCard = (
    {
        column,
        testimonialClass,
        data,
        index,
        activeIndex,
        changeActive,
    }
) => {
    return (
        <div className={column} data-aos="aos-fade-in-up">
            <div
                className={`${testimonialClass} ${
                    activeIndex === index ? "active" : ""
                }`}
                onMouseEnter={() => changeActive(index)}
            >
                <div className="inner">
                    <div className="clint-info-wrapper">
                        <div className="thumb">
                            <Image
                                width={60}
                                height={60}
                                src={data.client.image}
                                alt={data.client.fullName}
                            />
                        </div>
                        <div className="client-info">
                            <h4 className="title">{data.client.fullName}</h4>
                            <span>{data.client.designation}</span>
                        </div>
                    </div>
                    <div className="description">
                        <p className="subtitle-3">{data.description}</p>
                        <Link href="#">
                            <a className="axil-link-button">
                                Read Project Case Study
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
