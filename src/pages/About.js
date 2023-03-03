import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import myImage from "../assets/images/me.JPG";

export default function About() {
  return (
    <Container>
      <h2 className="title">About Me</h2>
      <Row>
        <Col md={5} lg={4} className="profile-div">
          <img src={myImage} alt="profile" className="profile" />
        </Col>
        <Col md={7} lg={8} className="profile-div">
          <div className="description">
            <p>
              My name is Wenwen and I'm originally from China. I dedicated five years to earning my medical degree,
              which included clinical rotations in hospitals both in China and Singapore during my final year of medical school.
            </p>
            <p>
              After moving to the United States in 2018, I pursued a Master's degree in Public Health at the University of Utah and graduated in 2020.
              I then joined the Utah Department of Health as a data quality specialist, where I honed my analytical skills and gained expertise in SAS and R programming.
            </p>
            <p>
              In 2022, I completed a certificate in full-stack web development from the University of Utah.
              I have extensive knowledge of HTML, CSS, JavaScript, and Node.js. I am passionate about web development,
              and will continue to explore new technologies in the industry.
            </p>
            <p>
              Aside from work, I enjoy a range of activities including traveling, camping, playing video games, and spending time with my dogs.
              I am always seeking new challenges and opportunities to learn and grow both personally and professionally.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
