import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import Link from "next/link";

const TeamOne = () => {
    return (
        <div className="axil-team-area shape-position ax-section-gap bg-color-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xl-6">
                        <div className="thumbnail">
                            <div className="image">
                                <Image
                                    width={630}
                                    height={514}
                                    src="/images/team/team-group.png"
                                    alt="Team Images"
                                />
                            </div>
                            <div className="total-team-button">
                                <Link href="/team">
                                    <a>
                                        <span>20+</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-xl-5 offset-xl-1 mt_md--40 mt_sm--40">
                        <div className="content">
                            <div className="inner">
                                <SectionTitle
                                    title="Alone we can do so little; together we can do so much."
                                    subtitle="our team"
                                    description="Donec metus lorem, vulputate at sapien sit amet, auctor
                  iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus
                  velit. Aliquam tristique libero."
                                    color="extra08-color"
                                    alignment="left"
                                />
                                <div className="axil-button-group mt--40">
                                    <Link href="/team">
                                        <a className="axil-button btn-large btn-transparent">
                                            <span className="button-text">Our Team</span>
                                            <span className="button-icon"></span>
                                        </a>
                                    </Link>
                                    <a className="axil-button axil-link-button" href="#">
                                        Careers
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-group">
                <div className="shape shape-1 customOne">
                    <i className="icon icon-shape-06"></i>
                </div>
                <div className="shape shape-2">
                    <i className="icon icon-shape-13"></i>
                </div>
                <div className="shape shape-3">
                    <i className="icon icon-shape-14"></i>
                </div>
            </div>
        </div>
    );
};

export default TeamOne;
