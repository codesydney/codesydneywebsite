import React, { Component } from "react";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


const PortfolioList = [
    {
        image: 'image-1',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-2',
        category: 'html',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-4',
        category: 'html',
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
    },
]


const images = [
  '/assets/images/portfolio/big/dp-big--portfolio-01.jpg',
  '/assets/images/portfolio/big/dp-big--portfolio-02.jpg',
  '/assets/images/portfolio/big/dp-big--portfolio-03.jpg',
  '/assets/images/portfolio/big/dp-big--portfolio-04.jpg',
];

class PortfolioGalleryPopup extends Component{
    constructor(props) {
        super(props);
        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }
    
    render(){
        const {column , item  } = this.props;
        const list = PortfolioList.slice(0 , item);
        const { photoIndex, isOpen } = this.state;
        
        return(
            <React.Fragment>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + images.length - 1) % images.length,
                        })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}

                {list.map((value , index) => (
                    <div className={`${column}`} key={index}>
                        <div className="portfolio-tilthover">
                            <div onClick={() => this.setState({ isOpen: true, photoIndex: index })} className="Tilt-inner">
                                <div className="portfolio">
                                    <div className="thumbnail-inner">
                                        <div className={`thumbnail ${value.image}`}></div>
                                        <div className={`bg-blr-image ${value.image}`}></div>
                                    </div>
                                    <div className="content">
                                        <div className="inner">
                                            <p>{value.category}</p>
                                            <h4><a href="#portfolio-details">{value.title}</a></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
               
            </React.Fragment>
        )
    }
}
export default PortfolioGalleryPopup;