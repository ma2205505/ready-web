import '../App.css';
import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Services from './Services';

export default class Navbarcomp extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar expand="lg">
                        <Container>
                            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto mx-auto">
                                    <Nav.Link className='text-dark set1' as={Link} to={"/home"}>Home</Nav.Link>
                                    <Nav.Link className='text-dark set1' as={Link} to={"about"}>about</Nav.Link>
                                    <Nav.Link className='text-dark set1' as={Link} to={"contact"}>Contact</Nav.Link>
                                    <Nav.Link className='text-dark set1' as={Link} to={"services"}>Services</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="services" element={<Services />} />
                    </Routes>

                </div>
            </Router>
        )
    }
}
