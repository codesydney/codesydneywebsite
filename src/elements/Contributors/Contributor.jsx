import React from "react";
import { FaLinkedin } from "react-icons/fa";
const Contributor = ({ name, nickname, quote, image, role, linkedIn }) => {
  return (
    <>
      <div className="carousel">
        <div>
          <img src={image} alt={`${name} ${role}`} />
        </div>
        <div className="details">
          {quote ? <div className="quotes">"{quote}"</div> : null}
          <div className="author">
            <span></span>
            <div>
              <div className="author-wrapper">
                <div className="social">
                  <p className="nickname">{nickname}</p>
                  <a
                    href={linkedIn}
                    className="social"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </div>
                <p className="role">{role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contributor;
