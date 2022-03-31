import React from "react";
import CV from "../../assets/resume/CV_wwt.pdf";

export default function Resume() {
  return (
    <div>
      <h2 className="title">Resume</h2>
      <a href={CV} download>
        Download CV
        {/* --------Frontend Skills------------ */}
      </a>
      <div>
        <h2>Frontend Skills</h2>
        <div>
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
      <div>
        <h2>Backtend Skills</h2>
        <div>
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
  );
}
