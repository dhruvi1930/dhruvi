import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Education from "./pages/education/Education";
import Skill from "./pages/skill/Skill";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skill />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
