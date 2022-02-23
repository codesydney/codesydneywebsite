import React from "react";
import { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";

const Volunteers = () => {

  // dummy data
  const data = [
    {
      name: "Engramar Bollas",
      title: "Director",
      description:
        "Engramar's raison d'etre is to serve. A believer of servant leadership. He is passionate in providing service excellence to customers and ensuring people, culture, processes and technology support the same initiative. Engramar has worked in the IT industry for over 25 years. Having worked in Asia, the Middle East and Australia, Engramar has deep expertise in all aspects of software development lifecycle including business requirements analysis, systems design and development, product testing, release management, end-user training, pre-sales and post-implementation support. Engramar is working for GBG (Loqate) as Head of Customer Support. Engramar is also the current Director of Code.Sydney, an organisation which helps beginner programmers and novice data analysts showcase their newfound skills. Engramar has obtained a degree in Mathematics major in Computer Science from the Pontifical and Royal University of Santo Tomas in Manila.",
      linkdinLink: "https://www.linkedin.com/in/engramarbollas/",
      avatar:
        "https://codesydney.pythonanywhere.com/static/img/Mentor_Engramar.png",
    },
    {
      name: "Tony Johnson",
      title: "Mentor",
      description:
        "Despite having a Degree in Prehistory and Archaeology, Tony has survived 30 years in various IT careers; from hardware sales and service, support desk, linux systems administration, management, consultancy, and software development. He began coding commercially 8 years ago in Java for Structural Geology project, and moved on to full-stack web development. He has completed the Free Code Camp front-end and back-end curriculum for JavaScript, React/Redux, Node/Express, MongoDB and GraphQL. Tony is an active participant in Free Code Camp Sydney meetups. Currently, he is contracted as Project Manager for McLowd Financial Services Marketplace, a cloud-based software company.",
      linkdinLink: "https://www.linkedin.com/in/tony-johnson-53995413/",
      avatar:
        "https://codesydney.pythonanywhere.com/static/img/Mentor_Tony.png",
    },
    {
      name: "Promie Yutasane",
      title: "Mentor",
      description:
        "Promie is currently working as a Software Engineer at Hireup, a tech company with an online platform that connects people with disability with support workers. He has a very strong focus on full stack development and currently using NodeJS, Express, TypeScript, MongoDB, and React. He is a part-time student at UNSW studying Masters of IT focusing on Software Engineering and E-Commerce Systems. Promie spends his spare time mentoring new programmers at Code.Sydney. As one of the pioneer mentors, Promie has introduced standardised processes around GitHub code submission among developers.",
      linkdinLink: "https://www.linkedin.com/404/",
      avatar:
        "https://codesydney.pythonanywhere.com/static/img/Mentor_Promie.png",
    },
  ];

  const [volunteers, setVolunteers] = useState([]);
  const [sortedVolunteers, setSortedVolunteers] = useState([]);
  const [filterType, setFilterType] = useState("name");

  
  useEffect(() => {
    // get api data here later
    setVolunteers(data);
    setSortedVolunteers(data);
  }, []);

  const handleFilter = (text) => {
      let newSortedValunteers = volunteers.filter((volunteer) => {
        return volunteer[`${filterType}`].toLowerCase().includes(text.toLowerCase());
      });
      setSortedVolunteers(newSortedValunteers);
    };

  return (
    <>
      <div className="volunteers-page">
        <h2>Our volunteers</h2>

        <div className="filter input-group my-group">
          <input
            type="text"
            className="filter-input"
            name="snpid"
            placeholder="Find out volunteers..."
            onChange={(e) => handleFilter(e.target.value)}
          />
          <select className="filter-select" aria-label="Default select example" onChange={e => setFilterType(e.target.value)}>
            <option defaultValue="name">Name</option>
            <option value="title">Title</option>
            <option value="description">Description</option>
            {/* <option value="skills">Skills</option> */}
          </select>
        </div>

        <div className="d-none d-lg-block d-xl-block"></div>
        <div className="d-lg-none">
          {sortedVolunteers.map((volunteer, i) => {
            return (
              <div className="volunteer-card-sm" key={i}>
                <div className="volunteer-info-sm">
                  <img
                    src={volunteer.avatar}
                    alt={volunteer.name}
                    className="rounded-circle avatar"
                  />
                  <div className="volunteer-title-name-sm">
                    <span>{volunteer.name}</span>
                    <span>{volunteer.title}</span>
                  </div>
                  <a
                    href={volunteer.linkdinLink}
                    className="social-share social-style--2"
                  >
                    <FaLinkedin />
                  </a>
                </div>
                <div className="volunteer-description-sm section-title">
                  <p>{volunteer.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Volunteers;
