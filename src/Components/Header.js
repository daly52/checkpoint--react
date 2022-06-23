import React from 'react'
import logo from '../logo192.png';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (

 
<Navbar bg="dark" expand="lg" variant='dark'>
  <Container>
    <Navbar.Brand className="home"  href="#home"> <img src={logo} width="30px" alt='aaaa'/> React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="m-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

 

 )
}

export default Header
