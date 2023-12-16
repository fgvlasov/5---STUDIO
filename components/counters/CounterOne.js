import CounterData from '../../data/Counters.json';
import SectionTitle from '../common/SectionTitle';
import CounterCardOne from './CounterCardOne';

const CounterOne = () => {
    const counterClass = (i) => {
        if (i === 0) return "axil-counterup mt--60 text-center counter-first";
        else if (i === 1) return "axil-counterup mt--60 text-center counter-second";
        else if (i === 2)
            return "axil-counterup mt--60 mt_md--30 mt_sm--30 text-center counter-third";
        else if (i === 3) return "axil-counterup mt--60 text-center counter-four";
    };

    return (
        <div className="axil-counterup-area ax-section-gap bg-color-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            title="Design startup movement"
                            subtitle="experts in field"
                            description="In vel varius turpis, non dictum sem. Aenean in efficitur ipsum, in egestas ipsum. Mauris in mi ac tellus."
                            color="extra08-color"
                            alignment="center"
                        />
                    </div>
                </div>
                <div className="row">
                    {CounterData?.map((counter, index) => (
                        <CounterCardOne
                            key={`counter-${index}`}
                            column="col-lg-3 col-md-6 col-sm-6 col-6"
                            counterClass={counterClass(index)}
                            data={counter}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CounterOne;
