import React from "react";
import Nav from "react-bootstrap/Nav";

export default function Navigation(props) {
  const { setCurrentPage } = props;

  return (
    <Nav className="pages">
      {/* -------------------Home page------------------- */}
      <Nav.Link
        className="page"
        onClick={() => {
          setCurrentPage("Home");
        }}
      >
        Home
      </Nav.Link>

      {/* -------------------About page------------------- */}
      <Nav.Link
        className="page"
        onClick={() => {
          setCurrentPage("About");
        }}
      >
        About Me
      </Nav.Link>

      {/* -------------------Portfolio page------------------- */}
      <Nav.Link
        className="page"
        onClick={() => {
          setCurrentPage("Portfolio");
        }}
      >
        Portfolio
      </Nav.Link>

      {/* -------------------Contact page------------------- */}
      <Nav.Link
        className="page"
        onClick={() => {
          setCurrentPage("Contact");
        }}
      >
        Contact
      </Nav.Link>

      {/* -------------------Resume page------------------- */}
      <Nav.Link
        className="page"
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
