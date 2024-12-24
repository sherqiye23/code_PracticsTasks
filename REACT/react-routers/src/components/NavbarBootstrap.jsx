import React from 'react'
import { NavLink } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarBootstrap() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink
                            className="mx-3"
                            style={({ isActive }) => ({ color: isActive ? "red" : "#fff" })}
                            to="/">
                            Home
                        </NavLink>
                        <NavLink
                            style={({ isActive }) => ({ color: isActive ? "red" : "#fff" })}
                            to="/products">
                            Products
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarBootstrap
