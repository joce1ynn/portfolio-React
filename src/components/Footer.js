import React from "react";
import githubIcon from "./../assets/icons/github.png";
import linkedinIcon from "./../assets/icons/linkedin.png";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <a href="https://github.com/joce1ynn">
          <img className="icon" src={githubIcon} alt="github icon" />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/wenwentian">
          <img className="icon" src={linkedinIcon} alt="linkedin icon" />
        </a>
      </div>
      <p className="copyright">©Made by Wenwen Tian</p>
    </div>
  );
}
