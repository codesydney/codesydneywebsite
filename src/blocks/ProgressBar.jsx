import React from 'react'
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import ProgressOne from "./progressbar/ProgressOne";
import ProgressTwo from "./progressbar/ProgressTwo";
import Footer from "../component/footer/Footer";


const ProgressBar = () => {
    return (
        <>
            <PageHelmet pageTitle='Progress Bar' />

            {/* Start Header Area  */}
            <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
            {/* End Header Area  */}
            
            {/* Start Breadcrump Area */}
            <Breadcrumb title={'Progress Bar'}   />
            {/* End Breadcrump Area */}

            {/* Start Page Wrapper  */}
            <main className="page-wrapper">

                {/* Start Progress Bar Area   */}
                <div className="rn-progress-area ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row row--35">
                            <div className="col-lg-6 col-md-6 col-12">
                                <ProgressOne ProgressStyle="progress-bar--1" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 mt_sm--30">
                                <ProgressOne ProgressStyle="progress-bar--2" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Progress Bar Area   */}

                {/* Start Progress Bar Area   */}
                <div className="rn-progress-area pb--120 bg_color--1">
                    <div className="container">
                        <div className="row row--35">
                            <div className="col-lg-6 col-md-6 col-12">
                                <ProgressOne ProgressStyle="progress-bar--3" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 mt_sm--30">
                                <ProgressTwo ProgressStyle="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Progress Bar Area   */}

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

export default ProgressBar;