import React, { Component } from 'react';
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <div id="itemsnav">
            <Navbar bg="dark" expand="lg">
                 <Navbar.Brand className="logo" href="#home"><span id="dp1">Tiffany Armour Tejeda |</span> <span id="dp2">Director of Photography</span></Navbar.Brand>
    

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    
                    <NavDropdown title="Work" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Beauty And The Beast</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Bay Park</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Marble Eye Tanner</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Coney Lost Love</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Weight</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Mj Love</NavDropdown.Item>
                    </NavDropdown>
      <Nav.Link href="#home">About</Nav.Link>
      <Nav.Link href="#link">Contact</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
   
  </div> 
        )
}
}
export default Header;