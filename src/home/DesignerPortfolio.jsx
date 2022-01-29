import React from 'react'
import ScrollToTop from 'react-scroll-up';
import TextLoop from "react-text-loop";
import FooterTwo from "../component/footer/FooterTwo";
import { FiChevronUp} from "react-icons/fi";
import Header from "../component/header/HeaderFour";
import TabThree from "../elements/tab/TabThree";
import Helmet from "../component/common/Helmet";

const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Welcome to my World',
        description: '',
        buttonText: '',
        buttonLink: ''
    }
]

const DesignerPortfolio = () => {
    return (
        <div>
            <Helmet pageTitle="Designer Portfolio" />
            {/* Start Header Area  */}
            <Header headerPosition="header--static" logo="symbol-dark" color="color-black"/>
            {/* End Header Area  */}

            <div className="slider-wrapper">
                {/* Start Single Slide */}
                {SlideList.map((value , index) => (
                    <div className="slide designer-portfolio slider-style-3  d-flex align-items-center justify-content-center bg_color--5 rn-slider-height" key={index}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <div className="designer-thumbnail">
                                        <img src="/assets/images/about/designer-avatar.png" alt="Slider Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7 mt_md--40 mt_sm--40">
                                    <div className={`inner ${value.textPosition}`}>
                                        {value.category ? <span>{value.category}</span> : ''}
                                        <h1 className="title">Hi, I’m Jone Doe <br/>
                                        <TextLoop>
                                            <span> UX Designer.</span>
                                            <span> UI Designer.</span>
                                            <span> Content Writter.</span>
                                        </TextLoop>{" "}
                                        </h1>
                                        <h2>based in USA.</h2>
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
            
            {/* Start Designer Portfolio  */}
            <div className="designer-portfolio-area ptb--120 bg_color--1">
                <div className="wrapper plr--70 plr_sm--30 plr_md--30">
                    <TabThree column="col-lg-4 col-md-6 col-sm-6 col-12" />
                </div>
            </div>
            {/* End Designer Portfolio  */}

            {/* Start Footer Style  */}
            <FooterTwo />
            {/* End Footer Style  */}
            
            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}

        </div>
    )
}

export default DesignerPortfolio
