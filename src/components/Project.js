import React from "react";
import Card from "react-bootstrap/Card";
import githubIcon from "./../assets/icons/github.png";

export default function Project(props) {
  return (
    <Card className="project-card">
      <Card.Img src={props.image}></Card.Img>
      <Card.Body>
        <div>
          <Card.Link href={props.deploy}>{props.title}</Card.Link>
          <Card.Text>{props.tech}</Card.Text>
        </div>
        <div>
          <Card.Link href={props.github}>
            <img src={githubIcon} alt="github icon" />
          </Card.Link>
        </div>
      </Card.Body>
    </Card>
  );
}
