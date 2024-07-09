/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from "react"
import SubPageTitle from "./common/SubPageTitle"

const Consultation = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://koalendar.com/e/meet-with-code-sydney?embed=true"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      <div className="consultation-page">
        <SubPageTitle title="Free Consultation" />
        <iframe
          src="https://koalendar.com/e/meet-with-code-sydney?embed=true"
          width="100%"
          height="800px"
          frameBorder="0"
          title="Koalendar Embed"
        ></iframe>
      </div>
    </>
  )
}

export default Consultation
