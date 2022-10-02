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
      logoUrl = <img src="/assets/images/logo/logo.png" alt="Digital Agency" />
    } else if (logo === "dark") {
      logoUrl = <img src="/assets/images/logo/logo.png" alt="Digital Agency" />
    } else if (logo === "symbol-dark") {
      logoUrl = <img src="/assets/images/logo/logo.png" alt="Digital Agency" />
    } else if (logo === "symbol-light") {
      logoUrl = <img src="/assets/images/logo/logo.png" alt="Digital Agency" />
    } else {
      logoUrl = <img src="/assets/images/logo/logo.png" alt="Digital Agency" />
    }

    return (
      <header
        className={`header-area formobile-menu header--transparent ${color}`}
      >
        <div className="header-wrapper" id="header-wrapper">
          <div className="header-left">
            <div className="logo">{/* <a href="/">{logoUrl}</a> */}</div>
          </div>
          <div className="header-right">
            <nav className="mainmenunav d-lg-block">
              <ul className="mainmenu" style={{ color: "#F0F0F0" }}>
                <li>
                  <Link to="/">
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/volunteers">
                    <span>Volunteers</span>
                  </Link>
                </li>
                <li>
                  <Link to="/gallery">
                    <span>Gallery</span>
                  </Link>
                </li>
                <li>
                  <Link to="/merch">
                    <span>Merch</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contributors">
                    <span>Contributors</span>
                  </Link>
                </li>
                {/*
                <li id="legacy-website-link">
                  <a
                    className="rn-btn"
                    href="https://codesydney.pythonanywhere.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Legacy Website</span>
                  </a>
                </li>
                */}
              </ul>
            </nav>
            {/* Start Hamburger Menu  */}
            <div className="hamburger-menu d-block pl--20 d-lg-none">
              <span
                onClick={this.menuTrigger}
                className="menutrigger text-white"
              >
                <FiMenu />
              </span>
            </div>
            {/* End Hamburger Menu  */}
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
