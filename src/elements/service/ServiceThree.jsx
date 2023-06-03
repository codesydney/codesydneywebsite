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
                  <h3 className="title">Jr Dev Resume PDF Upload</h3>
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
                  <h3 className="title">Recruiter JD PDF Upload</h3>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-12 col-12">
        <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
          <h4 className="title">Terms of Service | Privacy Policy</h4>
          <p>
            Including personal identification information such as your full
            name, address, date of birth, and other personal information on your
            resume may pose certain risks. These details can be sensitive and
            may potentially lead to identity theft or privacy breaches if your
            resume ends up in the wrong hands. Therefore, it is generally
            recommended to limit the personal information on your resume to what
            is necessary for identification purposes, such as your name and
            contact information (phone number or email address).
          </p>
          <p>
            When using job matching platforms or websites like JrDEV, they may
            require you to provide some basic and minimal personal
            identification information as part of their registration process.
            It's important to review Code.Sydney's{" "}
            <a
              href="public/assets/pdf/Code.Sydney_Website_Privacy_Policy.pdf"
              target="_blank"
            >
              privacy policy
            </a>{" "}
            and{" "}
            <a
              href="public/assets/pdf/Code.Sydney_Client_Terms.pdf"
              target="_blank"
            >
              terms of service
            </a>{" "}
            to understand how they handle and protect your personal data.
          </p>
        </div>
      </div>
    </div>
  )
}
