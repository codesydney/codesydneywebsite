/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from "react"
import { FaLinkedin, FaMobileAlt } from "react-icons/fa"
import SubPageTitle from "./common/SubPageTitle"

const Volunteers = () => {
  // dummy data
  const data = [
    {
      name: "David Taing",
      technology: "",
      developer: "",
      category: "",
      description:
        "David Taing is a very talented junior software developer whose skills and dedication have impressed everyone in the community. Having had the pleasure of working closely with David for several months, we can confidently say that he will be an invaluable asset to any software development team. From day one, he showcased an insatiable passion for programming and a strong desire to learn and grow in the field. His enthusiasm and drive were evident in every project he took on, consistently going above and beyond expectations. David possesses a deep understanding of programming concepts and demonstrates the ability to translate complex requirements into elegant, efficient code solutions. What sets David apart is his exceptional problem-solving skills. He approaches challenges with a calm and methodical mindset, carefully analyzing issues and identifying the most effective solutions. His attention to detail is remarkable, ensuring that every line of code is clean, well-structured, and thoroughly tested. David exhibits a strong commitment to writing scalable and maintainable code, making future enhancements and updates a breeze. In addition to his technical prowess, David excels in collaboration and communication. He is an active listener, readily absorbing feedback and implementing suggested improvements. His willingness to seek assistance when needed demonstrates a commendable level of humility and an eagerness to continuously improve. David also possesses excellent interpersonal skills, effortlessly building rapport with colleagues and contributing to a positive team environment. We are particularly impressed by David's ability to adapt to new technologies and frameworks. He quickly grasped unfamiliar concepts and swiftly became proficient in utilizing the latest tools in our industry. His commitment to staying up-to-date with emerging trends is truly commendable and ensures that they remain at the cutting edge of software development. Moreover, David is a natural problem-solver, consistently seeking opportunities to optimize code performance and enhance user experiences. Their ability to think critically and creatively enables them to come up with innovative solutions that drive tangible results. We have no doubt that David will continue to make significant contributions to any development team they join. In summary, we wholeheartedly recommend David as a junior or associate software developer. His technical expertise, passion for programming, and collaborative nature make them a standout professional. We are confident that David will excel in any future endeavors and will be an invaluable asset to any organization lucky enough to have them on board. Please feel free to reach out to jobready@code.sydney should you require any further information about David's skills and qualifications. We give our highest recommendation without reservation.",
      linkdinLink: "https://au.linkedin.com/in/teeang",
      avatar: "jrdev-jobready.png",
    },
  ]

  const [volunteers, setVolunteers] = useState([])
  const [sortedVolunteers, setSortedVolunteers] = useState([])
  const [filterType, setFilterType] = useState("name")

  const filterRef = useRef(null)

  useEffect(() => {
    // get api data here later
    setVolunteers(data)
    setSortedVolunteers(data)

    // filter input focus after page initial render
    filterRef.current.focus()
  }, [])

  const handleFilter = (text) => {
    let newSortedValunteers = volunteers.filter((volunteer) => {
      return volunteer[`${filterType}`]
        .toLowerCase()
        .includes(text.toLowerCase())
    })
    setSortedVolunteers(newSortedValunteers)
  }

  return (
    <>
      <div className="volunteers-page">
        <SubPageTitle title="Job Ready" />

        <div className="filter input-group my-group">
          <input
            type="text"
            className="filter-input"
            name="snpid"
            placeholder="Search for job ready candidate..."
            onChange={(e) => handleFilter(e.target.value)}
            ref={filterRef}
          />
          <select
            className="filter-select"
            aria-label="Default select example"
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option defaultValue="name">Name</option>
            <option value="technology">Technology</option>
            <option value="developer">Developer</option>
            <option value="category">Category</option>
            <option value="description">Description</option>
          </select>
        </div>

        <div className="d-none d-md-block d-lg-block d-xl-block">
          <div className="volunteerpage-layout-lg">
            {sortedVolunteers.map((volunteer, i) => {
              return (
                <div className="volunteer-card-lg" key={i}>
                  <img
                    src={`/assets/images/apps/${volunteer.avatar}`}
                    alt={volunteer.name}
                    className="rounded-circle avatar avatar-lg"
                  />
                  <div className="volunteer-title-name-lg">
                    <span>{volunteer.name}</span>
                    <span>{volunteer.technology}</span>
                    <span>{volunteer.developer}</span>
                    <span>{volunteer.category}</span>
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
                    src={`/assets/images/apps/${volunteer.avatar}`}
                    alt={volunteer.name}
                    className="rounded-circle avatar"
                  />
                  <div className="volunteer-title-name-sm">
                    <span>{volunteer.name}</span>
                    <span>{volunteer.technology}</span>
                    <span>{volunteer.developer}</span>
                    <span>{volunteer.category}</span>
                  </div>
                  <a href={volunteer.linkdinLink}>
                    <FaLinkedin />
                  </a>
                </div>
                s
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

export default Volunteers
