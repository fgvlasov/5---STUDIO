import Tilt from "react-parallax-tilt";
import SectionTitle from "../common/SectionTitle";
import Image from "next/image";

const WorkingProcess = ({process}) => {
    return (
        <div className="axil-working-process-area ax-section-gap theme-gradient-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            title={process.title}
                            subtitle="process"
                            description={process.description}
                            color="extra08-color"
                            alignment="center"
                            styleClass="mb--100 mb_sm--40 mb_md--40"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        {process.strategies?.map((strategy, index) => (
                            <div
                                key={`strategy-${index}`}
                                className={
                                    strategy.id % 2 === 0
                                        ? "axil-working-process mb--100 text-start mb_md--50 mb_sm--40"
                                        : "axil-working-process mb--100 mb_md--50 mb_sm--40"
                                }
                            >
                                <div
                                    className={
                                        strategy.id % 2 === 0
                                            ? "thumbnail order-1 order-lg-2"
                                            : "thumbnail"
                                    }
                                >
                                    <div className="image paralax-image">
                                        <Tilt tiltMaxAngleX={9} tiltMaxAngleY={9}>
                                            <Image width={410} height={414} src={strategy.image} alt="Process Images"/>
                                        </Tilt>
                                    </div>
                                </div>
                                <div
                                    className={
                                        strategy.id % 2 === 0
                                            ? "content order-2 order-lg-1"
                                            : "content"
                                    }
                                >
                                    <div className="inner">
                                        <div className="section-title">
                                            <span className="process-step-number">{strategy.id}</span>
                                            <span className={`sub-title ${strategy.highlightColor}`}>
                                              {strategy.subtitle}
                                            </span>
                                            <h2 className="title">{strategy.title}</h2>
                                            <p className="subtitle-2">{strategy.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkingProcess;
