import React from "react";
import twitterIcon from "../images/Twitter-Icon.png";
import githubIcon from "../images/GitHub-Icon.png";
import facebookIcon from "../images/Facebook-Icon.png";
import instagramIcon from "../images/Instagram-Icon.png";

function Footer() {
  return (
    <div className="footer">
      <img src={twitterIcon} alt="twitter" />
      <img src={facebookIcon} alt="facebook" />
      <img src={instagramIcon} alt="instagram" />
      <img src={githubIcon} alt="github" />
    </div>
  );
}

export default Footer;
