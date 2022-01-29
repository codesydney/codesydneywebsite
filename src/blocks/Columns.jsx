import React from 'react'
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";


const Columns = () => {
    return (
        <>
            <PageHelmet pageTitle='Columns' />

            {/* Start Header Area  */}
            <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
            {/* End Header Area  */}
            
            {/* Start Breadcrump Area */}
            <Breadcrumb title={'Columns'}   />
            {/* End Breadcrump Area */}

            {/* Start Page Wrapper  */}
            <main className="page-wrapper">
                
                {/* Start Columns Area  */}
                <div className="rn-columns-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="single-column">
                                    <h4 className="tilte">One Full</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend toitrrepeat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Start Columns Area  */}
                
                {/* Start Columns Area  */}
                <div className="rn-columns-area ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="single-column">
                                    <h4 className="tilte">One Half</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend toitrrepeat.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 mt_sm--30">
                                <div className="single-column">
                                    <h4 className="tilte">One Half</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend toitrrepeat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Start Columns Area  */}
                
                {/* Start Columns Area  */}
                <div className="rn-columns-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="single-column">
                                    <h4 className="tilte">One Third</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12 mt_sm--30">
                                <div className="single-column">
                                    <h4 className="tilte">One Third</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12 mt_sm--30 mt_md--30">
                                <div className="single-column">
                                    <h4 className="tilte">One Third</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Start Columns Area  */}
                
                {/* Start Columns Area  */}
                <div className="rn-columns-area ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="single-column custom-color">
                                    <h4 className="tilte">One Third</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12 mt_sm--30">
                                <div className="single-column custom-color custom-color--1">
                                    <h4 className="tilte">One Third</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12 mt_sm--30 mt_md--30">
                                <div className="single-column custom-color custom-color--2">
                                    <h4 className="tilte">One Third</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Start Columns Area  */}

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

export default Columns;