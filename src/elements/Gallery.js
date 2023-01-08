import React from "react"
import SubPageTitle from "./common/SubPageTitle"
import ImageGallery from "react-image-gallery"

const Gallery = () => {
  const gallery = [
    {
      original: "/assets/images/gallery/pythonteam.jpg",
      thumbnail: "/assets/images/gallery/pythonteam.jpg",
      description:
        "With Matthew Kean, Minister for Innovation and Better Regulation during the presentation of our 1st place award at Vibewire's Hack4FI (Financial Inclusion).",
    },
    {
      original: "/assets/images/gallery/xmas2021.jpg",
      thumbnail: "/assets/images/gallery/xmas2021.jpg",
      description: "End of year mentors lunch 2021",
    },
    {
      original: "/assets/images/gallery/3rdh4h.jpg",
      thumbnail: "/assets/images/gallery/3rdh4h.jpg",
      description:
        "Code.Sydney's winning team at Vibewire's Hack4Homelessness. We bagged the 3rd spot.",
    },
    {
      original: "/assets/images/gallery/xmas2019.jpg",
      thumbnail: "/assets/images/gallery/xmas2019.jpg",
      description: "End of year mentors lunch 2019",
    },
    {
      original: "/assets/images/gallery/hack4dv.jpg",
      thumbnail: "/assets/images/gallery/hack4dv.jpg",
      description:
        "Code.Sydney's contingent at Vibewire's Hack4DV (Domestic Violence).",
    },
    {
      original: "/assets/images/gallery/team_zoned.jpg",
      thumbnail: "/assets/images/gallery/team_zoned.jpg",
      description:
        "During Covid-19 lockdown around April 2020, Code.Sydney joined an online hackathon organised by StayHomeHack. As volunteer programmers, we thought we have an obligation to share our thoughts on what was happening at the time.",
    },
    {
      original: "/assets/images/gallery/fccteam.jpg",
      thumbnail: "/assets/images/gallery/fccteam.jpg",
      description:
        "With Quincy Larson, founder of Free Code Camp during his visit to Melbourne.",
    },
    {
      original: "/assets/images/gallery/xmas2018.jpg",
      thumbnail: "/assets/images/gallery/xmas2018.jpg",
      description: "End of year mentors lunch 2018",
    },    
    {
      original: "/assets/images/gallery/actura.jpg",
      thumbnail: "/assets/images/gallery/actura.jpg",
      description: "Guest Judge at Actura's OneWorld Robotics Competition",
    },
    {
      original: "/assets/images/gallery/PostCovid2020.jpg",
      thumbnail: "/assets/images/gallery/PostCovid2020.jpg",
      description: "Post-COVID Lockdown lunch 2020",
    },
  ]
  return (
    <>
      <div className="gallery-page">
        <SubPageTitle title="Gallery" />
        <ImageGallery
          items={gallery}
          thumbnailPosition="right"
          autoPlay="true"
          slideInterval={5000}
        />
      </div>
    </>
  )
}

export default Gallery
