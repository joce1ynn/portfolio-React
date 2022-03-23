import React from "react";
import githubIcon from "./../assets/icons/github.png";
import linkedinIcon from "./../assets/icons/linkedin.png";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/joce1ynn">
        <img src={githubIcon} alt="github icon" />
      </a>
      <a href="https://www.linkedin.com/in/wenwentian">
        <img src={linkedinIcon} alt="linkedin icon" />
      </a>
    </div>
  );
}
