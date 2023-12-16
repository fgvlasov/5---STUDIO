import CounterData from '../../data/Counters.json';
import CounterCardOne from "./CounterCardOne";
import SectionTitle from "../common/SectionTitle";

const CounterTwo = () => {
    const counterClass = (i) => {
        if (i === 0) return "axil-counterup text-center counter-1";
        else if (i === 1)
            return "axil-counterup text-center color-style-two mt--60 mt_mobile--40";
        else if (i === 2)
            return "axil-counterup text-center color-style-three mt_mobile--40";
        else if (i === 3)
            return "axil-counterup text-center color-style-four mt--60 mt_mobile--40";
    };

    return (
        <div className="axil-counterup-area ax-section-gap bg-color-white">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-12">
                        <SectionTitle
                            title="What makes us special?"
                            subtitle="experts in field"
                            description="Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero."
                            color="extra08-color"
                            alignment="left"
                        />
                        <div className="view-all-portfolio-button mt--40">
                            <a className="axil-button btn-large btn-transparent" href="#">
                                <span className="button-text">Careers</span>
                                <span className="button-icon"></span>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-6 offset-xl-1 col-12 mt_md--40 mt_sm--40">
                        <div className="row">
                            {CounterData?.map((counter, index) => (
                                <CounterCardOne
                                    key={`counter-${index}`}
                                    column="col-lg-6 col-md-6 col-sm-6 col-6"
                                    counterClass={counterClass(index)}
                                    data={counter}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CounterTwo;
