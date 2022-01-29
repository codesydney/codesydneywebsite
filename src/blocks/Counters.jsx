import React from 'react'
import TeamOne from "./team/TeamOne";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import CounterOne from "../elements/counters/CounterOne";
import CounterTwo from "../elements/counters/CounterTwo";

import Footer from "../component/footer/Footer";

const Counters = () => {
    return (
        <>
            <PageHelmet pageTitle='Counters' />

            {/* Start Header Area  */}
            <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
            {/* End Header Area  */}
            
            {/* Start Breadcrump Area */}
            <Breadcrumb title={'Counters'}   />
            {/* End Breadcrump Area */}

            {/* Start Page Wrapper  */}
            <main className="page-wrapper">

                {/* Start Counterup Area */}
                <div className="counterup-area ptb--120 bg_color--1">
                    <div className="container">
                        <CounterOne />
                    </div>
                </div>
                {/* End Counterup Area */}


                {/* Start Counterup Area */}
                <div className="counterup-area ptb--120 bg-theme-gradient theme-text-white">
                    <div className="container">
                        <CounterOne />
                    </div>
                </div>
                {/* End Counterup Area */}

                {/* Start Counterup Area */}
                <div className="counterup-area ptb--120 bg_color--1">
                    <div className="container">
                        <CounterTwo />
                    </div>
                </div>
                {/* End Counterup Area */}

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

export default Counters