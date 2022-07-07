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
      title: "Book Search Engine 🔗",
      descriiption:
        "A MERN-stack app that allows users to search and save books.",
      image: book,
      github: "https://github.com/joce1ynn/book-search-engine-MERN",
      deploy: "https://book-search-engine-2022.herokuapp.com/",
    },
    {
      title: "The Matrix Experience 🔗",
      descriiption:
        "A Matrix fan page that lets users save or delete their favorite hovercrafts.",
      image: matrix,
      github: "https://github.com/AmHum/The-Matrix-Experience",
      deploy: "https://matrix-hovercraft.herokuapp.com/",
    },
    {
      title: "Chirp Travel Planner 🔗",
      descriiption:
        "A travel app that provides users with events and tourist attractions nearby.",
      image: chrip,
      github: "https://github.com/dhalladay/travel-app-events",
      deploy: "https://dhalladay.github.io/travel-app-events/",
    },

    {
      title: "Weather Dashboard 🔗",
      descriiption: "A weather app that provides weather outlook for multiple cities.",
      image: weather,
      github: "https://github.com/joce1ynn/weather-dashboard-API",
      deploy: "https://joce1ynn.github.io/weather-dashboard-API/",
    },
    {
      title: "Code Quiz 🔗",
      descriiption: "A simple coding quiz app.",
      image: quiz,
      github: "https://github.com/joce1ynn/code-quiz-API",
      deploy: "https://joce1ynn.github.io/code-quiz-API/",
    },
    {
      title: "Run Buddy 🔗",
      descriiption: "A front end web page that offers fitness training services.",
      image: run,
      github: "https://github.com/joce1ynn/run-buddy",
      deploy: "https://joce1ynn.github.io/run-buddy/",
    },
  ];

  const projectItem = projects.map((projects) => (
    <Project
      key={projects.title}
      title={projects.title}
      descriiption={projects.descriiption}
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
