import React from "react";
import Navigation from "./Navigation";
import Navbar from "react-bootstrap/Navbar";

export default function Header(props) {
  return (
    <Navbar  className="navbar" variant="dark" expand="sm" aria-current="true">
      <Navbar.Brand href="/" className="name">
        {" "}
        &lt; WT /&gt;
      </Navbar.Brand>
      {/* Responsive Navbars */}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      {/* wrap your Navs in a Navbar.Collapse component.  */}
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className=" justify-content-end"
      >
        <Navigation setCurrentPage={props.setCurrentPage}></Navigation>
      </Navbar.Collapse>
    </Navbar>
  );
}
