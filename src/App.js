import React, { useState } from "react";
// import Nav from './components/Nav';
import Header from "./components/Header";
// import Footer from './components/Footer';
// import Projects from './components/Projects';

function App() {
  const [pages, setPages] = useState([
    { name: "About Me" },
    { name: "Contact Me" },
    { name: "Projects" },
    { name: "Resume" },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className="App">
      <Header 
      pages={pages}
      setCurrentPage = {setCurrentPage}
      
      ></Header>
      <div>{currentPage.name}</div>
    </div>
  );
}

export default App;
