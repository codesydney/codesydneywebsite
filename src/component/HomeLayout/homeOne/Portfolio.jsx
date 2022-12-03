import React from "react"
import projectData from "./ProjectData.jsx"

const Portfolio = () => {
  let title = "Projects",
    description =
      "Code.Sydney is a volunteering organisation that supports beginner developers transition to gain paid employment while helping non-profit and charity organisations with their app needs. Below are some of our projects."

  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>{title}</h2>
              <p>{description}</p>
              <br />
              <br />
            </div>
          </div>
        </div>

        {projectData.map((project, index) => {
          return (
            <div className="row" key={index}>
              <div className="col-lg-12">
                <div className="section-title">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <p>Project Team: {project.team}</p>
                  <br />
                </div>
                <div className="col-lg-12">
                  <img
                    src={`/assets/images/portfolio/${project.image}.png`}
                    alt="Portfolio Images"
                  />
                  <p style={{ color: "#F0F0F0" }}>
                    <a
                      href={project.sponsorWebsite}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Link to project sponsor
                    </a>
                  </p>
                </div>
                <br />
                <br />
                <br />
              </div>
            </div>
          )
        })}

        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h4>Prisoners Aid (ACT) Website Revamp</h4>
              <p>
                Prisoners Aid has been operating as a community organisation in
                Canberra since 1963. Over the years they have assisted thousands
                of clients - including prisoners, released prisoners, families
                of prisoners, and those involved in the court system. The
                project is to modernise and make Prisoners Aid ACT's website
                more engaging for potential clients, partners and the general
                public.
              </p>
              <p>Project Team: Engramar Bollas JP, Brooke Semmler, Jacin Yan</p>
              <br />
            </div>
            <div className="col-lg-12">
              <img
                src="/assets/images/portfolio/paact.png"
                alt="Portfolio Images"
              />
              <p style={{ color: "#F0F0F0" }}>
                <a
                  href="https://www.paact.org.au/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link to project sponsor
                </a>
              </p>
            </div>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
