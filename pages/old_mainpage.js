import Link from 'next/link';
import Image from 'next/image';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import {gsap} from 'gsap/dist/gsap.min';
import Logo from '../components/common/Logo';
import {useEffect, useState} from 'react';
import Head from "next/head";

export default function Home() {
    const [headerStickyClass, setHeaderStickyClass] = useState('');

    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    const transformImage = (e) => {
        gsap.to('.paralax--1', {
            x: -((e.clientX - window.innerWidth / 2) / 10),
            y: -((e.clientY - window.innerHeight / 2) / 10),
            duration: 0.2
        });

        gsap.to('.paralax--2', {
            x: -((e.clientX - window.innerWidth / 2) / 35),
            y: -((e.clientY - window.innerHeight / 2) / 35),
            duration: 0.2
        });

        gsap.to('.paralax--3', {
            x: -((e.clientX - window.innerWidth / 2) / 15),
            y: -((e.clientY - window.innerHeight / 2) / 15),
            duration: 0.2
        });
    }

    useEffect(() => {
        const header = document.querySelector('header.ax-header');

        const handleStickyClass = () => {
            if (window.pageYOffset > 250) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        };

        window.addEventListener('scroll', handleStickyClass);

        return () => {
            window.removeEventListener('scroll', handleStickyClass);
        }
    }, []);

    return (
        <>
            <Head>
                <title>Keystroke Creative Agency Bootstrap 5 Template</title>
            </Head>
            <div className="main-content">
                <div className="wrapper position-relative">
                    <main className="pv-page-wrapper">
                        <div className="set-line-wrapper">
                            <div className="set-line-area">
                                <div className="line-inner">
                                    <div className="line"/>
                                    <div className="line"/>
                                    <div className="line"/>
                                    <div className="line"/>
                                    <div className="line"/>
                                    <div className="line"/>
                                    <div className="line"/>
                                    <div className="line"/>
                                    <div className="line"/>
                                    <div className="line"/>
                                    <div className="line"/>
                                </div>
                            </div>
                        </div>

                        <header
                            className={`ax-header haeder-default header-sticky light-logo-version header-transparent axil-header-sticky`}>
                            <div className="header-wrapper">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 header-left">
                                            <div className="logo">
                                                <Link href="/">
                                                    <a>
                                                        <Logo/>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-9 col-md-6 col-sm-6 col-12 header-right">
                                            <div
                                                className="mainmenu-wrapepr justify-content-sm-end justify-content-start mt_mobile--10">
                                                <nav className="mainmenu-nav d-none d-lg-block">
                                                    <ul className="mainmenu">
                                                        <li><a className="smoth-animation" href="#demos">Template</a>
                                                        </li>
                                                        <li><a className="smoth-animation" href="#feature">Features</a>
                                                        </li>
                                                        <li><a className="smoth-animation" href="#chooseUs">Why Us</a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                                <div className="axil-header-extra d-flex align-items-center ml--30">
                                                    <a target="_blank"
                                                       rel="noreferrer"
                                                       className="axil-button btn-large btn-solid btn-primary-color d-none d-md-block"
                                                       href="#">
                                                        <span className="button-text">Buy Now</span>
                                                        <span className="button-icon-right">
                                                    <i className="far fa-shopping-cart"/>
                                                </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>

                        <div className="pv-banner-wrapper theme-gradient-4">
                            <div className="pv-banner-area paralax-area"
                                 onMouseMove={transformImage}>
                                <div className="container wrapper">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <div className="inner pt--200 pt_sm--0 pt_md--0">
                                                <h1 className="title">
                                                    Creative Agency, Corporate and Portfolio React Template
                                                </h1>
                                                <a className="scroll-down-btn smoth-animation" href="#demos">
                                                    <i className="fal fa-arrow-down"/>
                                                    <span>Explore Template</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div ref={ref} className="theme-brief">
                                        <div className="single-counter">
                                            <span className="subtile">Demo Website</span>
                                            <h2 className="title">
                                                0<CountUp start={0} end={inView ? 5 : 0} duration={1}/>
                                            </h2>
                                        </div>
                                        <div className="single-counter">
                                            <span className="subtile">Inner Page</span>
                                            <h2 className="title">
                                                <CountUp start={0} end={inView ? 20 : 0} duration={1}/>
                                            </h2>
                                        </div>
                                        <div className="single-counter">
                                            <span className="subtile">Elements</span>
                                            <h2 className="title">
                                                <CountUp start={0} end={inView ? 15 : 0} duration={1}/>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="shape-group">
                                    <div className="shape shape-1">
                                        <Image
                                            width={333}
                                            height={345}
                                            src="/images/preview/shape/shape-01.svg"
                                            alt="Shape Images"
                                        />
                                    </div>
                                    <div className="shape shape-2">
                                        <Image
                                            width={207}
                                            height={200}
                                            src="/images/preview/shape/shape-02.svg"
                                            alt="Shape Images"
                                        />
                                    </div>
                                    <div className="shape shape-3">
                                        <Image
                                            width={178}
                                            height={227}
                                            src="/images/preview/shape/shape-03.svg"
                                            alt="Shape Images"
                                        />
                                    </div>
                                    <div className="shape shape-4">
                                        <Image
                                            width={105}
                                            height={96}
                                            src="/images/preview/shape/shape-04.svg"
                                            alt="Shape Images"
                                        />
                                    </div>
                                    <div className="shape shape-5">
                                        <Image
                                            width={353}
                                            height={185}
                                            src="/images/preview/shape/shape-05.svg"
                                            alt="Shape Images"
                                        />
                                    </div>
                                    <div className="shape shape-6">
                                        <Image
                                            width={209}
                                            height={221}
                                            src="/images/preview/shape/shape-06.svg"
                                            alt="Shape Images"
                                        />
                                    </div>
                                </div>
                                <div className="mokup-group">
                                    <div className="single-mokup mokup-1">
                                        <Image
                                            width={430}
                                            height={534}
                                            className="paralax--1"
                                            src="/images/preview/phone.png"
                                            alt="Mokup Images"
                                        />
                                    </div>
                                    <div className="single-mokup mokup-2">
                                        <Image
                                            width={1310}
                                            height={1134}
                                            className="paralax--2"
                                            src="/images/preview/large-mockup.png"
                                            alt="Mokup Images"
                                            priority
                                        />
                                    </div>
                                    <div className="single-mokup mokup-3">
                                        <Image
                                            width={952}
                                            height={854}
                                            className="paralax--3"
                                            src="/images/preview/small-mockup.png"
                                            alt="Mokup Images"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="page-demo-area ax-section-gap theme-gradient-9 position-relative" id="demos">
                            <div className="container wrapper">
                                <div className="row align-items-center row--40">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                                        <div className="pv-section-title">
                                            <h2>Our Template Are Just <br/> Ready to Use</h2>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-12 mt_sm--20">
                                        <div className="pv-subtitle-title">
                                            <p>
                                                You will love all of the features in our template. <br/> 100% guaranteed
                                                satisfaction.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row--40">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="single-demo">
                                            <Link href="/home-01">
                                                <a>
                                                    <Tilt tiltMaxAngleX={9} tiltMaxAngleY={9}>
                                                        <div className="thumb box paralax-image">
                                                            <span className="animating-line"/>
                                                            <span className="animating-line"/>
                                                            <span className="animating-line"/>
                                                            <span className="animating-line"/>
                                                            <div className="demo-image">
                                                                <Image
                                                                    width={1210}
                                                                    height={710}
                                                                    src="/images/preview/home-01.png"
                                                                    alt="Creative Agency"
                                                                />
                                                            </div>
                                                        </div>
                                                    </Tilt>
                                                    <h5 className="title">Digital Agency</h5>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="single-demo">
                                            <Link href="/home-02">
                                                <a>
                                                    <Tilt tiltMaxAngleX={9} tiltMaxAngleY={9}>
                                                        <div className="thumb box paralax-image">
                                                            <span className="animating-line"/>
                                                            <span className="animating-line"/>
                                                            <span className="animating-line"/>
                                                            <span className="animating-line"/>
                                                            <div className="demo-image">
                                                                <Image
                                                                    width={1210}
                                                                    height={710}
                                                                    src="/images/preview/home-02.png"
                                                                    alt="Creative Agency"
                                                                />
                                                            </div>
                                                        </div>
                                                    </Tilt>
                                                    <h5 className="title">Creative Agency </h5>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="single-demo">
                                            <Link href="/home-03">
                                                <a>
                                                    <Tilt tiltMaxAngleX={9} tiltMaxAngleY={9}>
                                                        <div className="thumb box paralax-image">
                                                            <span className="animating-line"/>
                                                            <span className="animating-line"/>
                                                            <span className="animating-line"/>
                                                            <span className="animating-line"/>
                                                            <div className="demo-image">
                                                                <Image
                                                                    width={1210}
                                                                    height={710}
                                                                    src="/images/preview/home-03.png"
                                                                    alt="Creative Agency"
                                                                />
                                                            </div>
                                                        </div>
                                                    </Tilt>
                                                    <h5 className="title">Personal Portfolio</h5>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="single-demo">
                                            <Link href="/home-04">
                                                <a>
                                                    <Tilt tiltMaxAngleX={9} tiltMaxAngleY={9}>
                                                        <div className="thumb box paralax-image">
                                                            <span className="animating-line"/>
                                                            <span className="animating-line"/>
                                                            <span className="animating-line"/>
                                                            <span className="animating-line"/>
                                                            <div className="demo-image">
                                                                <Image
                                                                    width={1210}
                                                                    height={710}
                                                                    src="/images/preview/home-05.png"
                                                                    alt="Creative Agency"
                                                                />
                                                            </div>
                                                        </div>
                                                    </Tilt>
                                                    <h5 className="title">Startup</h5>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="single-demo">
                                            <Link href="/home-05">
                                                <a>
                                                    <Tilt tiltMaxAngleX={9} tiltMaxAngleY={9}>
                                                        <div className="thumb box paralax-image">
                                                            <span className="animating-line"/>
                                                            <span className="animating-line"/>
                                                            <span className="animating-line"/>
                                                            <span className="animating-line"/>
                                                            <div className="demo-image">
                                                                <Image
                                                                    width={1210}
                                                                    height={710}
                                                                    src="/images/preview/home-04.png"
                                                                    alt="Creative Agency"
                                                                />
                                                            </div>
                                                        </div>
                                                    </Tilt>
                                                    <h5 className="title">Corporate Agency</h5>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="single-demo commin">
                                            <Link href="#">
                                                <a href="#">
                                                    <div className="thumb box paralax-image">
                                                        <span className="animating-line"/>
                                                        <span className="animating-line"/>
                                                        <span className="animating-line"/>
                                                        <span className="animating-line"/>
                                                        <div className="demo-image">
                                                            <Image
                                                                width={1210}
                                                                height={710}
                                                                src="/images/preview/comming-soon.png"
                                                                alt="Creative Agency"
                                                            />
                                                        </div>
                                                    </div>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="shape-group">
                                    <div className="shape shape-1">
                                        <Image
                                            width={352}
                                            height={184}
                                            src="/images/preview/shape/shape-11.svg"
                                            alt="Shape Images"
                                        />
                                    </div>
                                    <div className="shape shape-2">
                                        <Image
                                            width={352}
                                            height={184}
                                            src="/images/preview/shape/shape-11.svg"
                                            alt="Shape Images"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pv-feature-area ax-section-gap theme-gradient-4 position-relative" id="feature">
                            <div className="container wrapper">
                                <div className="row align-items-center">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                                        <div className="pv-section-title">
                                            <h2>We have Impressive <br/>Template Features</h2>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-12 mt_sm--20">
                                        <div className="pv-subtitle-title">
                                            <p>
                                                You will love all of the features in our template.<br/> 100% guaranteed
                                                satisfaction.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-12 mt--85 mt_md--30 mt_sm--30">
                                        <Tilt tiltMaxAngleX={7} tiltMaxAngleY={7} className="feature-paralax">
                                            <div className="pv-feature paralax-image">
                                                <div className="inner">
                                                    <div className="icon">
                                                        <Image
                                                            width={40}
                                                            height={38}
                                                            src="/images/preview/feature-icon-10.png"
                                                            alt="creative Agency"
                                                        />
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="title">Powered by React</h5>
                                                        <p>
                                                        Our Template is Perfect for all devices. It is made by React Structure. React JS was designed to provide high performance in mind.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tilt>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-12 mt--85 mt_md--30 mt_sm--30">
                                        <Tilt tiltMaxAngleX={7} tiltMaxAngleY={7} className="feature-paralax">
                                            <div className="pv-feature paralax-image">
                                                <div className="inner">
                                                    <div className="icon">
                                                        <Image
                                                            width={40}
                                                            height={38}
                                                            src="/images/preview/feature-icon-11.png"
                                                            alt="creative Agency"
                                                        />
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="title">Reusable Components</h5>
                                                        <p>
                                                        All the components of this template are reusable. We made keystroke using functional components. You can reuse any components
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tilt>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-12 mt--85 mt_md--30 mt_sm--30">
                                        <Tilt tiltMaxAngleX={7} tiltMaxAngleY={7} className="feature-paralax">
                                            <div className="pv-feature paralax-image">
                                                <div className="inner">
                                                    <div className="icon">
                                                        <Image
                                                            width={40}
                                                            height={38}
                                                            src="/images/preview/feature-icon-12.png"
                                                            alt="creative Agency"
                                                        />
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="title">Sass Available</h5>
                                                        <p>
                                                        Sass is more stable, powerful, and elegant because it is an extension of CSS. So, it is easy for designers and developers to work more efficiently.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tilt>
                                    </div>
                                   
                                    <div className="col-lg-4 col-md-6 col-12 mt--85 mt_md--30 mt_sm--30">
                                        <Tilt tiltMaxAngleX={7} tiltMaxAngleY={7} className="feature-paralax">
                                            <div className="pv-feature paralax-image">
                                                <div className="inner">
                                                    <div className="icon">
                                                        <Image
                                                            width={40}
                                                            height={38}
                                                            src="/images/preview/feature-icon-01.png"
                                                            alt="creative Agency"
                                                        />
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="title">Fully Responsive Layout</h5>
                                                        <p>
                                                            All the pages of this template are responsive. We used
                                                            the Bootstrap
                                                            framework to build the website. It’s the best in class.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tilt>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-12 mt--85 mt_md--30 mt_sm--30">
                                        <Tilt tiltMaxAngleX={7} tiltMaxAngleY={7} className="feature-paralax">
                                            <div className="pv-feature paralax-image">
                                                <div className="inner">
                                                    <div className="icon">
                                                        <Image
                                                            width={40}
                                                            height={38}
                                                            src="/images/preview/feature-icon-02.png"
                                                            alt="creative Agency"
                                                        />
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="title">21+ Resourceful Pages</h5>
                                                        <p>
                                                            All the pages are created based on real content that you
                                                            will
                                                            need
                                                            to run your business. Change image and text and you’re good
                                                            to
                                                            go!
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tilt>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-12 mt--85 mt_md--30 mt_sm--30">
                                        <Tilt tiltMaxAngleX={7} tiltMaxAngleY={7} className="feature-paralax">
                                            <div className="pv-feature paralax-image">
                                                <div className="inner">
                                                    <div className="icon">
                                                        <Image
                                                            width={40}
                                                            height={38}
                                                            src="/images/preview/feature-icon-13.png"
                                                            alt="creative Agency"
                                                        />
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="title">Fast Loading Speed</h5>
                                                        <p>
                                                        Website speed is very important. Hence we’ve created Abstrak in a way that your website will load fast, and you will get better performance.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tilt>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-12 mt--85 mt_md--30 mt_sm--30">
                                        <Tilt tiltMaxAngleX={7} tiltMaxAngleY={7} className="feature-paralax">
                                            <div className="pv-feature paralax-image">
                                                <div className="inner">
                                                    <div className="icon">
                                                        <Image
                                                            width={40}
                                                            height={38}
                                                            src="/images/preview/feature-icon-03.png"
                                                            alt="creative Agency"
                                                        />
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="title">Font Awesome 5 Pro Icons</h5>
                                                        <p>
                                                            This template comes with licensed premium quality icons from
                                                            FontAwesome. All the icons are font based and ready to match
                                                            the
                                                            quality of any HQ screen.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tilt>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-12 mt--85 mt_md--30 mt_sm--30">
                                        <Tilt tiltMaxAngleX={7} tiltMaxAngleY={7} className="feature-paralax">
                                            <div className="pv-feature paralax-image">
                                                <div className="inner">
                                                    <div className="icon">
                                                        <Image
                                                            width={40}
                                                            height={38}
                                                            src="/images/preview/feature-icon-04.png"
                                                            alt="creative Agency"
                                                        />
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="title">Google Font</h5>
                                                        <p>
                                                            A vast collection of Google fonts are integrated with the
                                                            template. You
                                                            can use any of them that goes with your branding.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tilt>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-12 mt--85 mt_md--30 mt_sm--30">
                                        <Tilt tiltMaxAngleX={7} tiltMaxAngleY={7} className="feature-paralax">
                                            <div className="pv-feature paralax-image">
                                                <div className="inner">
                                                    <div className="icon">
                                                        <Image
                                                            width={40}
                                                            height={38}
                                                            src="/images/preview/feature-icon-08.png"
                                                            alt="creative Agency"
                                                        />
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="title">Lifetime Update</h5>
                                                        <p>
                                                            Purchase our template only once and get lifetime updates. We
                                                            keep
                                                            updating our products to stay up to date with the latest trends
                                                            and
                                                            technology.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tilt>
                                    </div>
                                </div>
                                <div className="shape-group">
                                    <div className="shape shape-1">
                                        <Image
                                            width={352}
                                            height={184}
                                            src="/images/preview/shape/shape-09.svg"
                                            alt="Shape Images"
                                        />
                                    </div>
                                    <div className="shape shape-2">
                                        <Image
                                            width={352}
                                            height={183}
                                            src="/images/preview/shape/shape-10.svg"
                                            alt="Shape Images"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="choose-us-area bg-color-extra11 position-relative" id="chooseUs">
                            <div className="ax-section-gap">
                                <div className="container wrapper">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                                            <div className="pv-section-title">
                                                <h2>Why Buy Template <br/> From Us?</h2>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-12 mt_sm--20">
                                            <div className="pv-subtitle-title">
                                                <p>
                                                    Every template is built with such efforts <br/> that they are ready
                                                    to
                                                    meet
                                                    all of our<br/> clients’ expectations.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <Tilt tiltMaxAngleX={7} tiltMaxAngleY={7} className="feature-paralax">
                                                <div className="pv-choose-us paralax-image">
                                                    <div className="inner">
                                                        <div className="content">
                                                            <div className="icon">
                                                                <Image
                                                                    width={40}
                                                                    height={39}
                                                                    src="/images/preview/choose-us-01.png"
                                                                    alt="creative Agency"
                                                                />
                                                            </div>
                                                            <div className="title">
                                                                <h5>A Complete Product for Your Business</h5>
                                                            </div>
                                                        </div>
                                                        <div className="description">
                                                            <p>
                                                            We build Templates that are rich in content and have a good user interface to deliver a premium user experience for your customers.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tilt>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <Tilt tiltMaxAngleX={7} tiltMaxAngleY={7} className="feature-paralax">
                                                <div className="pv-choose-us bg-color-2 paralax-image">
                                                    <div className="inner">
                                                        <div className="content">
                                                            <div className="icon">
                                                                <Image
                                                                    width={40}
                                                                    height={39}
                                                                    src="/images/preview/choose-us-02.png"
                                                                    alt="creative Agency"
                                                                />
                                                            </div>
                                                            <div className="title">
                                                                <h5>SEO & SMM Friendly</h5>
                                                            </div>
                                                        </div>
                                                        <div className="description">
                                                            <p>
                                                            Our Template is SEO and SMM-friendly that aligns with your digital marketing strategies to bring more organic traffic to your website.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tilt>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <Tilt tiltMaxAngleX={7} tiltMaxAngleY={7} className="feature-paralax">
                                                <div className="pv-choose-us bg-color-3 paralax-image">
                                                    <div className="inner">
                                                        <div className="content">
                                                            <div className="icon">
                                                                <Image
                                                                    width={40}
                                                                    height={39}
                                                                    src="/images/preview/choose-us-03.png"
                                                                    alt="creative Agency"
                                                                />
                                                            </div>
                                                            <div className="title">
                                                                <h5>Well Organized Codes</h5>
                                                            </div>
                                                        </div>
                                                        <div className="description">
                                                            <p>
                                                            The coding structure of our items is organized so other developers can easily recognize the pattern and make updates as needed.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tilt>
                                        </div>
                                    </div>
                                    <div className="row mt--40 mb_md--5 md_sm--5">
                                        <div
                                            className="col-lg-4 col-md-6 col-12 offset-lg-2 mt--85 mt_lg--40 mt_md--5 mt_sm--5">
                                            <Tilt tiltMaxAngleX={7} tiltMaxAngleY={7} className="h-100">
                                                <div className="pv-feature paralax-image online-documentation">
                                                    <div className="inner">
                                                        <div className="icon">
                                                            <Image
                                                                width={40}
                                                                height={39}
                                                                src="/images/preview/feature-icon-06.png"
                                                                alt="creative Agency"
                                                            />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title primary-color">Online
                                                                Documentation</h4>
                                                            <p>Well organized and up to date</p>
                                                            <a target="_blank"
                                                               rel="noreferrer"
                                                               href="https://new.axilthemes.com/docs/keystroke-react/"
                                                               className="arrow-icon">
                                                                <i className="fal fa-arrow-right"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tilt>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12 mt--85 mt_lg--40 mt_md--5 mt_sm--5">
                                            <Tilt tiltMaxAngleX={7} tiltMaxAngleY={7} className="h-100">
                                                <div className="pv-feature paralax-image datecated-support">
                                                    <div className="inner">
                                                        <div className="icon">
                                                            <Image
                                                                width={40}
                                                                height={39}
                                                                src="/images/preview/feature-icon-08.png"
                                                                alt="creative Agency"
                                                            />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title extra08-color">Dedicated Support</h4>
                                                            <p>Our response time is 24-hour in regular business
                                                                days.</p>
                                                            <a target="_blank" rel="noreferrer"
                                                               href="https://support.axilthemes.com/support/"
                                                               className="arrow-icon">
                                                                <i className="fal fa-arrow-right"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tilt>
                                        </div>
                                    </div>
                                    <div className="shape-group">
                                        <div className="shape shape-1">
                                            <Image
                                                width={215}
                                                height={184}
                                                src="/images/preview/shape/shape-12.svg"
                                                alt="Shape images"
                                            />
                                        </div>
                                        <div className="shape shape-2">
                                            <Image
                                                width={220}
                                                height={174}
                                                src="/images/preview/shape/shape-13.svg"
                                                alt="Shape images"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="axil-call-to-action callaction-style-2 variation--2">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-12">
                                            <div className="inner align-items-center">
                                                <div className="text">
                                                    <h2 className="title">Let’s Start Your Business Today!</h2>
                                                    <p>
                                                        Missing something? Just tell us what you need by
                                                        <a target="_blank"
                                                           rel="noreferrer"
                                                           href="https://support.axilthemes.com/support/"
                                                           className="ms-1">
                                                            requesting us here.
                                                        </a>
                                                    </p>
                                                </div>
                                                <div className="button-wrapper">
                                                    <a target="_blank"
                                                       rel="noreferrer"
                                                       className="axil-button btn-large btn-solid btn-primary-color"
                                                       href="#">
                                                        <span className="button-text">Buy Now</span>
                                                        <span className="button-icon-right">
                                                        <i className="far fa-shopping-cart"/>
                                                    </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <footer className="pv-footer-area pv-footer-styles theme-gradient-4 pt--110 position-relative">
                            <div className="pv-copyright-area ptb--120">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2">
                                            <div className="copyright-inner">
                                                <div className="inner-left">
                                                    <p>© 2022. All rights reserved by Axilweb</p>
                                                    <ul className="liststyle d-flex quick-links">
                                                        <li>
                                                            <a target="_blank"
                                                               rel="noreferrer"
                                                               href="https://themeforest.net/user/axilthemes/portfolio">
                                                                MORE TEMPLATES
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a target="_blank"
                                                               rel="noreferrer"
                                                               href="https://new.axilthemes.com/demo/react/keystroke/privacy-policy">
                                                                PRIVACY POLICY
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="inner-right">
                                                    <ul className="social-share style-rounded bg-color--white flex-nowrap">
                                                        <li>
                                                            <a target="_blank"
                                                               rel="noreferrer"
                                                               href="https://www.facebook.com/axilwebltd/">
                                                                <i className="fab fa-facebook-f"/>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a target="_blank" rel="noreferrer"
                                                               href="https://dribbble.com/axilweb">
                                                                <i className="fas fa-basketball-ball"/>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="shape-group">
                                <div className="shape shape-1">
                                    <Image
                                        width={209}
                                        height={206}
                                        src="/images/preview/shape/shape-07.svg"
                                        alt="Shape Images"
                                    />
                                </div>
                                <div className="shape shape-2">
                                    <Image
                                        width={150}
                                        height={75}
                                        src="/images/preview/shape/shape-08.svg"
                                        alt="Shape Images"
                                    />
                                </div>
                            </div>
                        </footer>
                    </main>
                </div>
            </div>
        </>
    )
}
