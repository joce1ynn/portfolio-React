import React from "react";
import Typed from "react-typed";
import webIcon from "../../assets/icons/web.png";

export default function Home() {
  return (
    <div>
      <h1>Hi, I am Wenwen Tian</h1>
      <div>
        <Typed strings={["Full Stack Developer"]} typeSpeed={60} />
      </div>
      <img src={webIcon} className="icon" alt="web development icon" />
    </div>
  );
}
