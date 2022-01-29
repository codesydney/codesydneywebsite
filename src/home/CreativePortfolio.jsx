import React from 'react';
import ScrollToTop from 'react-scroll-up';
import FooterTwo from "../component/footer/FooterTwo";
import { FiChevronUp} from "react-icons/fi";
import Header from "../component/header/HeaderFour";
import Helmet from "../component/common/Helmet";


const PortfolioList = [
    {
        images: '9',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        images: '8',
        category: 'Html',
        title: 'Getting tickets to the big show'
    },
    {
        images: '7',
        category: 'Graphic',
        title: 'Getting tickets to the big show'
    },
    {
        images: '4',
        category: 'Developer',
        title: 'The design is Thinking'
    },
    {
        images: '5',
        category: 'Freelancer',
        title: 'The portfolio For Frelancer'
    },
    {
        images: '6',
        category: 'Freelancer',
        title: 'You can see your Portfolio'
    },
    {
        images: '7',
        category: 'Freelancer',
        title: 'The Language of Developer'
    },
    {
        images: '1',
        category: 'Freelancer',
        title: 'The new Thinking for Design'
    },
    {
        images: '2',
        category: 'Freelancer',
        title: 'The new Thinking for Design'
    },
    {
        images: '3',
        category: 'Freelancer',
        title: 'Getting tickets to the big show'
    },
    {
        images: '8',
        category: 'Freelancer',
        title: 'You can see your Portfolio'
    },
    {
        images: '9',
        category: 'Freelancer',
        title: 'Getting tickets to the big show'
    },
]


const CreativePortfolio = () => {

    return (
        <div className="creative-portfolio">
            <Helmet pageTitle="Creative Portfolio" />
            
            {/* Start Header Area  */}
            <Header headerPosition="header--static" logo="symbol-dark" color="color-black"/>
            {/* End Header Area  */}

            {/* Start Portfolio Area  */}
            <div className="creative-portfolio-wrapper bg_color--1">
                <div className="creative-portfolio-wrapper plr--10">
                    <div className="row row--5">
                        {PortfolioList.map((value , i ) => (
                            <div className="col-lg-3 col-md-6 col-12" key={i}>
                                <div className="portfolio-style--3">
                                    <div className="thumbnail">
                                        <a href="/portfolio-details">
                                            <img className="w-100" src={`/assets/images/portfolio/portfolio-${value.images}.jpg`} alt="Portfolio Images"/>
                                        </a>
                                    </div>
                                    <div className="content">
                                        <p className="portfoliotype">{value.category}</p>
                                        <h4 className="title"><a href="/portfolio-details">{value.title}</a></h4>
                                        <div className="portfolio-btn">
                                            <a className="rn-btn text-white" href="/portfolio-details">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* End Portfolio Area  */}            

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

export default CreativePortfolio;