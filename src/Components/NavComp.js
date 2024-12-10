import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; // Use NavLink for navigation
import logo from '../Assets/logo.png'; // Import the logo image (ensure the path is correct)

const NavComp = () => {
  return (
    <Navbar expand="lg" fixed="top" bg="light" variant="light" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>

      <Container>
        {/* Add the logo and brand name */}
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Logo"
            style={{
              width: '90px', // Adjust size as needed
              height: '90px',
              marginRight: '10px',
            }}
          />
          Sanjay Jewelry
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className="nav-link" exact activeClassName="active">Home</NavLink>
            <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
            <NavLink to="/products" className="nav-link" activeClassName="active">Products</NavLink>
            <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavComp;
