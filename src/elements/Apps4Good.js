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

const Apps4Good = ({ apps4good }) => {
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
      <SubPageTitle title="Apps4Good" />
      <div>
        <div className="merch-distribution"></div>
        <div className="merch-distribution">
        </div>
        
        <div className="volunteer-info-sm">
          <br />
          {/* Container for logos */}
          <a
              href="https://www.ims.org.au/"
              style={{ marginLeft: "10px" }} // Adjusted margin here
            >
              <img
                src="/assets/images/friends/ims-logo.png"
                style={{ maxWidth: "80%", height: "auto", marginLeft: "20px" }}
                alt="Illawarra Multicultural Services"
              />
            </a>
        </div>

        <div className="merch-distribution">
          <h7>
          Apps4Good is Code.Sydney's initiative to showcase apps made the community and ready to be customised for any non-profit and charity organisation.
          </h7><br/> 
          <h7>
            If you find any app below which can help your organisation, please feel free to let us know. You can contact <a href="https://www.ims.org.au/author/azoabe/" target="_blank" style={{ color: "green"}}>Amro Zoabe</a> from IMS at 0439 627 260 or send a <a href="https://www.ims.org.au/contact-us/" target="_blank" style={{ color: "green"}}>message</a> on IMS website.
          </h7><br/>   
          <h7>
            Please note that 75% of the revenue goes to the app owner, 25% goes to IMS, and the remaining 5% goes to Code.Sydney.
          </h7>             
        </div>   

        <br />
        <br />

        <div className="merch-section">
          {apps4good &&
            apps4good.map((item, i) => {
              return (
                <div
                  key={i}
                  className="merch-card"
                  onClick={(e) => showModal(e, item)}
                >
                  <img
                    src={`/assets/images/a4g/${item.img}`}
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
              src={`/assets/images/a4g/${modalInfo.img}`}
              alt={modalInfo.title}
            />
            <a href={modalInfo.link} target="_blank" rel="noopener noreferrer">
              <div>Sample Customisation</div>
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

export default Apps4Good
