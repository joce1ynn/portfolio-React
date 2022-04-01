import React from "react";
import githubIcon from "./../assets/icons/gh-black.png";

export default function Project(props) {
  return (
    <div className="card px-0 project-card col-xl-3 col-lg-4 col-md-5 col-sm-7 col-8">
      <img
        alt="project"
        className="project-img card-img-top"
        src={props.image}
      />
      <div className="card-body row">
        <div className="col-sm-9">
          <a className="project-title" href={props.deploy}>{props.title}</a>
          <p className="project-tech">{props.tech}</p>
        </div>
        <div className="col-sm-3 github-div">
          <a href={props.github}>
            <img className="github" src={githubIcon} alt="github icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
