import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const RenderPage = () => {
    switch (currentPage) {
      case "Home":
      default:
        return <Home />;
      case "About":
        return <About />;
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
