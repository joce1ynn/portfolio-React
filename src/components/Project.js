import React from "react";
import githubIcon from "../assets/icons/gh-black.png";

export default function Project(props) {
  return (
    <div className="card px-0 project-card col-xl-3 col-lg-4 col-md-4 col-sm-6 col-8">
      <div className="project-img ">
        <img alt="project" className="card-img-top" src={props.image} />
      </div>
      <div className="card-body row">
        <div className="col-sm-9 col-9">
          <a
            className="project-title"
            href={props.deploy}
            target="_blank"
            rel="noreferrer noopener"
          >
            {props.title}
          </a>
          <p className="project-descriiption">{props.descriiption}</p>
        </div>
        <div className="col-sm-3 col-3 github-div">
          <a href={props.github} target="_blank" rel="noreferrer noopener">
            <img className="github" src={githubIcon} alt="github icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
