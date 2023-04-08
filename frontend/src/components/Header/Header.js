import React from 'react'
//import  'scss'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

const Header = () => {
  return (

    <body>
      {/* <Navbar bg="success" variant="dark">
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
    </Navbar> */}

      {/*<h1>Life Below water.</h1>*/}
      <input type="checkbox" id="burger-toggle" />
      <label for="burger-toggle" class="burger-menu">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </label>
      <div class="menu">
        <div class="menu-inner">
          <ul class="menu-nav">
            <li class="menu-nav-item"><a class="menu-nav-link" href="#"><span>
              <div>Home</div>
            </span></a></li>
            <li class="menu-nav-item"><a class="menu-nav-link" href="#"><span>
              <div>About</div>
            </span></a></li>
            <li class="menu-nav-item"><a class="menu-nav-link" href="#"><span>
              <div>Lives</div>
            </span></a></li>
            <li class="menu-nav-item"><a class="menu-nav-link" href="#"><span>
              <div>Research</div>
            </span></a></li>
          </ul>
          <div class="gallery">
            <div class="title">
              <p>SLIIT ITPM</p>
            </div>
            <div class="images">
              <a class="image-link" href="#">
                <div class="image" data-label="Corals"><img src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-05/220509-coral-miami-se-1055a-19af74.jpg" alt="" /></div>
              </a>
              <a class="image-link" href="#">
                <div class="image" data-label="Water polution"><img src="https://blog.b1g1.com/content/images/2020/05/life-below-water-006.jpg" alt="" /></div>
              </a>
              <a class="image-link" href="#">
                <div class="image" data-label="Research"><img src="https://inweh.unu.edu/wp-content/uploads/2019/05/waterandeducation_header.png" alt="" /></div>
              </a>
              <a class="image-link" href="#">
                <div class="image" data-label="Events"><img src="https://tourscanner.com/blog/wp-content/uploads/2017/10/Featured-image.jpg" alt="" /></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </body>

  )
}

export default Header