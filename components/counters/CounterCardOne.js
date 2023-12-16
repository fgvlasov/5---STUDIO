import Image from 'next/image';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer';

const CounterCardOne = ({column, counterClass, data}) => {
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    return (
        <div className={column} data-aos="aos-fade-in-up">
            <div className={counterClass}>
                <div className="icon">
                    <Image
                        width={data.icon.width}
                        height={data.icon.height}
                        src={data.icon.src}
                        alt={data.title}
                    />
                </div>
                <h3 className="count" ref={ref}>
                    <CountUp start={0} end={inView ? data.amount : 0}/>
                </h3>
                <p>{data.title}</p>
            </div>
        </div>
    );
};

export default CounterCardOne;
