import React from "react";
import Nav from "react-bootstrap/Nav";

export default function Navigation(props) {
  const { setCurrentPage } = props;

  return (
    <Nav className="pages">
      {/* -------------------About page------------------- */}
      <Nav.Link
        className="page"
        href="#about"
        onClick={() => {
          setCurrentPage("About");
        }}
      >
        About
      </Nav.Link>

      {/* -------------------Portfolio page------------------- */}
      <Nav.Link
        className="page"
        href="#portfolio"
        onClick={() => {
          setCurrentPage("Portfolio");
        }}
      >
        Portfolio
      </Nav.Link>

      {/* -------------------Contact page------------------- */}
      <Nav.Link
        className="page"
        href="#contact"
        onClick={() => {
          setCurrentPage("Contact");
        }}
      >
        Contact
      </Nav.Link>

      {/* -------------------Resume page------------------- */}
      <Nav.Link
        className="page"
        href="#resume"
        onClick={() => {
          setCurrentPage("Resume");
        }}
      >
        Resume
      </Nav.Link>
    </Nav>
  );
}

// it needs to be an arrow function inside the onClick()
// the title corresponding to the current section is highlighted
