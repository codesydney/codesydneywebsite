import React from "react"
import { FaFile, FaFileContract } from "react-icons/fa"

export default function ServiceTwo() {
  return (
    <div className="row">
      <div className="col-lg-4 col-12">
        <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
          <h2 className="title">Submission</h2>
        </div>
      </div>

      <div className="col-lg-8 col-12 mt_md--50">
        <div className="row service-one-wrapper">
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <a href="https://forms.gle/5E1RUhBqhcuYQDrs6" target="_blank">
              <div className="service service__style--2">
                <div className="icon">
                  <FaFile />
                </div>
                <div className="content">
                  <h3 className="title">Jr Dev Resume Upload</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <a href="https://forms.gle/T3SvhCUbJkAoXuhR9" target="_blank">
              <div className="service service__style--2">
                <div className="icon">
                  <FaFileContract />
                </div>
                <div className="content">
                  <h3 className="title">Recruiter JD Upload</h3>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
