import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <>
    <Navbar bg="success" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Life Below Water</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#courses">Courses</Nav.Link>
          <Nav.Link href="#event">Events</Nav.Link>
          <Nav.Link href="#counseling">Counseling</Nav.Link>
          <Nav.Link href="#donation">Donation</Nav.Link>
          <Nav.Link href="#Sign Up">Sign Up</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </>
  )
}

export default Header