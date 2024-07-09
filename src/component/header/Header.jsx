import React, { Component } from "react"
import { Link } from "react-router-dom"
import { FiX, FiMenu } from "react-icons/fi"

class Header extends Component {
  constructor(props) {
    super(props)
    this.menuTrigger = this.menuTrigger.bind(this)
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this)
    // this.subMetuTrigger = this.subMetuTrigger.bind(this);
    window.addEventListener("load", function () {
      console.log("All assets are loaded")
    })
  }
  menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open")
  }

  CLoseMenuTrigger() {
    document.querySelector(".header-wrapper").classList.remove("menu-open")
  }

  render() {
    var elements = document.querySelectorAll(".has-droupdown > a")
    for (var i in elements) {
      if (Object.prototype.hasOwnProperty.call(elements, i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active")
          this.classList.toggle("open")
        }
      }
    }
    const { logo, color = "default-color" } = this.props
    let logoUrl
    if (logo === "light") {
      logoUrl = (
        <img src="/assets/images/logo/logo-light.png" alt="Digital Agency" />
      )
    } else if (logo === "dark") {
      logoUrl = (
        <img src="/assets/images/logo/logo-dark.png" alt="Digital Agency" />
      )
    } else if (logo === "symbol-dark") {
      logoUrl = <img src="/assets/images/logo/logo.png" alt="Digital Agency" />
    } else if (logo === "symbol-light") {
      logoUrl = (
        <img
          src="/assets/images/logo/logo-symbol-light.png"
          alt="Digital Agency"
        />
      )
    } else {
      logoUrl = <img src="/assets/images/logo/logo.png" alt="Digital Agency" />
    }
    return (
      <header
        className={`header-area header-style-two header--transparent ${color}`}
      >
        <div className="header-wrapper">
          <div className="header-left d-flex align-items-center">
            <nav className="mainmenunav d-lg-block ml--50">
              <ul className="mainmenu">
                <li>
                  <Link to="/">
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/techies4good">
                    <span>Techies4Good</span>
                  </Link>
                </li>
                <li>
                  <Link to="/apps4good">
                    <span>Apps4Good</span>
                  </Link>
                </li>
                <li>
                  <Link to="/portfolios">
                    <span>Portfolios</span>
                  </Link>
                </li>
                <li>
                  <Link to="/leadership">
                    <span>Leadership Team</span>
                  </Link>
                </li>
                <li className="has-droupdown">
                  <Link to="/friends">
                    <span>More</span>
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link to="/friends">
                        <span>Friends</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/community">
                        <span>Community</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/gallery">
                        <span>Activities</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/reviews">
                        <span>Reviews</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/merch">
                        <span>Merch</span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-right">
            {/* Start Humberger Menu  */}
            <div className="hamburger-menu d-block d-lg-none pl--20">
              <span
                onClick={this.menuTrigger}
                className="menutrigger text-white"
              >
                <FiMenu />
              </span>
            </div>
            {/* End Humberger Menu  */}
            <div className="close-menu d-block d-lg-none">
              <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                <FiX />
              </span>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
export default Header
