import React from "react";
import Nav from "../Nav";
import "../../assets/css/styles.css"

export default function Header(props) {
  return (
    <div>
      <h1 className="Title">Wenwen Tian</h1>
      <Nav 
      setCurrentPage = {props.setCurrentPage}
      pages={props.pages}></Nav>
    </div>
  );
}
