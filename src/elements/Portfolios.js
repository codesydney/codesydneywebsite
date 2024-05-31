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

const Portfolios = ({ portfolios }) => {
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
      <SubPageTitle title="Individual Portfolios" />
      <div>
        <div className="merch-distribution"></div>
        <div className="merch-distribution">
          <h6></h6>
        </div>

        <div className="volunteer-info-sm">
          <br />
          {/* Container for logos */}
          <a
            href="https://dataengineering.ph/"
            style={{ marginRight: "1px" }} // Adjusted margin here
          >
            <img
              src="/assets/images/friends/dep.png"
              style={{ maxWidth: "10%", height: "auto" }}
              alt="Data Engineering Pilipinas"
            />
          </a>

          <a
            href="https://www.linkedin.com/company/powerbipilipinas"
            style={{ marginRight: "10px" }} // Adjusted margin here
          >
            <img
              src="/assets/images/friends/pbi.png"
              style={{ maxWidth: "10%", height: "auto" }}
              alt="Power BI Pilipinas"
            />
          </a>
          <a href="https://powerusers.microsoft.com/t5/Power-Apps-Pilipinas/gh-p/PowerAppsPilipinas">
            <img
              src="/assets/images/friends/pap.jpg"
              style={{ maxWidth: "10%", height: "auto" }}
              alt="Power Apps Pilipinas"
            />
          </a>
          <a href="https://www.facebook.com/genaicom/">
            <img
              src="/assets/images/friends/genaiph.png"
              style={{ maxWidth: "15%", height: "auto" }}
              alt="Gen AI Philippines"
            />
          </a>
          <a href="#">
            <img
              src="/assets/images/friends/neo-logo.png"
              style={{ maxWidth: "10%", height: "auto" }}
              alt="Power Apps Pilipinas"
            />
          </a>

        </div>

        <br />
        <br />

        <div className="merch-section">
          {portfolios &&
            portfolios.map((item, i) => {
              return (
                <div
                  key={i}
                  className="merch-card"
                  onClick={(e) => showModal(e, item)}
                >
                  <img
                    src={`/assets/images/data/${item.img}`}
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
              src={`/assets/images/data/${modalInfo.img}`}
              alt={modalInfo.title}
            />
            <a href={modalInfo.link} target="_blank" rel="noopener noreferrer">
              <div>Details</div>
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

export default Portfolios
