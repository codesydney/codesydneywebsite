import React from "react"

const Slider = () => {
  return (
    <div className="slider-activation">
      {/* Start Single Slide */}
      <div
        className="slide slide-style-1 slider-fixed--height d-flex align-items-center bg_image bg_image--1"
        data-black-overlay="6"
      >
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner">
                <img src="/assets/images/logo/logo.png" alt="Code.Sydney" />
                <br />
                <h1 className="title theme-gradient">
                  Code.Sydney <br />{" "}
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <h3 className="title theme-gradient">
                &nbsp; Sydney Volunteer Programmers
              </h3>
            </div>
          </div>
          {/* Start Service Area */}
          {/* 
            <div className="service-wrapper service-white">
              <ServiceOne />
            </div> */}

          {/* End Service Area */}
        </div>
      </div>
      {/* End Single Slide */}
    </div>
  )
}

export default Slider
