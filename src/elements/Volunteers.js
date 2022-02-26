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
        "Mentor_Engramar.png",
    },
    {
      name: "Tony Johnson",
      title: "Mentor",
      description:
        "Despite having a Degree in Prehistory and Archaeology, Tony has survived 30 years in various IT careers; from hardware sales and service, support desk, linux systems administration, management, consultancy, and software development. He began coding commercially 8 years ago in Java for Structural Geology project, and moved on to full-stack web development. He has completed the Free Code Camp front-end and back-end curriculum for JavaScript, React/Redux, Node/Express, MongoDB and GraphQL. Tony is an active participant in Free Code Camp Sydney meetups. Currently, he is contracted as Project Manager for McLowd Financial Services Marketplace, a cloud-based software company.",
      linkdinLink: "https://www.linkedin.com/in/tony-johnson-53995413/",
      avatar:
        "Mentor_Tony.png",
    },
    {
      name: "Promie Yutasane",
      title: "Mentor",
      description:
        "Promie is currently working as a Software Engineer at Hireup, a tech company with an online platform that connects people with disability with support workers. He has a very strong focus on full stack development and currently using NodeJS, Express, TypeScript, MongoDB, and React. He is a part-time student at UNSW studying Masters of IT focusing on Software Engineering and E-Commerce Systems. Promie spends his spare time mentoring new programmers at Code.Sydney. As one of the pioneer mentors, Promie has introduced standardised processes around GitHub code submission among developers.",
      linkdinLink: "https://www.linkedin.com/in/%F0%9F%A7%91%F0%9F%8F%BB%E2%80%8D%F0%9F%92%BB-promie-yutasane-635a741b8/",
      avatar:
        "Mentor_Promie.png",
    },
    {
      name: "Kevin Foong",
      title: "Mentor",
      description:
        "Kevin has over 20 years of working experience in a variety of IT related areas including software development, web design and information management. The latter in the area of library and information science. He is currently working as a System Administrator for NSW Health where he mainly utilises SQL for report generation. He recently started learning Python, at first because he wanted to get into data science, but then found Flask along the way. He now considers himself a Python and Flask enthusiast and is interested in sharing his knowledge and learning from others.",
      linkdinLink: "https://www.linkedin.com/in/kevin-foong-044794/",
      avatar:
        "Mentor_Kevin.png",
    },
    {
      name: "Surya Setiyaputra",
      title: "Mentor",
      description:
        "Surya is a full-stack software developer with more than three-year professional experience with a previous life as a research scientist in Biophysics. He is a self-described ‘generalist’ with practical experience in setting up small businesses, personal finance, design, community building and tech startup in both Australia and Indonesia. Since mid-2019, Surya has been an active contributor to Free Code Camp Sydney meetups. As a self-taught developer, he is particularly interested in helping new coders who are interested in landing their entry role as a Junior Developer after going through the FreeCodeCamp full-stack curriculum. His current favourite web development stacks are Kotlin/Spring Boot, Ruby on Rails, Node, ReactJS and VueJS. In the near future, he aims to learn more SQL and functional programming. When he is not coding, Surya likes to read books about economics, anthropology, history and politics.",
      linkdinLink: "https://www.linkedin.com/in/suryast/?originalSubdomain=au",
      avatar:
        "Mentor_Surya.png",
    },
    {
      name: "Bin Liu",
      title: "Mentor",
      description:
        "Bin has ten years working experience as a Software Developer and Business Intelligence consultant. His development career started with Java. Recently he is using some script languages like Python, Perl and JavaScript and actively participating as the lead developer of Census+ project. Bin has good sense in coding and is good at learning new technologies. He is interested in Python because it can be applied to many technological areas, such as web application development, data science and so on. He would like to make progress with others who are also interested in Python-related technologies.",
      linkdinLink: "https://www.linkedin.com/in/bin-liu-308b841a/",
      avatar:
        "Mentor_Bin.png",
    },
    {
      name: "June Kongyang",
      title: "Mentor",
      description:
        "June Kongyang is currently a design and development engineer. She has broad experience in design, development and testing of network security systems. June started coding using C and C++ for robotic control automation such as sensors and micro-controllers. June graduated with a masters degree in Electrical Engineering. She joined Code.Sydney due to her interest in both Python and JavaScript programming languages. She found both languages pretty handy on increasing work productivity. She is keen to share her knowledge to anyone who wants to learn coding.",
      linkdinLink: "https://www.linkedin.com/in/june-kongyang/?originalSubdomain=au",
      avatar:
        "Mentor_June.png",
    },
    {
      name: "Qj Stout-Spykers",
      title: "Mentor",
      description:
        "Qj is a computer science graduate and achieved high distinctions in microprocessor systems, systems and database design, discrete mathematics and programming principles. His primary software development experience is in embedded systems, deep-learning and back-end engineering. Currently, he is constraining his focus to mastering full-stack web development, after which, he has his eye on studying project management. As a Code.Sydney volunteer, Qj has acted as a technical team lead and principal back-end engineer on the CodeSydney website rework and internal 'Strataly’ project respectively. Qj can usually be found deep in some obscure documentation or sharing his knowledge on the Code.Sydney Slack. In his past life, Qj was a professional musician and guitar tutor.",
      linkdinLink: "https://www.linkedin.com/in/qj-stout-spykers-704b221a1/?originalSubdomain=au",
      avatar:
        "Mentor_Qj.png",
    },
    {
      name: "Gabriel Djan",
      title: "Mentor",
      description:
        "Gabriel started her design career in a fire safety company as Information Designer, in charge of emergency evacuation diagram design and production for clients like Only About Children, AMF Bowling Group, MECCA to name a few. She then left the Information Designer role for UX UI designer role to work for a company specialising in applications software design, programming, system configuration, engineering, installation, commissioning of Building Automation, Management Systems & Access Control Systems. She designed user interfaces, user experience, and data analytics for real live data IoT and SaaS applications for clients like Citigroup, Bennelong, Crown Group, WeWork, Sans Clinic, and Dematic. Her unique combination of experiences complementing the UX UI Designer role includes a Computer Science (Bachelor Degree - Distinction) degree, digital design, and digital photography. She is a Tridium Niagara 4 Technical Certification Program (TCP) trained. In her free time, she likes exploring investment vehicles/products.",
      linkdinLink: "https://www.linkedin.com/in/gabrieltwd/",
      avatar:
        "Mentor_Gabriel.png",
    },
    {
      name: "Lillian Luzinsky",
      title: "Mentor",
      description:
        "Lillian is a versatile Designer and Creative Technologist, with a keen eye for clean and elegant design throughout all her projects. She possesses a wide range of skills, including UX/UI Design, Motion Graphics and Software Engineering. Lillian absolutely loves CSS and making things look great and user-friendly. Before transitioning into Front End Development, Lillian spent time as a Graphic Designer for property marketing and later shifted into freelancing, where she has been building her own business for 13 years providing high quality design services. Due to her diverse abilities, she is highly proficient in collaborating and communicating with cross-functional teams, and loves learning and refining her programming skills.",
      linkdinLink: "https://www.linkedin.com/in/lillian-luzinsky/?originalSubdomain=au",
      avatar:
        "Mentor_Lillian.png",
    },
    {
      name: "Stephen Corral",
      title: "Mentor",
      description:
        "Stephen is a graduate of computer science in 2013 and currently taking a graduate certificate course at UTS on a part time basis. He completed the Free Code Camp web design certification and has exposure to React, Redux and Context API in volunteer projects and proof of concept initiatives in Code.Sydney. He is also familiar with C#/SQL Server and is interested in Linux. Stephen was the technical team lead of a successfully completed project for Dr. Lukas Carey's personal advocacy around convict criminology.",
      linkdinLink: "https://www.linkedin.com/in/stephen-melben-corral-73468b6b/?originalSubdomain=au",
      avatar:
        "Mentor_Stephen.png",
    },
    {
      name: "Jacin Yan",
      title: "Mentor",
      description:
        "Jacin is an enthusiastic web developer who is seeking a new challenging career after many years of being in Civil/Structural Engineering. He found his greater passion in coding and programming on an occasion when he brushed on up his programming skills utilizing the APIs of Finite Element software and therefore he gained an IT diploma following this. Soon after the most recent graduation, he joined the CRM and website projects of PAACT, being the technical team lead with an emphasis on frontend development. His tech stack includes React.js, Redux, React-Query, react testing library, where he fully embraces the idea of functional programming that aligns with his analytical skills. On top of that, what makes him unique is he can also be found passionate about UI/UX design with his keen eye on aesthetics because of years of immersion in structural design and dealings with architects.",
      linkdinLink: "https://www.linkedin.com/in/jacin-ji-yan/?originalSubdomain=au",
      avatar:
        "Mentor_Jacin.png",
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
      return volunteer[`${filterType}`]
        .toLowerCase()
        .includes(text.toLowerCase());
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
          <select
            className="filter-select"
            aria-label="Default select example"
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option defaultValue="name">Name</option>
            <option value="title">Title</option>
            <option value="description">Description</option>
            {/* <option value="skills">Skills</option> */}
          </select>
        </div>

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
                  >
                    <FaLinkedin />
                  </a>
                </div>
              );
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
                  <a
                    href={volunteer.linkdinLink}
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
