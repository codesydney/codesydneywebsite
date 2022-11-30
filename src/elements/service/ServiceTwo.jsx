import React from "react"
import { FaTrophy, FaMedal } from "react-icons/fa"

const ServiceList = [
  {
    icon: <FaTrophy />,
    title: "1st Place Winner, Hack4FI (Financial Inclusion)",
    description: "",
  },
  {
    icon: <FaMedal />,
    title: "3rd Place Winner, Hack4Homelessness",
    description: "",
  },
]

export default function ServiceTwo() {
  let title = "Awards",
    description = ""

  return (
    <div className="row">
      <div className="col-lg-4 col-12">
        <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
          <h2 className="title">{title}</h2>
          <p>{description}</p>
          <div className="service-btn">
            <a className="btn-transparent rn-btn-dark" href="/service">
              <span className="text"></span>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-8 col-12 mt_md--50">
        <div className="row service-one-wrapper">
          {ServiceList.map((val, i) => (
            <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
              <a>
                <div className="service service__style--2">
                  <div className="icon">{val.icon}</div>
                  <div className="content">
                    <h3 className="title">{val.title}</h3>
                    <p>{val.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
