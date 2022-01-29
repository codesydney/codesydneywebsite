import React, { Component } from "react";
import { Parallax } from "react-parallax";

const image1 =
  "/assets/images/bg/bg-image-11.jpg";



const SlideList = [
    {
        textPosition: 'text-center',
        category: '',
        title: 'Marketing',
        description: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
        buttonText: 'Contact Us',
        buttonLink: '/contact-us'
    }
]

class SliderThree extends Component {
  render() {
    return (
        <div className="slider-activation">
            {/* Start Single Slide */}
            <Parallax bgImage={image1} strength={500}>
                {SlideList.map((value , index) => (
                    <div className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center" key={index}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className={`inner ${value.textPosition}`}>
                                        {value.category ? <span>{value.category}</span> : ''}
                                        {value.title ? <h1 className="title theme-gradient">{value.title}</h1> : ''}
                                        {value.description ? <p className="description">{value.description}</p> : ''}
                                        {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Parallax>
            {/* End Single Slide */}
        </div>
    );
  }
}
export default SliderThree;