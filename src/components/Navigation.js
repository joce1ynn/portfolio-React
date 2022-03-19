import React from "react";

export default function Nav(props) {
  return (
    <div>
      <a href="#about" onClick={props.setCurrentPage("About")}>
        About
      </a>

      {/* {props.pages.map((page, id) => (
        <a key={id} onClick={() => props.setCurrentPage(page)}>
          {page.name}
        </a>
      ))} */}
    </div>
  );
}
