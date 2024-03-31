/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from "react"
import { FaLinkedin } from "react-icons/fa"
import SubPageTitle from "./common/SubPageTitle"
import database from "../../public/database.json"

const Friends = () => {
  const [sortedVolunteers, setSortedVolunteers] = useState(
    database.testimonials
  )
  const [filterType, setFilterType] = useState("name")

  const filterRef = useRef(null)

  const handleFilter = (text) => {
    let newSortedValunteers = sortedVolunteers.filter((volunteer) => {
      return volunteer[`${filterType}`]
        .toLowerCase()
        .includes(text.toLowerCase())
    })
    setSortedVolunteers(newSortedValunteers)
  }

  return (
    <div className="volunteers-page" style={{ marginBottom: "20px" }}>
      <h2>Friends</h2>

      <div className="volunteer-info-sm">
        <br />
        <a
          href="https://www.ims.org.au/"
          style={{ display: "flex", justifyContent: "left" }}
        >
          <img
            src="/assets/images/friends/ims-logo.png"
            style={{ maxWidth: "50%", height: "auto" }}
            alt="Project IMS"
          />
        </a>
      </div>

      <div className="volunteer-info-sm">
        <br />
        <a href="#" style={{ display: "flex", justifyContent: "left" }}>
          <img
            src="/assets/images/friends/neo-logo.png"
            style={{ maxWidth: "25%", height: "auto" }}
            alt="Project Neo"
          />
        </a>
      </div>

      <div className="volunteer-info-sm">
        <br />
        <a
          href="https://eisteddfodparramatta.org.au/"
          style={{ display: "flex", justifyContent: "left" }}
        >
          <img
            src="/assets/images/friends/eisteddfod-logo.png"
            style={{ maxWidth: "25%", height: "auto" }}
            alt="Eisteddfod"
          />
        </a>
      </div>

      <div className="volunteer-info-sm">
        <br />
        <a
          href="https://www.lloydconsulting.co/"
          style={{ display: "flex", justifyContent: "left" }}
        >
          <img
            src="/assets/images/friends/lloyd-logo.png"
            style={{ maxWidth: "25%", height: "auto" }}
            alt="Lloyd"
          />
        </a>
      </div>

      <div className="volunteer-info-sm">
        <br />
        <a
          href="https://www.lukascarey.com.au/"
          style={{ display: "flex", justifyContent: "left" }}
        >
          <img
            src="/assets/images/friends/lukas-logo.png"
            style={{ maxWidth: "50%", height: "auto" }}
            alt="Lukas"
          />
        </a>
      </div>

      <div className="volunteer-info-sm">
        <br />
        <a
          href="https://deadlyconnections.org.au/"
          style={{ display: "flex", justifyContent: "left" }}
        >
          <img
            src="/assets/images/friends/dccajs-logo.png"
            style={{ maxWidth: "25%", height: "auto" }}
            alt="Deadly Connnections"
          />
        </a>
      </div>

      <div className="volunteer-info-sm">
        <br />
        <a
          href="https://www.paact.org.au/"
          style={{ display: "flex", justifyContent: "left" }}
        >
          <img
            src="/assets/images/friends/paact-logo.png"
            style={{ maxWidth: "50%", height: "auto" }}
            alt="PAACT"
          />
        </a>
      </div>

      <div className="volunteer-info-sm">
        <br />
        <a
          href="https://womenofcolour.org.au/"
          style={{ display: "flex", justifyContent: "left" }}
        >
          <img
            src="/assets/images/friends/woca-logo.png"
            style={{ maxWidth: "50%", height: "auto" }}
            alt="WOCA"
          />
        </a>
      </div>
    </div>
  )
}

export default Friends
