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

const Data = ({ data }) => {
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
      <SubPageTitle title="Australian Open Data" />
      <div>
        <div className="merch-distribution"></div>
        <div className="merch-distribution">
          <h6>
            Exploring Australian Open Datasets In cooperation with Data
            Engineering Pilipinas and Power BI Pilipinas
          </h6>
        </div>

        <div className="volunteer-info-sm">
          <br />
          <div style={{ display: "flex" }}>
            {" "}
            {/* Container for logos */}
            <a
              href="https://dataengineering.ph/"
              style={{ marginRight: "-10px" }} // Negative margin here
            >
              <img
                src="/assets/images/friends/dep.png"
                style={{ maxWidth: "30%", height: "auto" }}
                alt="Data Engineering Pilipinas"
              />
            </a>
            <a href="https://www.linkedin.com/company/powerbipilipinas">
              <img
                src="/assets/images/friends/pbi.png"
                style={{ maxWidth: "30%", height: "auto" }}
                alt="Power BI Pilipinas"
              />
            </a>
          </div>
        </div>

        <br />
        <br />

        <div className="merch-section">
          {data &&
            data.map((item, i) => {
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

export default Data
