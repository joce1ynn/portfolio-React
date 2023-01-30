import React from "react";
import CV from "../assets/resume/Resume_wwt.pdf";
import download from "../assets/icons/download.png";

export default function Resume() {
  return (
    <div>
      <h2 className="title">Resume</h2>
      <div className="resume-div">
        <div className="skill-div">
          {/* --------Frontend Skills------------ */}
          <div className="skill">
            <h2>Frontend Skills</h2>
            <div className="tag">
              <span>JavaScript</span>
              <span>React</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Bootstrap</span>
              <span>JQuery</span>
              <span>Handlebars.js</span>
              <span>JSON</span>
              <span>AJAX</span>
              <span>APIs</span>
              <span>The DOM</span>
            </div>
          </div>

          {/* --------Backtend Skills------------ */}
          <div className="skill">
            <h2>Backtend Skills</h2>
            <div className="tag">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>GraphQL</span>
              <span>MySQL</span>
              <span>Sequelize</span>
              <span>NoSQL</span>
              <span>MongoDB</span>
              <span>Mongoose</span>
              <span>Testing</span>
              <span>Heroku</span>
            </div>
          </div>
        </div>
        {/* download CV */}
        <a href={CV} download className="download">
          Download Resume
          <img
            alt="download"
            style={{ display: "inline" }}
            src={download}
            className="download-icon"
          />
        </a>
      </div>
    </div>
  );
}
