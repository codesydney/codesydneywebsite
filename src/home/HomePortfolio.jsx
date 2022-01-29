import React, { Component , Fragment } from "react";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import PortfolioMasonry from "../elements/portfolio/PortfolioMasonry";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";
import Brand from "../elements/Brand";
import Helmet from "../component/common/Helmet";

const SlideList = [
    {
        textPosition: 'text-center',
        category: '',
        title: 'Minimal',
        description: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    }
]
class HomePortfolio extends Component{
    render(){
        return(
            <Fragment> 
                <Helmet pageTitle="Home Portfolio" />

                {/* Start Header Area  */}
                <Header />
                {/* End Header Area  */}
                {/* Start Slider Area   */}
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    {SlideList.map((value , index) => (
                        <div className="slide slide-style-2 fullscreen d-flex align-items-center justify-content-center bg_image bg_image--24" key={index} data-black-overlay="6">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            {value.title ? <h1 className="title theme-gradient">{value.title}</h1> : ''}
                                            {value.description ? <p className="description">{value.description}</p> : ''}
                                            {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}
                </div>
                {/* End Slider Area   */}


                {/* Start portfolio Area  */}
                <div className="rn-portfolio-area bg_color--1 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center service-style--3 mb--30">
                                    <h2 className="title">Our Project</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper plr--30">
                        <div className="row">
                            <PortfolioMasonry item="9" column="col-lg-3 col-md-6 col-sm-6 col-12 portfolio-tilthover" />
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="view-more-btn mt--60 text-center">
                                    <a className="rn-button-style--2 btn-solid" href="/portfolio"><span>View More Project</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End portfolio Area  */}

                {/* Start Brand Area */}
                <div className="rn-brand-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center service-style--3 mb--30">
                                    <h2 className="title">Our Clients</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 mt--40">
                                <Brand branstyle="branstyle--2" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area */}

                {/* Start Footer Area  */}
                <FooterTwo />
                {/* End Footer Area  */}
                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
            </Fragment>
        )
    }
}
export default HomePortfolio;