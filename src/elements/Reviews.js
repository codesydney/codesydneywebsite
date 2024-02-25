/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from "react"
import { FaLinkedin } from "react-icons/fa"
import SubPageTitle from "./common/SubPageTitle"
import database from "../../public/database.json"

const Volunteers = () => {
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
    <>
      <div className="volunteers-page">
        <SubPageTitle title="Reviews" />
        <div className="d-none d-md-block d-lg-block d-xl-block">
          <div className="volunteerpage-layout-lg">
            {sortedVolunteers.map((volunteer, i) => {
              return (
                <div className="volunteer-card-lg" key={i}>
                  <div className="volunteer-title-name-lg">
                    <span>{volunteer.name}</span>
                    <span>{volunteer.title}</span>
                  </div>
                  <div className="volunteer-description-lg section-title">
                    {volunteer.testimonial}
                  </div>
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
                  <div className="volunteer-title-name-sm">
                    <span>{volunteer.name}</span>
                    <span>{volunteer.title}</span>
                  </div>
                </div>
                <div className="volunteer-description-sm section-title">
                  <p>{volunteer.testimonial}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Volunteers
