import React, { Component } from "react";
import {Link} from "react-router-dom";
const PortfolioList = [
    {
        image: 'image-1',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-2',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-5',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-6',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-7',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-8',
        category: 'Development',
        title: 'Getting tickets to the big show'
    }
]

class PortfolioMasonry extends Component{
    render(){
        const {column } = this.props;
        const list = PortfolioList.slice(0 , this.props.item);
        return(
            <React.Fragment>
                {list.map((value , index) => (
                    <div className={`${column}`} key={index}>
                        <div className="Tilt-inner">
                            <div className="portfolio">
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
                                <Link className="link-overlay" to="/portfolio-details"></Link>
                            </div>
                        </div>
                    </div>
                ))}
               
            </React.Fragment>
        )
    }
}
export default PortfolioMasonry;