import Head from "next/head";
import {useState} from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../components/layouts/Layout";
import TestimonialCard from "../components/testimonials/TestimonialCard";
import CustomerReviewsData from "../data/CustomerReviews.json";
import Image from "next/image";

const Testimonial = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const changeActive = (index) => {
        setActiveTestimonial(index);
    };

    return (
        <Layout>
            <Head>
                <title>Customer Reviews || keystroke Creative Agency Bootstrap5 Template</title>
            </Head>

            <Breadcrumb title="Customer Reviews" current="Customer Reviews"/>

            <main className="page-wrapper">
                <div className="axil-testimonial-area ax-section-gap bg-color-white">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                                <div className="section-title text-start">
                                    <h2 className="title">Google Reviews</h2>
                                    <p className="subtitle-2 mb--50">
                                        In vel varius turpis, non dictum sem. Aenean in efficitur
                                        ipsum, in egestas ipsum. Mauris in mi ac tellus.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-12 mt_mobile--20">
                                <div className="axil-social-share text-start text-sm-right">
                                    <Image width={213} height={70} src="/images/shape/google.png" alt="Social Icons"/>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-activation">
                            <div className="row axil-testimonial-single">
                                {CustomerReviewsData?.map((review, index) => {
                                    return (
                                        review.company === "google" && (
                                            <TestimonialCard
                                                key={`twstimonial-${index}`}
                                                column="col-lg-6 mt--60 mt_sm--30 mt_md--30"
                                                testimonialClass="axil-testimonial style-var--2 axil-control testimonial"
                                                data={review}
                                                index={index}
                                                activeIndex={activeTestimonial}
                                                changeActive={changeActive}
                                            />
                                        )
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="axil-testimonial-area ax-section-gap bg-color-lightest">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                                <div className="section-title text-start">
                                    <h2 className="title">Facebook Reviews</h2>
                                    <p className="subtitle-2 mb--50">
                                        In vel varius turpis, non dictum sem. Aenean in efficitur
                                        ipsum, in egestas ipsum. Mauris in mi ac tellus.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-12 mt_mobile--20">
                                <div className="axil-social-share text-start text-sm-right">
                                    <Image width={70} height={70} src="/images/shape/facebook.png" alt="Social Icons"/>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-activation">
                            <div className="row axil-testimonial-single">
                                {CustomerReviewsData?.map((review, index) => {
                                    return (
                                        review.company === "facebook" && (
                                            <TestimonialCard
                                                key={`twstimonial-${index}`}
                                                column="col-lg-6 mt--60 mt_sm--30 mt_md--30"
                                                testimonialClass="axil-testimonial style-var--2 axil-control testimonial"
                                                data={review}
                                                index={index}
                                                activeIndex={activeTestimonial}
                                                changeActive={changeActive}
                                            />
                                        )
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="axil-testimonial-area ax-section-gap bg-color-white">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                                <div className="section-title text-start">
                                    <h2 className="title">Yelp Reviews</h2>
                                    <p className="subtitle-2 mb--50">
                                        In vel varius turpis, non dictum sem. Aenean in efficitur
                                        ipsum, in egestas ipsum. Mauris in mi ac tellus.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-12 mt_mobile--20">
                                <div className="axil-social-share text-start text-sm-right">
                                    <Image width={136} height={70} src="/images/shape/yelp.png" alt="Social Icons"/>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-activation">
                            <div className="row axil-testimonial-single">
                                {CustomerReviewsData?.map((review, index) => {
                                    return (
                                        review.company === "yelp" && (
                                            <TestimonialCard
                                                key={`twstimonial-${index}`}
                                                column="col-lg-6 mt--60 mt_sm--30 mt_md--30"
                                                testimonialClass="axil-testimonial style-var--2 axil-control testimonial"
                                                data={review}
                                                index={index}
                                                activeIndex={activeTestimonial}
                                                changeActive={changeActive}
                                            />
                                        )
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default Testimonial;
