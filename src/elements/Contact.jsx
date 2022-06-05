import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiHeadphones, FiMail, FiMapPin } from "react-icons/fi";
import GoogleMapReact from "google-map-react";
import ContactTwo from "./contact/ContactTwo";
// import BrandTwo from "./BrandTwo";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Contact extends Component {
  static defaultProps = {
    center: {
      lat: -34.397,
      lng: 150.644,
    },
    zoom: 8,
  };

  render() {
    return (
      <React.Fragment>
        <PageHelmet pageTitle="Contact us" />
        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />
        {/* Start Breadcrump Area */}
        <div
          className="rn-page-title-area pt--120 pb--190"
          data-black-overlay="6"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rn-page-title text-center pt--100">
                  <h2 className="title theme-gradient">Contact Us</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrump Area */}
        {/* Start Contact Top Area  */}

        <div className="rn-contact-page ptb--120 bg_color--1">
          <ContactTwo />
        </div>
        {/* End Contact Page Area  */}

        <div className="rn-contact-top-area ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              {/* Start Single Address  */}
              {/* <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="rn-address">
                      <div className="icon">
                        <FiHeadphones />
                      </div>
                      <div className="inner">
                        <h4 className="title text-dark">
                          Contact With Phone Number
                        </h4>
                        <p>
                          <a href="tel:+057 254 365 456">+057 254 365 456</a>
                        </p>
                        <p>
                          <a href="tel:+856 325 652 984">+856 325 652 984</a>
                        </p>
                      </div>
                    </div>
                  </div> */}
              {/* End Single Address  */}

              {/* Start Single Address  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50">
                <div className="rn-address">
                  <div className="icon">
                    <FiMail />
                  </div>
                  <div className="inner">
                    <h4 className="title text-dark">Email Address</h4>
                    <p>
                      <a href="mailto:info@code.sydney">info@code.sydney</a>
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Address  */}

              {/* Start Single Address  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50">
                <div className="rn-address">
                  <div className="icon">
                    <FiMapPin />
                  </div>
                  <div className="inner">
                    <h4 className="title text-dark">Location</h4>
                    <p>
                      Sydney, <br /> Australia
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Address  */}
            </div>
          </div>
        </div>
        {/* End Contact Top Area  */}

        {/* Start Contact Page Area  */}

        {/* Start Contact Map  */}
        <div className="rn-contact-map-area position-relative">
          <div style={{ height: "650px", width: "100%" }}>
            <GoogleMapReact
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent lat={-34.397} lng={150.644} text="My Marker" />
            </GoogleMapReact>
          </div>
        </div>
        {/* End Contact Map  */}

        {/* Start Brand Area */}
        {/* <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <BrandTwo />
              </div>
            </div>
          </div>
        </div> */}
        {/* End Brand Area */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}
      </React.Fragment>
    );
  }
}
export default Contact;
