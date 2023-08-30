// import { useState, useEffect } from 'react'

//Bootstrap Components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { LinkContainer } from 'react-router-bootstrap';

export default function Header() {
    return (
        <Navbar expand='lg' className="bg-body-tertiary">
            <Container>
            <Navbar.Brand href="/">Georgi Maslyankov</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse aria-controls="responsive-navbar-nav" id="basic-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/projects">
                        <Nav.Link>Projects</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/bjj">
                        <Nav.Link>BJJ</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/music">
                        <Nav.Link>Music</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contact">
                        <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}