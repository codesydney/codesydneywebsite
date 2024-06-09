import React from "react"
import SubPageTitle from "./common/SubPageTitle"
import ImageGallery from "react-image-gallery"
import database from "../../public/database.json";

const Gallery = () => {
  return (
    <>
      <div className="gallery-page">
        <SubPageTitle title="Activities" />
        <ImageGallery
          items={database.gallery}
          thumbnailPosition="right"
          autoPlay="true"
          slideInterval={5000}
        />
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 100px)', // Adjust this value if you have other content on the page
        marginTop: '20px' // Optional, adjust as needed
      }}>
        <h2>Strava</h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <iframe
            frameBorder='0'
            height='454'
            scrolling='no'
            src='https://www.strava.com/clubs/1099484/latest-rides/b0536fd9883e7a1ad157a13212b5944a1be23882?show_rides=true'
            width='300'
            style={{ maxWidth: '100%' }}
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default Gallery