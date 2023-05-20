import React from 'react'
import './footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
// import logo from '../../assets/images/logo.png'
import logo from '../../screens/assets/images/logo.png';

const quick__link = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/events',
    display: 'Events'
  },
]
const quick__link2 = [
  {
    path: '/gallery',
    display: 'Gallery'
  },
  {
    path: '/login',
    display: 'Login'
  },
  {
    path: '/register',
    display: 'Register'
  },
]

const Footer = () => {
  return <footer className='footer'>
    <Container>
      <Row>
        <Col lg="3">
          <div className='logo'>
            <img src={logo} alt="" />
            <p>afbadkjfbksadfnsdjfnkfg fosihdflksj sjkfbsf kjfs.
              kjfhjsf, dhfs.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer
