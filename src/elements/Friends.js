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
        <a href="#" style={{ display: "flex", justifyContent: "left" }}>
          <img
            src="/assets/images/friends/project_neo.png"
            style={{ maxWidth: "50%", height: "auto" }}
            alt="Project Neo"
          />
        </a>
      </div>
    </div>
  )
}

export default Friends
