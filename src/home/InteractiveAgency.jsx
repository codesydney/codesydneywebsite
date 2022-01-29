import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import Helmet from "../component/common/Helmet";
import ScrollToTop from 'react-scroll-up';
import Slider from "react-slick";
import { slideSlick } from "../page-demo/script";
import { FiCast , FiLayers , FiUsers , FiMonitor ,FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";
import VideoModal from "../blocks/VideoModal";
import BrandTwo from "../elements/BrandTwo";




const SlideList = [
    {
        textPosition: 'text-left',
        bgImage: 'bg_image--33',
        category: 'We are Agency',
        title: 'Technology & innovation for Agency services.',
        description: '',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    },
   
]

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Business Stratagy',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiLayers />,
        title: 'Website Development',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiUsers />,
        title: 'Marketing & Reporting',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiMonitor />,
        title: 'Mobile App Development',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiCast />,
        title: 'Website Development',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiMonitor />,
        title: 'Marketing & Reporting',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
]

const InteractiveAgency = () => {
    return (
        <>
            <Helmet pageTitle="Interactive Agency" />
            <Header />
            
            {/* Start Slider Area   */}
            <div className="slider-wrapper">
                <div className="slider-activation">
                    {SlideList.map((value , index) => (
                        <div className={`slide slide-style-2 d-flex align-items-center justify-content-center bg_image ${value.bgImage}`} key={index} data-black-overlay="8">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            {value.title ? <h1 className="title">{value.title}</h1> : ''}
                                            {value.description ? <p className="description">{value.description}</p> : ''}
                                            {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-solid" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* End Slider Area   */}

            {/* Start About Area  */}
            <div className="rn-about-area ptb--120 bg_color--1">
                <div className="rn-about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-7">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">What do we do?</h2>
                                        <p className="description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</p>
                                    </div>
                                    <div className="row mt--30">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                                <h3 className="title">Our Working Process.</h3>
                                                <div className="rn-progress-bar progress-bar--3">
                                                    <div className="single-progress custom-color--1">
                                                        <h6 className="title">Designing</h6>
                                                        <ProgressBar now={81} />
                                                        <span className="label">81%</span>
                                                    </div>

                                                    <div className="single-progress custom-color--2">
                                                        <h6 className="title">Managment</h6>
                                                        <ProgressBar now={72} />
                                                        <span className="label">72%</span>
                                                    </div>

                                                    <div className="single-progress custom-color--3">
                                                        <h6 className="title">Marketing</h6>
                                                        <ProgressBar now={89} />
                                                        <span className="label">89%</span>
                                                    </div>

                                                    <div className="single-progress custom-color--4">
                                                        <h6 className="title">Development</h6>
                                                        <ProgressBar now={57} />
                                                        <span className="label">57%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5 mt_md--40 mt_sm--40">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/about-3.jpg" alt="About Images"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End About Area  */}

             {/* Start Service Area */}
             <div className="service-area creative-service-wrapper pb--120 bg_color--1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb--30">
                                <h2>Our Service</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row creative-service">
                        {ServiceList.map( (val , i) => (
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                <a className="text-center" href="/service-details">
                                    <div className="service service__style--2">
                                        <div className="icon">
                                            {val.icon}
                                        </div>
                                        <div className="content">
                                            <h3 className="title">{val.title}</h3>
                                            <p>{val.description}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* End Service Area */}

            {/* Start Video Area  */}
            <div className="rn-section pb--120 bg_color--1">
                <div className="container">
                        <div className="row sercice-details-content align-items-center">
                        <div className="col-lg-12">
                            <div className="thumb position-relative">
                                <img className="w-100" src="/assets/images/bg/bg-image-26.jpg" alt="Service Images"/>
                                <VideoModal />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Video Area  */}

            {/* Start Brand Area  */}
            <div className="rn-brand-area pb--120 bg_color--1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <BrandTwo />
                        </div>
                    </div>
                </div>
            </div>
            {/* End Brand Area  */}

            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}

            <FooterTwo />
        </>
    )
}

export default InteractiveAgency
