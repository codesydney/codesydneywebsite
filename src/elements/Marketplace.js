/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from "react"
import { FaMobileAlt } from "react-icons/fa"
import SubPageTitle from "./common/SubPageTitle"

const Volunteers = () => {
  // dummy data
  const data = [
    {
      name: "Worklog",
      technology: "React | Flask | MySQL",
      developer: "Leong Tang, Kevin Foong, Stephen Corral",
      category: "Category: Productivity",
      description:
        "Worklog is a niche alternative app developed to help in managing job diaries.",
      linkdinLink: "https://www.worklog.com.au/",
      avatar: "app_taskstech.png",
    },
    {
      name: "Flask CMS",
      technology: "Flask | MySQL | VueJS | Bulma CSS",
      developer: "Kevin Foong",
      category: "Category: Template",
      description:
        "Flask CMS is a content management system similar to WordPress, which allows you to manage web page content including blogs. It is simple to use yet rich with add-on features such as emailing facility. It can be customised by any web developer to fit any web site.",
      linkdinLink: "https://www.kevin7.net/projects",
      avatar: "app_flaskcms.png",
    },
    {
      name: "60s Idea Training",
      technology:
        "Next.js (TypeScript) | Firebase | ANT design | Tailwind | Express.js (TypeScript) | MongoDB | RESTAPI | GraphQL API | Jest",
      developer: "Hiroki Seino",
      category: "Category: Productivity",
      description:
        "60seconds Idea Training App helps your brainstorming exercise in a limited time. It is a method that enhances the ability to make quick decisions and increases the quality and speed of thinking. Decide on a topic first, which can be your concerns, doubts, what you learned, challenges and so on. Then, try to come up with 4 ~ 5 small ideas as soon as an idea comes to your mind within 60 seconds. These ideas can be reviewed afterwards and brushed up by creating your own note on your dashboard.",
      linkdinLink: "https://60s-idea-training.vercel.app/",
      avatar: "app_60slogo.png",
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
        <SubPageTitle title="Marketplace" />

        <div className="filter input-group my-group">
          <input
            type="text"
            className="filter-input"
            name="snpid"
            placeholder="Search for solutions..."
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
                    <FaMobileAlt />
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
                    <FaMobileAlt />
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

export default Volunteers
