import React from "react";
import Project from "../Project";
// import images
import matrix from "../../assets/images/matrix.png";
import chrip from "../../assets/images/chrip.png";
import weather from "../../assets/images/weather.png";
import quiz from "../../assets/images/quiz.png";
import book from "../../assets/images/book.png";
import run from "../../assets/images/run.png";

export default function Portfolio() {
  const projects = [
    {
      title: "Book Search Engine",
      tech: "MERN-stack",
      image: book,
      github: "https://github.com/joce1ynn/book-search-engine-MERN",
      deploy: "https://book-search-engine-2022.herokuapp.com/",
    },
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
      <h2 className="title">Projects</h2>
      <div className="row project">{projectItem}</div>
    </div>
  );
}
