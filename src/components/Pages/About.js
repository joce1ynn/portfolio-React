import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import myImage from "../../assets/images/me.JPG";

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
              My name is Wenwen and I was born in China. I lived in China
              for 24 years and spent five years on my medical education. During
              my last year of medical school, I did my clinical rotations in
              hospitals both in China and Singapore.
            </p>
            <p>
              In 2018, I moved to the United States and attended the University
              of Utah. I graduated with a master’s degree of Public Health in
              2020. After that, I worked as a data quality specialist at the
              Utah Department of Health for one year.
            </p>
            <p>
              I recently earned a certificate in full-stack web development from
              the University of Utah. I have extensive knowledge of HTML, CSS,
              JavaScript, and Node.js. I am passionate about web development,
              and will continue to explore new technologies in the industry.
            </p>
            <p>
              I enjoy both outdoor and indoor activities, including traveling,
              camping, playing video games, playing with my dogs, etc.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
