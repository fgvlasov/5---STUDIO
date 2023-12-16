import {useState} from 'react';
import TestimonialData from '../../data/Testimonials.json';
import SectionTitle from '../common/SectionTitle';
import TestimonialCard from './TestimonialCard';

const TestimonialTwo = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const changeActive = (index) => {
        setActiveTestimonial(index);
    };

    return (
        <div className="axil-testimonial-area ax-section-gap bg-color-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <SectionTitle
                            title="Feedbacks from my clients"
                            subtitle="testimonials"
                            description="In vel varius turpis, non dictum sem. Aenean in efficitur ipsum, in egestas ipsum. Mauris in mi ac tellus."
                            color="extra05-color"
                            alignment="left"
                        />
                    </div>
                </div>
                <div className="testimonial-activation">
                    <div className="row axil-testimonial-single">
                        {TestimonialData?.map((testimonial, index) => (
                            <TestimonialCard
                                key={`twstimonial-${index}`}
                                column="col-lg-6 mt--60 mt_sm--30 mt_md--30"
                                testimonialClass="axil-testimonial testimonial axil-control"
                                data={testimonial}
                                index={index}
                                activeIndex={activeTestimonial}
                                changeActive={changeActive}
                            />
                        ))}
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="axil-followers">
                            <ul className="followers-list">
                                <li className="dribbble">
                                    <a href="https://dribbble.com/" target="_blank" rel="noreferrer">
                                        <i className="fab fa-dribbble"/>
                                        <span>60k Followers</span>
                                    </a>
                                </li>
                                <li className="behance">
                                    <a href="https://www.behance.net/" target="_blank" rel="noreferrer">
                                        <i className="fab fa-behance"/>
                                        <span>30k Followers</span>
                                    </a>
                                </li>
                                <li className="linkedin">
                                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                        <i className="fab fa-linkedin-in"/>
                                        <span>13k Connections</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialTwo;
