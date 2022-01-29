import React, { Component } from "react";
import Slider from "react-slick";
import { portfolioSlick } from "../../page-demo/script";

const PortfolioList = [
    {
        image: 'image-1',
        category: 'Development',
        title: ' Getting tickets to the big show'
    },
    {
        image: 'image-2',
        category: 'Development',
        title: ' Getting tickets to the big show'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: ' Getting tickets to the big show'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: ' Getting tickets to the big show'
    },
    {
        image: 'image-2',
        category: 'Development',
        title: ' Getting tickets to the big show'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: ' Getting tickets to the big show'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: ' Getting tickets to the big show'
    }
]

class PortfolioTwo extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="portfolio-sacousel-inner mt--60">
                    <Slider {...portfolioSlick}>
                        {PortfolioList.map((value , index) => (
                            <div className="portfolio portfolio-style--2" key={index}>
                                <div className="inner">
                                    <div className="thumbnail-inner">
                                        <div className={`thumbnail ${value.image}`}></div>
                                        <div className={`bg-blr-image ${value.image}`}></div>
                                    </div>
                                    <div className="content">
                                        <div className="inner">
                                            <p>{value.category}</p>
                                            <h4><a href="/portfolio-details">{value.title}</a></h4>
                                            <div className="portfolio-button">
                                                <a className="rn-btn" href="/portfolio-details">Case Study</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        ))}
                    </Slider>
                </div>
            </React.Fragment>
        )
    }
}
export default PortfolioTwo;