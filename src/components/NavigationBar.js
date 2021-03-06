import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Styles = styled.div`

    .navbar {
        background-color: lightblue;
    }
    .navbar-brand, .navbar-nav-down, .nav-link {
        color: white;

    }
   &:hover {
       color: white;
   }
`;


export const NavigationBar = () => {
   return (
    <Styles>
    <Navbar expand="lg">
      <Navbar.Brand data-testid="logo" href="/">Dental clinic - DENTIX</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/" data-testid="home">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/about" data-testid="about">About</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/contact">Contact</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
   )
}
