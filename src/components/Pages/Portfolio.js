import React from "react";
import Project from "../Project";
// import images
import matrix from "../../assets/images/matrix.jpg";
import chrip from "../../assets/images/chrip.webp";
import weather from "../../assets/images/weather.webp";
import quiz from "../../assets/images/quiz.webp";
import task from "../../assets/images/task.jpeg";
import run from "../../assets/images/run.jpeg";

export default function Portfolio() {
  const projects = [
    {
      title: "The Matrix Experience",
      tech: "Node.js, Javascrpt, Handlebars, sequelize, Express.js, CSS",
      image: matrix,
      github: "https://github.com/AmHum/The-Matrix-Experience",
      deploy: "https://matrix-hovercraft.herokuapp.com/",
    },
    {
      title: "Chirp Travel Planner",
      tech: "Javascrpt, HTML, CSS, jQuery, bootstrap, moment.js, jQueryUI",
      image: chrip,
      github: "https://github.com/dhalladay/travel-app-events",
      deploy: "https://dhalladay.github.io/travel-app-events/",
    },
    {
      title: "Weather Dashboard",
      tech: "Javascrpt, HTML, CSS, jQuery, bootstrap, moment.js",
      image: weather,
      github: "https://github.com/joce1ynn/weather-dashboard-API",
      deploy: "https://joce1ynn.github.io/weather-dashboard-API/",
    },
    {
      title: "Code Quiz",
      tech: "Javascrpt, HTML, CSS",
      image: quiz,
      github: "https://github.com/joce1ynn/code-quiz-API",
      deploy: "https://joce1ynn.github.io/code-quiz-API/",
    },
    {
      title: "Taskmaster Pro",
      tech: "Javascrpt, HTML, CSS, jQuery, Bootstrap, Moment.js",
      image: task,
      github: "https://github.com/joce1ynn/taskmaster-pro-API",
      deploy: "https://joce1ynn.github.io/taskmaster-pro-API/",
    },
    {
      title: "Run Buddy",
      tech: "Javascrpt, HTML, CSS",
      image: run,
      github: "https://github.com/joce1ynn/run-buddy",
      deploy: "https://joce1ynn.github.io/run-buddy/",
    },
  ];

  const projectItem = projects.map((projects) => (
    <Project
      key={projects.title}
      title={projects.title}
      tech={projects.tech}
      image={projects.image}
      github={projects.github}
      deploy={projects.deploy}
    />
  ));

  return (
    <div>
      <h2>Portfolio</h2>
      <div className="project">{projectItem}</div>
    </div>
  );
}
