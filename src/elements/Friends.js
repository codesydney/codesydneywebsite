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
      <SubPageTitle title="Friends" />
      <div className="volunteer-info-sm">
        <br />
        {/* Container for logos */}

        <a
          href="https://www.ims.org.au/"
          style={{ marginRight: "1px" }} // Adjusted margin here
        >
          <img
            src="/assets/images/friends/ims-logo.png"
            style={{ maxWidth: "50%", height: "auto", marginRight: "20px" }}
            alt="Illawarra Multicultural Services"
          />
        </a>

        <br />
        <br />
        <a
          href="https://legal123.com.au/?ref=217"
          style={{ marginRight: "1px" }} // Adjusted margin here
        >
          <img
            src="/assets/images/friends/legal123-logo.webp"
            style={{ maxWidth: "50%", height: "auto", marginRight: "20px" }}
            alt="Legal123"
          />
        </a>

        <br />
        <br />

        <a
          href="https://dataengineering.ph/"
          style={{ marginRight: "1px" }} // Adjusted margin here
        >
          <img
            src="/assets/images/friends/dep.png"
            style={{ maxWidth: "20%", height: "auto", marginRight: "20px" }}
            alt="Data Engineering Pilipinas"
          />
        </a>

        <a
          href="https://www.linkedin.com/company/powerbipilipinas"
          style={{ marginRight: "20px" }} // Adjusted margin here
        >
          <img
            src="/assets/images/friends/pbi.png"
            style={{ maxWidth: "20%", height: "auto", marginRight: "20px" }}
            alt="Power BI Pilipinas"
          />
        </a>

        <a href="https://powerusers.microsoft.com/t5/Power-Apps-Pilipinas/gh-p/PowerAppsPilipinas">
          <img
            src="/assets/images/friends/pap.jpg"
            style={{ maxWidth: "20%", height: "auto", marginRight: "20px" }}
            alt="Power Apps Pilipinas"
          />
        </a>

        <a href="https://www.facebook.com/genaicom/">
          <img
            src="/assets/images/friends/genaiph.png"
            style={{ maxWidth: "20%", height: "auto", marginRight: "20px" }}
            alt="Gen AI Philippines"
          />
        </a>

        <br />
        <br />

        <a href="#">
          <img
            src="/assets/images/friends/neo-logo.png"
            style={{ maxWidth: "20%", height: "auto", marginRight: "20px" }}
            alt="Project Neo"
          />
        </a>

        <a href="https://eisteddfodparramatta.org.au/">
          <img
            src="/assets/images/friends/eisteddfod-logo.png"
            style={{ maxWidth: "20%", height: "auto", marginRight: "20px" }}
            alt="City of Parramatta Eisteddfod Society"
          />
        </a>

        <a href="https://www.lloydconsulting.co/">
          <img
            src="/assets/images/friends/lloyd-logo.png"
            style={{ maxWidth: "20%", height: "auto", marginRight: "20px" }}
            alt="Lloyd Consulting"
          />
        </a>

        <a href="https://www.lukascarey.com.au/">
          <img
            src="/assets/images/friends/lukas-logo.png"
            style={{ maxWidth: "23.5%", height: "auto", marginRight: "20px" }}
            alt="Lukas Carey"
          />
        </a>

        <br />
        <br />

        <a href="https://www.paact.org.au/">
          <img
            src="/assets/images/friends/paact-logo.png"
            style={{ maxWidth: "50%", height: "auto", marginRight: "20px" }}
            alt="Prisoners Aid ACT"
          />
        </a>

        <br />
        <br />

        <a href="https://deadlyconnections.org.au/">
          <img
            src="/assets/images/friends/dccajs-logo.png"
            style={{ maxWidth: "50%", height: "auto", marginRight: "20px" }}
            alt="Deadly Connnections"
          />
        </a>

        <br />
        <br />

        <a href="https://womenofcolour.org.au/">
          <img
            src="/assets/images/friends/woca-logo.png"
            style={{ maxWidth: "50%", height: "auto", marginRight: "20px" }}
            alt="Women of Colour Australia"
          />
        </a>
      </div>
    </div>
  )
}

export default Friends
