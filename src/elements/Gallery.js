import React from "react"
import SubPageTitle from "./common/SubPageTitle"
import ImageGallery from "react-image-gallery"
import database from "../../public/database.json";

const Gallery = () => {
  return (
    <>
      <div className="gallery-page">
        <SubPageTitle title="Gallery" />
        <ImageGallery
          items={database.gallery}
          thumbnailPosition="right"
          autoPlay="true"
          slideInterval={5000}
        />
      </div>
    </>
  )
}

export default Gallery
