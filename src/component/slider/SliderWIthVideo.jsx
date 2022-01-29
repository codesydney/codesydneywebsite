import React, { Component } from "react";

class SliderWithVideo extends Component {
  render() {
    return (
        <div className="slider-activation color-white">
            {/* Start Single Slide */}
            <div className="slide slide-style-1 slider-fixed--height d-flex align-items-center bg_image bg_image--1" data-black-overlay="6">
                <div className="container position-relative">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="inner">
                                <h1 className="title color-white">A digital <br /> agency. </h1>
                                <p className="description">There are many variations of passages of Lorem Ipsum
                                    available but the majority have suffered alteration.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            {/* End Single Slide */}
        </div>
    );
  }
}
export default SliderWithVideo;