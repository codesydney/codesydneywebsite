import React, { Component } from "react";

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

class SliderFour extends Component {
  render() {
    return (
        <div className="slider-activation">
            {/* Start Single Slide */}
                {SlideList.map((value , index) => (
                    <div className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center bg_image bg_image--1" key={index} data-black-overlay="6">
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
            {/* End Single Slide */}
        </div>
    );
  }
}
export default SliderFour;