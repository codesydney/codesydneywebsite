import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';
import { FiChevronUp } from "react-icons/fi";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
            <>
                <PageHelmet pageTitle='Google Map' />

                {/* Start Header Area  */}
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                {/* End Header Area  */}
                
                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Google Map'}   />
                {/* End Breadcrump Area */}

                {/* Start Page Wrapper  */}
                <main className="page-wrapper">

                    {/* Start Contact Map  */}
                    <div className="rn-contact-map-wrapper ptb--120 bg_color--1">
                        <div className="container">
                            <div className="row">
                                {/* Start Single Map  */}
                                <div className="col-lg-6">
                                    <div className="rn-contact-map-area position-relative">
                                        <div style={{ height: '550px', width: '100%' }}>
                                            <GoogleMapReact
                                            defaultCenter={this.props.center}
                                            defaultZoom={this.props.zoom}
                                            >
                                            <AnyReactComponent
                                                lat={59.955413}
                                                lng={30.337844}
                                                text="My Marker"
                                            />
                                            </GoogleMapReact>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Map  */}
                                {/* Start Single Map  */}
                                <div className="col-lg-6">
                                    <div className="rn-contact-map-area position-relative">
                                        <div style={{ height: '550px', width: '100%' }}>
                                            <GoogleMapReact
                                            defaultCenter={this.props.center}
                                            defaultZoom={this.props.zoom}
                                            >
                                            <AnyReactComponent
                                                lat={59.955413}
                                                lng={30.337844}
                                                text="My Marker"
                                            />
                                            </GoogleMapReact>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Map  */}

                            </div>
                        </div>
                       
                    </div>
                    {/* End Contact Map  */}

                    {/* Start Contact Map  */}
                    <div className="rn-contact-map-wrapper ptb--120 bg_color--5">
                        <div className="container">
                            <div className="row">
                                {/* Start Single Map  */}
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="rn-contact-map-area position-relative">
                                        <div style={{ height: '550px', width: '100%' }}>
                                            <GoogleMapReact
                                            defaultCenter={this.props.center}
                                            defaultZoom={this.props.zoom}
                                            >
                                            <AnyReactComponent
                                                lat={59.955413}
                                                lng={30.337844}
                                                text="My Marker"
                                            />
                                            </GoogleMapReact>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Map  */}
                                
                                {/* Start Single Map  */}
                                <div className="col-lg-4 col-md-6 col-12 mt_sm--30">
                                    <div className="rn-contact-map-area position-relative">
                                        <div style={{ height: '550px', width: '100%' }}>
                                            <GoogleMapReact
                                            defaultCenter={this.props.center}
                                            defaultZoom={this.props.zoom}
                                            >
                                            <AnyReactComponent
                                                lat={59.955413}
                                                lng={30.337844}
                                                text="My Marker"
                                            />
                                            </GoogleMapReact>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Map  */}

                                {/* Start Single Map  */}
                                <div className="col-lg-4 col-md-6 col-12 mt_md--30 mt_sm--30">
                                    <div className="rn-contact-map-area position-relative">
                                        <div style={{ height: '550px', width: '100%' }}>
                                            <GoogleMapReact
                                            defaultCenter={this.props.center}
                                            defaultZoom={this.props.zoom}
                                            >
                                            <AnyReactComponent
                                                lat={59.955413}
                                                lng={30.337844}
                                                text="My Marker"
                                            />
                                            </GoogleMapReact>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Map  */}

                            </div>
                        </div>
                    </div>
                    {/* End Contact Map  */}

                    {/* Start Contact Map  */}
                    <div className="rn-contact-map-wrapper ptb--120 bg_color--1">
                        <div className="container">
                            <div className="row">
                                {/* Start Single Map  */}
                                <div className="col-lg-12 col-12">
                                    <div className="rn-contact-map-area position-relative">
                                        <div style={{ height: '550px', width: '100%' }}>
                                            <GoogleMapReact
                                            defaultCenter={this.props.center}
                                            defaultZoom={this.props.zoom}
                                            >
                                            <AnyReactComponent
                                                lat={59.955413}
                                                lng={30.337844}
                                                text="My Marker"
                                            />
                                            </GoogleMapReact>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Map  */}
                            </div>
                        </div>
                    </div>
                    {/* End Contact Map  */}

                </main>
                {/* End Page Wrapper  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                {/* Start Footer Area  */}
                <Footer />
                {/* End Footer Area  */}
            </>
        )
    }
}




export default GoogleMap;


