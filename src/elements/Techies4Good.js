import React, { useState } from "react"
import SubPageTitle from "./common/SubPageTitle"
import {
  FaRegTimesCircle,
  FaRegCreditCard,
  FaArrowAltCircleRight,
} from "react-icons/fa"

const PurchaseBtn = ({ link }) => {
  return (
    <a
      href={link}
      className="icon-pay"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaArrowAltCircleRight />
    </a>
  )
}

const Techies4Good = ({ techies4good }) => {
  const [modalInfo, setModalInfo] = useState({})

  const showModal = (e, value) => {
    if (!e.target.classList.contains("icon-pay")) {
      document
        .getElementById("merch-modal")
        .classList.replace("merch-modal-hide", "merch-modal-show")
      setModalInfo(value)
      console.log("get modal info")
    }
  }

  const hideModal = (e) => {
    if (e.target.classList.contains("hide-modal")) {
      document
        .getElementById("merch-modal")
        .classList.replace("merch-modal-show", "merch-modal-hide")
      setModalInfo({})
      console.log("hide modal")
    }
  }

  return (
    <div className="merch-page">
      <SubPageTitle title="Techies4Good" />
      <div>
        <div className="merch-distribution"></div>
        <div className="merch-distribution">
        </div>
  
        <div className="volunteer-info-sm">
          <br />
          {/* Container for logos */}
          <a
              href="https://www.ims.org.au/contact-us/" target="_blank"
              style={{ marginLeft: "10px" }} 
            >
              <img
                src="/assets/images/friends/ims-logo.png"
                style={{ maxWidth: "50%", height: "auto", marginLeft: "20px" }}
                alt="Illawarra Multicultural Services"
              />
            </a>
        </div>

        <div className="merch-distribution">
          <h6>
          Techies4Good is Code.Sydney's elite team. Its members are seasoned software and data engineers with commercial experience, invited and nominated by community leaders.
          </h6> 
          <h6>
            If you are a non-profit or charity organisation which requires some tech assistance, please contact<a href="https://www.ims.org.au/contact-us/" target="_blank" style={{ color: "green", marginLeft: "10px" }}
>Illawarra Multicultural Services to start the conversation</a> -><a href="https://www.ims.org.au/contact-us/" target="_blank" style={{ color: "green", marginLeft: "10px" }}>Contact IMS</a> 
            
          </h6>      
        </div>            

        <div className="merch-section">
          {techies4good &&
            techies4good.map((item, i) => {
              return (
                <div
                  key={i}
                  className="merch-card"
                  onClick={(e) => showModal(e, item)}
                >
                  <img
                    src={`/assets/images/t4g/${item.img}`}
                    alt={item.title}
                  />
                  <div className="container merch-card-right">
                    <div className="merch-card-title">
                      <h5>{item.title}</h5>
                      <PurchaseBtn link={item.link} />
                    </div>
                    <p className="merch-card-description">{item.description}</p>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
      <div
        id="merch-modal"
        className="merch-modal-hide hide-modal"
        onClick={hideModal}
      >
        <div className="merch-modal-card">
          <div className="merch-modal-card-left">
            <img
              src={`/assets/images/t4g/${modalInfo.img}`}
              alt={modalInfo.title}
            />
            <a href={modalInfo.link} target="_blank" rel="noopener noreferrer">
              <div>LinkedIn</div>
            </a>
          </div>
          <div className="merch-modal-card-right">
            <h5>{modalInfo.title}</h5>
            <span>{modalInfo.description}</span>
            {modalInfo.specific && (
              <ul>
                {modalInfo.specific.map((item, i) => {
                  return <li key={i}>{item}</li>
                })}
              </ul>
            )}
          </div>
          <FaRegTimesCircle
            className="icon-close hide-modal"
            onClick={hideModal}
          />
        </div>
      </div>
    </div>
  )
}

export default Techies4Good
