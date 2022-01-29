import React from 'react'
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import TestimonialOne from "./testimonial/TestimonialOne";
import TestimonialTwo from "./testimonial/TestimonialTwo";

const Testimonial = () => {
    return (
        <>
            <PageHelmet pageTitle='Testimonial' />
            {/* Start Header Area  */}
            <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
            {/* End Header Area  */}

            {/* Start Breadcrump Area */}
            <Breadcrumb title={'Testimonial'}   />
            {/* End Breadcrump Area */}

            {/* Start Page Wrapper  */}
            <main className="page-wrapper">

                {/* Start Testimonia Area  */}
                <div className="rn-testimonial-area bg_color--1 ptb--120">
                    <div className="container">
                        <TestimonialOne />
                    </div>
                </div>
                {/* End Testimonia Area  */}

                {/* Start Testimonia Area  */}
                <div className="rn-testimonial-area">
                    <div className="container">
                        <TestimonialTwo />
                    </div>
                </div>
                {/* End Testimonia Area  */}


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

export default Testimonial
