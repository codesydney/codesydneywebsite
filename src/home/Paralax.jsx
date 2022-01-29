import React, { Component , Fragment } from "react";
import { Parallax } from "react-parallax";
import ScrollToTop from 'react-scroll-up';
import {Link} from "react-router-dom";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import BlogContent from "../elements/blog/BlogContent";
import BrandTwo from "../elements/BrandTwo";
import ServiceList from "../elements/service/ServiceList";
import Helmet from "../component/common/Helmet";

const SlideList = [
    {
        textPosition: 'text-center',
        category: '',
        title: 'Marketing',
        description: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    }
]
const sliderImage =
  "/assets/images/bg/bg-image-11.jpg";

const image1 =
  "/assets/images/bg/paralax/bg-image-2.jpg";

const image2 =
  "/assets/images/bg/paralax/bg-image-3.jpg";

const image3 =
  "/assets/images/bg/paralax/bg-image-4.jpg";


const image6 =
  "/assets/images/bg/paralax/bg-image-6.jpg";

const image7 =
  "/assets/images/bg/paralax/bg-image-7.jpg";

const image8 =
  "/assets/images/bg/paralax/bg-image-8.jpg";


  const PortfolioList = [
    {
        image: 'image-1',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-2',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: 'Getting tickets to the big show'
    }
]

class Paralax extends Component{
    render(){
        const PostList = BlogContent.slice(0 , 3);
        // const ServiceContent = ServiceList.slice(0 , 3);
        return(
            <Fragment> 
                <Helmet pageTitle="Paralax" />

                <Header headertransparent="header--transparent header--fixed" colorblack="color--black" logoname="logo.png" />

                {/* Start Slider Area   */}
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    <Parallax bgImage={sliderImage} strength={700}>
                        {SlideList.map((value , index) => (
                            <div className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center" key={index}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className={`inner ${value.textPosition}`}>
                                                {value.category ? <span>{value.category}</span> : ''}
                                                {value.title ? <h1 className="title theme-gradient">{value.title}</h1> : ''}
                                                {value.description ? <p className="description">{value.description}</p> : ''}
                                                {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-solid" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Parallax>
                </div>
                {/* End Slider Area   */}

                {/* Start Service Area  */}
                <Parallax className="rn-paralax-service" bgImage={image1} strength={1000}>
                    <div className="service-area ptb--120">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <div className="section-title service-style--2 text-center mb--30 mb_sm--0">
                                        <h2>Our Service</h2>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                    </div>
                                </div>
                            </div>
                            <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12" />
                        </div>
                    </div>
                </Parallax>
                {/* End Service Area  */}

                {/* Start Service Area  */}
                <Parallax className="rn-paralax-portfolio"  bgImage={image2} strength={500} >
                    <div className="portfolio-area ptb--120" data-black-overlay="6">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title service-style--2 text-center mb--30 mb_sm--0">
                                        <h2>Our Works</h2>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* Start Single Portfolio  */}
                                {PortfolioList.map((value , index) => (
                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--40" key={index}>
                                        <div className="portfolio">
                                            <div className="thumbnail-inner">
                                                <div className={`thumbnail ${value.image}`}></div>
                                                <div className={`bg-blr-image ${value.image}`}></div>
                                            </div>
                                            <div className="content">
                                                <div className="inner">
                                                    <p>{value.category}</p>
                                                    <h4><a href="/portfolio-details">{value.title}</a></h4>
                                                    <div className="portfolio-button">
                                                        <a className="rn-btn" href="/portfolio-details">Case Study</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link className="link-overlay" to="/portfolio-details"></Link>
                                        </div>
                                    </div>
                                ))}
                                {/* End Single Portfolio  */}
                            </div>
                        </div>
                    </div>
                </Parallax>
                {/* End Service Area  */}
               

                {/* Start CounterUp Area */}
                <Parallax className="rn-counterup-area rn-paralax-counterup" bgImage={image6} strength={1000} >
                    <div className="counterup-area ptb--120">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title service-style--2 text-center mb--30 mb_sm--0">
                                        <h3>Our Fun Facts</h3>
                                    </div>
                                </div>
                            </div>
                            <CounterOne />
                        </div>
                    </div>
                </Parallax>
                {/* End CounterUp Area */}

                {/* Start Testimonial Area */}
                <Parallax className="rn-testimonial-area rn-paralax-testimonial  rn-testimonial-light" bgImage={image7} strength={500} data-black-overlay="5">
                    <div className="testimonial-area ptb--120" data-black-overlay="6">
                        <div className="container">
                            <Testimonial />
                        </div>
                    </div>
                </Parallax>
                {/* End Testimonial Area */}

                {/* Start Blog Area */}
                <Parallax className="rn-blog-area rn-testimonial-light" bgImage={image8} strength={700} data-black-overlay="7">
                    <div className="blog-area ptb--120" data-black-overlay="6">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title service-style--2 text-center mb--30 mb_sm--0">
                                        <h2>Latest News</h2>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {PostList.map((value , i ) => (
                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                        <div className="blog blog-style--1 mb--0 mt--40">
                                            <div className="thumbnail">
                                                <a href="/blog-details">
                                                    <img className="w-100" src={`/assets/images/blog/blog-${value.images}.jpg`} alt="Blog Images"/>
                                                </a>
                                            </div>
                                            <div className="content">
                                                <p className="blogtype">{value.category}</p>
                                                <h4 className="title"><a href="/blog-details">{value.title}</a></h4>
                                                <div className="blog-btn">
                                                    <a className="rn-btn text-white" href="/blog-details">Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>    
                        </div> 
                    </div>
                    
                </Parallax>
                {/* End Blog Area */}

                {/* Start Brand Area */}
                <Parallax className="rn-brand-area brand-separation ptb--120" bgImage={image3} strength={1000}>
                    <div className="brand-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <BrandTwo />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </Parallax>
                {/* End Brand Area */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />

            </Fragment>
        )
    }
}
export default Paralax;