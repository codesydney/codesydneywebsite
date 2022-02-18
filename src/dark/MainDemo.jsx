import React, { Component } from "react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

import SliderOne from "../component/slider/SliderOne";
import ServiceTwo from "../elements/service/ServiceTwo";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import About from "../component/HomeLayout/homeOne/About";
import Portfolio from "../component/HomeLayout/homeOne/Portfolio";
import PortfolioDetails from "../elements/PortfolioDetails";
import BlogContent from "../elements/blog/BlogContent";
import BrandTwo from "../elements/BrandTwo";
import Helmet from "../component/common/Helmet";

class MainDemo extends Component {
  render() {
    const PostList = BlogContent.slice(0, 3);
    return (
      <div className="active-dark">
        <Helmet pageTitle="Code.Sydney" />
        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        {/* Start Slider Area   */}
        <div className="slider-wrapper">
          <SliderOne />
        </div>
        {/* End Slider Area   */}

        {/* Start CounterUp Area */}
        <div className="rn-counterup-area pt--25 pb--110 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <h3 className="fontWeight500"></h3>
                </div>
              </div>
            </div>
            <CounterOne />
          </div>
        </div>
        {/* End CounterUp Area */}

        {/* Start Service Area  */}
        <div className="service-area ptb--80  bg_image bg_image--3">
          <div className="container">
            <ServiceTwo />
          </div>
        </div>
        {/* End Service Area  */}

        {/* Start Portfolio Area */}
        <div className="portfolio-area ptb--120 bg_color--1">
          <div className="portfolio-sacousel-inner mb--55">
            <Portfolio />
          </div>
        </div>
        {/* End Portfolio Area */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <Footer />
      </div>
    );
  }
}
export default MainDemo;
