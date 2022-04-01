import React from "react";
import Typed from "react-typed";
import webIcon from "../../assets/icons/web.png";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";
import Footer from "../Footer";

function particlesInit(tsParticles) {
  console.log("init", tsParticles);

  loadLinksPreset(tsParticles);
}

export default function Home() {
  return (
    <div>
      <div className="container">
        <div className="intro">
          <h1 className="hi">Hi, I am Wenwen Tian</h1>
          <Typed
            className="typing"
            strings={["Full Stack Developer"]}
            typeSpeed={100}
          />
          <div>
            <img src={webIcon} className="webicon" alt="web development icon" />{" "}
          </div>
        </div>

        <Particles
          options={{
            preset: "links",
          }}
          init={particlesInit}
        />
      </div>
      <Footer />
    </div>
  );
}
