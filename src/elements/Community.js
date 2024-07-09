/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from "react"
import { FaLinkedin } from "react-icons/fa"
import SubPageTitle from "./common/SubPageTitle"
import database from "../../public/database.json"

const Community = () => {
  const [sortedVolunteers, setSortedVolunteers] = useState(database.community)
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
    <>
      <div className="volunteers-page">
        <SubPageTitle title="Community" />

        <div className="d-none d-md-block d-lg-block d-xl-block">
          <div className="volunteerpage-layout-lg">
            {sortedVolunteers.map((volunteer, i) => {
              return (
                <div className="volunteer-card-lg" key={i}>
                  <img
                    src={`/assets/images/volunteers/${volunteer.avatar}`}
                    alt={volunteer.name}
                    className="rounded-circle avatar avatar-lg"
                  />
                  <div className="volunteer-title-name-lg">
                    <span>{volunteer.name}</span>
                    <span>{volunteer.title}</span>
                  </div>
                  <div className="volunteer-description-lg section-title">
                    {volunteer.description}
                  </div>
                  <a
                    href={volunteer.linkdinLink}
                    className="social-share social-style--2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
        <div className="d-md-none volunteerpage-layout-sm">
          {sortedVolunteers.map((volunteer, i) => {
            return (
              <div className="volunteer-card-sm" key={i}>
                <div className="volunteer-info-sm">
                  <img
                    src={`/assets/images/volunteers/${volunteer.avatar}`}
                    alt={volunteer.name}
                    className="rounded-circle avatar"
                  />
                  <div className="volunteer-title-name-sm">
                    <span>{volunteer.name}</span>
                    <span>{volunteer.title}</span>
                  </div>
                  <a href={volunteer.linkdinLink}>
                    <FaLinkedin />
                  </a>
                </div>
                <div className="volunteer-description-sm section-title">
                  <p>{volunteer.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Community
