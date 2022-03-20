import React from "react";
import CV from "../../assets/resume/CV_wwt.docx";

export default function Resume() {
  return (
    <div>
      <a href={CV} download>
        Download CV
      </a>
      <div>
        <h2>Frontend Skills</h2>
      </div>
      <div>
        <h2>Backtend Skills</h2>
      </div>
    </div>
  );
}
