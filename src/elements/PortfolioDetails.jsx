import React, { Component } from "react"
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa"
import ScrollToTop from "react-scroll-up"
import { FiChevronUp } from "react-icons/fi"

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/" },
  { Social: <FaTwitter />, link: "https://twitter.com/" },
]

class PortfolioDetails extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
    }
    this.openModal = this.openModal.bind(this)
  }
  openModal() {
    this.setState({ isOpen: true })
  }
  render() {
    return (
      <React.Fragment>
        {/* Start Portfolio Details */}
        <div className="rn-portfolio-details ptb--80 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <img
                  src="/assets/images/portfolio/portfolio-big-02.jpg"
                  alt="Portfolio Images"
                />
              </div>
            </div>
          </div>
        </div>
        {/* End Portfolio Details */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}
      </React.Fragment>
    )
  }
}
export default PortfolioDetails
