import React, { useState } from "react";
// import react bootstrap and css
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
// import components
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const RenderPage = () => {
    switch (currentPage) {
      case "Home":
      default:
        return <Home />;
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
    }
  };

  return (
    <div>
      <Header setCurrentPage={setCurrentPage}></Header>
      <RenderPage />
    </div>
  );
}

export default App;
