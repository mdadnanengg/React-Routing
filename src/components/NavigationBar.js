import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from 'react-router-dom'

function NavigationBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" style={{ textDecoration: "none", color:"black" }}>Home</NavLink>
                        <NavLink to="about" style={{ marginLeft: "10px", textDecoration: "none", color:"black" }}>About</NavLink>
                        <NavLink to="contact" style={{ marginLeft: "10px", textDecoration: "none", color:"black" }}>Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar