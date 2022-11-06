import React from "react";

import profilePicture from "../images/profile-picture.png";
import emailIcon from "../images/Mail.png";
import linkdinIcon from "../images/linkedin.png";

function Info() {
  return (
    <div>
      <img src={profilePicture} alt="beautiful-girl" />
      <div className="info">
        <h2 className="full-name">Laura Smith</h2>
        <p className="job">Frontend Developer</p>
        <p className="website">laurasmith.website</p>
      </div>
      <div className="buttons">
        <button>
          <span className="icons">
            <img src={emailIcon} alt="email-icon" />
          </span>
          <span>Email</span>
        </button>
        <button>
          <span className="icons">
            <img src={linkdinIcon} alt="linkedin-icon" />
          </span>
          <span>Linkedin</span>
        </button>
      </div>
    </div>
  );
}

export default Info;
