import React from 'react'
import { Container, Row, Button } from 'reactstrap'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../screens/assets/images/logo.png';
//import "../Header/Header.css";
import "./Header.css";

const nav__link = [
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

const Header = () => {
  return <header className='header'>
    <Container>
      <Row>
        <div className='nav_wrapper d-flex align-items-center justify-content-between'>
          {/* ============ Logo ============ */}
          <div className='logo'>
            <img src={logo} alt='' />
          </div>
          {/* ============ Logo End ============ */}
          {/* ============ Menu ============ */}
          <div className='navigation'>
            <ul className='menu d-flex align-items-center grap-5'>
              {
                nav__link.map((item, index) => (
                  <li className='nav__item' key={index}>
                    <NavLink to={item.path} className={navClass =>
                      navClass.isActive ? 'active__link' : ""
                    }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
            </ul>
          </div>
          {/* ============ Menu End ============ */}

          <div className='nav_right d-flex align-item-center gap-4'>
            <div className='nav_btn d-flex align-item-center gap-4'>
              <Button className='btn secondary_btn'><Link to='/login'>Login</Link></Button>
              <Button className='btn primary_btn'><Link to='/register'>Register</Link></Button>
            </div>
            <span className='mobile__menu'>
              <i class='ri-menu-line'></i>
            </span>
          </div>
        </div>
      </Row>
    </Container>
  </header>
}

export default Header
