import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./App.css";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Head from "./components/Head";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import logo from "./images/logo.png";
import Degrees from "./components/Degrees";
import Resume from "./components/Resume";

const App = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-dark sticky-top" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
          <img src={logo} alt="home" />
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#resume">Resume</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div id="home">
        <Head />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="resume">
        <Resume />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="projects">
        <Degrees />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default App;
