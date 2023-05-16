/* eslint-disable react-hooks/exhaustive-deps */
import React from "react"
import { FaMobileAlt } from "react-icons/fa"
import SubPageTitle from "./common/SubPageTitle"

const Testimonials = ({ testimonials }) => {

  return (
    <>
      <div className="volunteers-page">
        <SubPageTitle title="Testimonials" />
         <div className="d-none d-md-block d-lg-block d-xl-block">
          <div className="volunteerpage-layout-lg">
            {testimonials && testimonials.map((testimonial, i) => {
              return (
                <div className="volunteer-card-lg" key={i}>
                  <div className="volunteer-title-name-lg testimonial-title-name-lg">
                    <span>{testimonial.name}</span>
                    <span>{testimonial.title}</span>
                  </div>
                  <div className="volunteer-description-lg section-title">
                    {testimonial.testimonial}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials
