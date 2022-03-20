import React from "react";
import Navigation from "./Navigation";
import Navbar from "react-bootstrap/Navbar";

export default function Header(props) {
  return (
    <Navbar>
      <Navbar.Brand className="name"> &lt; WT /&gt;</Navbar.Brand>
      <Navigation setCurrentPage={props.setCurrentPage}></Navigation>
    </Navbar>
  );
}
