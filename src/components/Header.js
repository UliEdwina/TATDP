import React, { Component } from 'react';
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <div id="itemsnav">
            <Navbar bg="dark" expand="lg">
                 <Navbar.Brand className="logo" href="https://taatdp.com/"><span id="dp1">Tiffany Armour Tejeda |</span> <span id="dp2">Director of Photography</span></Navbar.Brand>
    

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    
                    <NavDropdown title="Work" id="basic-nav-dropdown">
                                <NavDropdown.Item href="https://taatdp.com/sleepingbeauty">Beauty And The Beast</NavDropdown.Item>
                                <NavDropdown.Item href="https://taatdp.com/baypark">Bay Park</NavDropdown.Item>
                                <NavDropdown.Item href="https://taatdp.com/marbleeyetanner">Marble Eye Tanner</NavDropdown.Item>
                                <NavDropdown.Item href="https://taatdp.com/coneylostlove">Coney Lost Love</NavDropdown.Item>
                                <NavDropdown.Item href="https://taatdp.com/weight">Weight</NavDropdown.Item>
                                <NavDropdown.Item href="htts://taatdp.com/mjlove">Mj Love</NavDropdown.Item>
                    </NavDropdown>
      <Nav.Link href="https://taatdp.com/about">About</Nav.Link>
      <Nav.Link href="https://taatdp.com/contact">Contact</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
   
  </div> 
        )
}
}
export default Header;