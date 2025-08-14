import React from 'react'
import { Button, Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { FaUserCircle } from 'react-icons/fa'
import imglogo from '../assets/companylogo.png'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

function NavBar() {
    return (

        <div className=''>
            <Navbar className='navbar fixed-top shadow bg-light ' variant="dark" expand="lg" >
                <Container>
                    {/* Left side: Logo and Company Name */}
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src={imglogo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top me-5"
                            alt="Company Logo"
                        />
                        <span className='nav_font ms-3'>𝚂𝙼 𝚃𝚎𝚌𝚑𝚗𝚘𝚕𝚘𝚐𝚒𝚎𝚜</span>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                        {/* Center Nav Links */}
                        <Nav className="mx-auto ">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            {/* <Nav.Link as={Link} to="/description">Our Services</Nav.Link> */}
                            <Nav.Link as={HashLink} smooth to="/#hero-section">Services</Nav.Link>

                            <Nav.Link as={Link} to="/aboutus">AboutUs</Nav.Link>

                        </Nav>

                        {/* Right side: Profile Dropdown and Contact */}
                        <Nav className="ms-auto">
                            <Nav.Link as="a" href="https://docs.google.com/forms/d/e/1FAIpQLSeiAejWb32vx2XL3bu65yoSToiarwsqaaMBJKgWoO7ARfpe6Q/viewform" target="_blank" rel="noopener noreferrer"

                            >Contact Us</Nav.Link>
                            {/* <a
                                className="nav-link"
                                href="https://forms.gle/YOUR_GOOGLE_FORM_LINK"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Contact Us
                            </a>

                            <NavDropdown
                                title={<FaUserCircle size={24} />}
                                id="basic-nav-dropdown"
                                align="end"
                            >
                                <NavDropdown.Item href="#profile">LOGIN</NavDropdown.Item>
                                <NavDropdown.Item href="#settings">Register</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default NavBar