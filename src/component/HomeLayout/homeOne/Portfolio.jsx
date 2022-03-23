import React, { Component } from "react";
import Slider from "react-slick";
import { portfolioSlick2 } from "../../../page-demo/script";
import { Link } from "react-router-dom";

const PortfolioList = [
  {
    image: "image-1",
    category: "Development",
    title: " Getting tickets to the big show",
  },
  {
    image: "image-2",
    category: "Development",
    title: " Getting tickets to the big show",
  },
  {
    image: "image-3",
    category: "Development",
    title: " Getting tickets to the big show",
  },
  {
    image: "image-4",
    category: "Development",
    title: " Getting tickets to the big show",
  },
  {
    image: "image-3",
    category: "Development",
    title: " Getting tickets to the big show",
  },
  {
    image: "image-4",
    category: "Development",
    title: " Getting tickets to the big show",
  },
];

class Portfolio extends Component {
  render() {
    let title = "Projects",
      description =
        "Code.Sydney is a volunteering organisation that supports beginner developers transition to gain paid employment while helping non-profit and charity organisations with their app needs. Below are some of our projects.";
    return (
      <React.Fragment>
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

            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h4>Prisoners Aid (ACT) Website Revamp</h4>
                  <p>
                    Prisoners Aid has been operating as a community organisation
                    in Canberra since 1963. Over the years they have assisted
                    thousands of clients - including prisoners, released
                    prisoners, families of prisoners, and those involved in the
                    court system. The project is to modernise and make Prisoners
                    Aid ACT's website more engaging for potential clients,
                    partners and the general public.
                  </p>
                  <p>
                    Project Team: Engramar Bollas, Brooke Semmler, Jacin Yan
                  </p>
                  <br />
                </div>
                <div className="col-lg-12">
                  <img
                    src="/assets/images/portfolio/paact.png"
                    alt="Portfolio Images"
                  />
                  <p style={{ color: "#F0F0F0" }}>
                    <a href="https://www.paact.org.au/" target="_blank">
                      Link to project
                    </a>
                  </p>
                </div>
                <br />
                <br />
                <br />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h4>Prisoners Aid (ACT) CRM</h4>
                  <p>
                    As part of the Prisoners Aid (ACT) engagement, a niche
                    bespoke CRM was built to manage support records of prisoners
                    and their families who are actively being supported by
                    PAACT.
                  </p>
                  <p>
                    Project Team: Jacin Yan, Engramar Bollas, Luci Temple,
                    Godsgift Akari, Jay Kim
                  </p>
                  <br />
                </div>
                <div className="col-lg-12">
                  <img
                    src="/assets/images/portfolio/paact-crm.png"
                    alt="Portfolio Images"
                  />
                  <p style={{ color: "#F0F0F0" }}>
                    <a href="https://app.paact.org.au/" target="_blank">
                      Link to project
                    </a>
                  </p>
                </div>
                <br />
                <br />
                <br />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h4>
                    Illawarra Multicultural Services Migrant Marketplace App
                    (Migram)
                  </h4>
                  <p>
                    Illawara Multicultural Service (IMS) have been supporting
                    culturally and linguistically diverse communities in the
                    Illawarra since 1980, providing assistance to migrants,
                    humanitarian visa entrants, and refugees. Code.Sydney is
                    building a niche marketplace app to help low-skilled
                    migrants get some livelihood through community engagement.
                  </p>
                  <p>
                    Project Team: Praveen Sequeira, Sam Sinadinovic, Lillian
                    Luzinsky, Hadi Khalili, Paolo Garde, Hussam Hattar
                  </p>
                  <br />
                </div>
                <div className="col-lg-12">
                  <img
                    src="/assets/images/portfolio/migram.png"
                    alt="Portfolio Images"
                  />
                  <p style={{ color: "#F0F0F0" }}>
                    <a href="https://www.migram.com.au/" target="_blank">
                      Link to project
                    </a>
                  </p>
                </div>
                <br />
                <br />
                <br />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h4>
                    The City of Parramatta Eisteddfod Society Website Revamp
                  </h4>
                  <p>
                    Established in 1951, the City of Parramatta Eisteddfod
                    Society Inc. is a not-for-profit organisation and an
                    association of volunteers whose principal aim is to provide
                    a safe and encouraging performance arts event where the
                    young people of Greater Western Sydney and beyond can
                    showcase their talents. Code.Sydney is chosen to revamp
                    their existing website.
                  </p>
                  <p>
                    Project Team: Stephen Corral, Hadi Khalili, Ella Ferreira,
                    Kevin Pan
                  </p>
                  <br />
                </div>
                <div className="col-lg-12">
                  <img
                    src="/assets/images/portfolio/eisteddfod.png"
                    alt="Portfolio Images"
                  />
                  <p style={{ color: "#F0F0F0" }}>
                    <a
                      href="https://www.eisteddfodparramatta.org.au/"
                      target="_blank"
                    >
                      Link to project
                    </a>
                  </p>
                </div>
                <br />
                <br />
                <br />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h4>Talking Time With Lukas and Alicia Podcast Website</h4>
                  <p>
                    Talking Time is a place where uncomfortable conversations
                    about incarceration and everything to do with it take place.
                    It is where the voice of those who have lived it, have loved
                    ones that have or are living it, work in it or have an
                    interest in it, come together in a safe and supportive
                    place.
                  </p>
                  <p>Project Team: Engramar Bollas</p>
                  <br />
                </div>
                <div className="col-lg-12">
                  <img
                    src="/assets/images/portfolio/talkingtime.png"
                    alt="Portfolio Images"
                  />
                  <p style={{ color: "#F0F0F0" }}>
                    <a
                      href="https://talkingtimepodcast.com.au/"
                      target="_blank"
                    >
                      Link to project
                    </a>
                  </p>
                </div>
                <br />
                <br />
                <br />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h4>
                    Rental Property Extractor App (In aid of searching temporary
                    shelter for the homeless)
                  </h4>
                  <p>
                    An app to help two Sydney-based charity organisations by
                    providing their back office staff a tool to easily extract
                    potential rental properties as temporary accommodation for
                    those who are on the brink of experiencing homelessness.
                  </p>
                  <p>Project Team: Kevin Foong</p>
                  <br />
                </div>
                <div className="col-lg-12">
                  <img
                    src="/assets/images/portfolio/propertyextractor.png"
                    alt="Portfolio Images"
                  />
                  <p style={{ color: "#F0F0F0" }}>
                    <a
                      href="https://www.propertyextractor.com.au/"
                      target="_blank"
                    >
                      Link to project
                    </a>
                  </p>
                </div>
                <br />
                <br />
                <br />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h4>Women of Colour Australia Mentorship Portal</h4>
                  <p>
                    Women of Colour Australia is a non-profit organisation run
                    by women of colour for women of colour. They exist to
                    champion Australia's Women of Colour through programs of
                    education, community support initiatives, and advocacy work.
                    This project is an online membership portal for Women of
                    Colour Australia which includes event management, chat
                    rooms, online course offerings, on-demand mentorship among
                    others.
                  </p>
                  <p>
                    Project Team: Bao Hoang, Ksenija Lunic, Pablo Gayoso, Max Du
                  </p>
                  <br />
                </div>
                <div className="col-lg-12">
                  <img
                    src="/assets/images/portfolio/woc.png"
                    alt="Portfolio Images"
                  />
                  <p style={{ color: "#F0F0F0" }}>
                    <a href="https://woc-au.herokuapp.com/" target="_blank">
                      Link to project
                    </a>
                  </p>
                </div>
                <br />
                <br />
                <br />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h4>
                    Dr. Lukas Carey, Advocacy on Convict Criminology Website
                  </h4>
                  <p>
                    Dr. Lukas Carey is a strong advocate for the importance of
                    Convict Criminology and the lived experience to govern the
                    direction of related policies and practices. Code.Sydney is
                    helping Dr. Lukas Carey to boost his online web presence so
                    he can assist more people and organisations alike.
                  </p>
                  <p>Project Team: Stephen Corral</p>
                  <br />
                </div>
                <div className="col-lg-12">
                  <img
                    src="/assets/images/portfolio/lukascarey.png"
                    alt="Portfolio Images"
                  />
                  <p style={{ color: "#F0F0F0" }}>
                    <a href="https://www.lukascarey.com.au/" target="_blank">
                      Link to project
                    </a>
                  </p>
                </div>
                <br />
                <br />
                <br />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h4>TasksTech App</h4>
                  <p>
                    An app which helps electricians manage their customers,
                    inventories and work diaries. TasksTech is a bespoke app for
                    a niche group of electricians.
                  </p>
                  <p>
                    Project Team: Kevin Foong, Fumihito Takanami, Stephen
                    Corral, Godsgift Akari, Max Du, Chintan Patel, Gabriel Djan,
                    Promie Yutasane, Prashanga Dhakal
                  </p>
                  <br />
                </div>
                <div className="col-lg-12">
                  <img
                    src="/assets/images/portfolio/taskstech.png"
                    alt="Portfolio Images"
                  />
                  <p style={{ color: "#F0F0F0" }}>
                    <a href="https://www.taskstech.com/" target="_blank">
                      Link to project
                    </a>
                  </p>
                </div>
                <br />
                <br />
                <br />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h4>
                    Deadly Connections Community and Justice Services Limited
                    Legacy Website
                  </h4>
                  <p>
                    Deadly Connections is a Aboriginal Community Led, Not For
                    Profit Organisation that breaks the cycles of disadvantage
                    and trauma to directly address the over-representation of
                    Aboriginal people in the child protection and justice
                    system/s. Code.Sydney developed the very first website of
                    Deadly Connections.
                  </p>
                  <p>Project Team: Engramar Bollas</p>
                  <br />
                </div>
                <div className="col-lg-12">
                  <img
                    src="/assets/images/portfolio/dc.png"
                    alt="Portfolio Images"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Portfolio;
