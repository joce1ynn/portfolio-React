import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import myImage from "../../assets/images/me.JPG";

export default function About() {
  return (
    <Container>
      <h2>About Me</h2>
      <Row>
        <Col sm={4}>
          <img src={myImage} alt="profile" className="profile" />
        </Col>
        <Col sm={8}>
          <p>
            I am Wenwen, a full stack developer. <br />I am currently based in
            Salt Lake City, Utah.
          </p>
          <p>
            I have extensive knowledge of JavaScript, React.js, Node.js, and
            MongoDB.
            <br />I am passionate about web development, and will continue to
            explore new technologies in the industry.
          </p>
          <p>I enjoy both outdoor and indoor activities:</p>
          <ul>
            <li>Travelling</li>
            <li>Camping</li>
            <li>Playing Games</li>
            <li>Playing with My Dog</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
