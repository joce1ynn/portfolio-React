import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/Pages/About";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "About":
      default:
        return <About />;
    }
  };

  return (
    <div>
      <Header setCurrentPage={setCurrentPage}></Header>
      {renderPage()}
    </div>
  );
}

export default App;
