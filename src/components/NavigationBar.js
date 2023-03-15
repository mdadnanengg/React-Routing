import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from 'react-router-dom'

function NavigationBar({ isLogin, handleLogout }) {

    console.log(isLogin)

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>Home</NavLink>
                        <NavLink to="about" style={{ marginLeft: "15px", textDecoration: "none", color: "black" }}>About</NavLink>
                        <NavLink to="contact" style={{ marginLeft: "15px", textDecoration: "none", color: "black" }}>Contact</NavLink>
                        <NavLink to="profile" style={{ marginLeft: "15px", textDecoration: "none", color: "black" }}>Profile</NavLink>
                        <NavLink to="users" style={{ marginLeft: "15px", textDecoration: "none", color: "black" }}>Users</NavLink>
                        {!isLogin ? <NavLink to="login" style={{ marginLeft: "15px", textDecoration: "none", color: "black" }}>Login</NavLink> :
                            <NavLink to="login" style={{ marginLeft: "15px", textDecoration: "none", color: "black" }} onClick={handleLogout}>LogOut</NavLink>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar