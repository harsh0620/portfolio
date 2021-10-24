import React from "react";
import Hero from "./components/Hero/Hero";
import "./App.css";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import BackToTop from "./components/BackToTop/BackToTop";
import ScrollToTop from "./utils/ScrollToTop";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Contacts />
        <Footer />
        <BackToTop />
      </Router>
    </div>
  );
}

export default App;
