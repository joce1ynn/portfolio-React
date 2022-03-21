import React from "react";
import Card from "react-bootstrap/Card";
import githubIcon from "./../assets/icons/github.png";

export default function Project(props) {
  return (
    <div className="project">
      <Card className="project-card">
        <Card.Img></Card.Img>
        <Card.Body>
          <div>
            <Card.Link href="#">{props.title}</Card.Link>
            <Card.Text>{props.tech}</Card.Text>
          </div>
          <div>
            <Card.Link href="#">
              <img src={githubIcon} alt="github icon" />
            </Card.Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
