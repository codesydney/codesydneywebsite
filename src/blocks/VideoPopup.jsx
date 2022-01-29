import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import ModalVideo from 'react-modal-video';


class VideoPopup extends Component {
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render() {
        return (
            <>
                <PageHelmet pageTitle='Video Popup' />

                {/* Start Header Area  */}
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                {/* End Header Area  */}

                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Video Popup'}   />
                {/* End Breadcrump Area */}

                {/* Start Page Wrapper  */}
                <main className="page-wrapper">
                    {/* Start Video Area  */}
                    <div className="rn-section ptb--120 bg_color--1 line-separator">
                        <div className="container">
                             <div className="row sercice-details-content align-items-center">
                                <div className="col-lg-12">
                                    <div className="thumb position-relative">
                                        <img className="w-100" src="/assets/images/blog/bl-big-01.jpg" alt="Service Images"/>
                                        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                        <button className="video-popup position-top-center" onClick={this.openModal}><span className="play-icon"></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Video Area  */}

                    {/* Start Video Area  */}
                    <div className="rn-section ptb--120 bg_color--1 line-separator">
                        <div className="container">
                             <div className="row sercice-details-content align-items-center">
                                <div className="col-lg-6">
                                    <div className="thumb position-relative">
                                        <img className="w-100" src="/assets/images/portfolio/portfolio-big-02.jpg" alt="Service Images"/>
                                        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                        <button className="video-popup position-top-center theme-color" onClick={this.openModal}><span className="play-icon"></span></button>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="thumb position-relative">
                                        <img className="w-100" src="/assets/images/portfolio/portfolio-big-03.jpg" alt="Service Images"/>
                                        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                        <button className="video-popup position-top-center black-color" onClick={this.openModal}><span className="play-icon"></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Video Area  */}

                    {/* Start Video Area  */}
                    <div className="rn-section ptb--120 bg_color--1">
                        <div className="container">
                             <div className="row sercice-details-content align-items-center">
                                <div className="col-lg-4">
                                    <div className="thumb position-relative">
                                        <img className="w-100" src="/assets/images/portfolio/portfolio-big-02.jpg" alt="Service Images"/>
                                        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                        <button className="video-popup position-top-center theme-color md-size" onClick={this.openModal}><span className="play-icon"></span></button>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="thumb position-relative">
                                        <img className="w-100" src="/assets/images/portfolio/portfolio-big-01.jpg" alt="Service Images"/>
                                        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                        <button className="video-popup position-top-center theme-color md-size" onClick={this.openModal}><span className="play-icon"></span></button>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="thumb position-relative">
                                        <img className="w-100" src="/assets/images/portfolio/portfolio-big-03.jpg" alt="Service Images"/>
                                        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                        <button className="video-popup position-top-center theme-color md-size" onClick={this.openModal}><span className="play-icon"></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Video Area  */}




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

export default VideoPopup;