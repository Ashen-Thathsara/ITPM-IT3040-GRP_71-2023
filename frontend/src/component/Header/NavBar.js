// import React, { Component } from "react";
// import Button from 'react-bootstrap/esm/Button';
// import { logout } from '../../actions/userActions'

// import NavDropdown from 'react-bootstrap/NavDropdown';
// import './navbar.css';

// export default class NavBar extends Component {
//     render() {
//         return (
//             <div>
//                 <nav
//                     className="navbar navbar-expand-lg navbar-light bg-light"
//                     style={{ padding: "30px 30px 10px 20px" }}
//                 >
//                     <div className="container-fluid">
//                         <a
//                             className="navbar-brand"
//                             style={{ fontSize: "30px", fontWeight: "bold", color: "#0476D0" }}
//                             href="#"
//                         >
//                             Under Water
//                         </a>
//                         <button
//                             className="navbar-toggler"
//                             type="button"
//                             data-bs-toggle="collapse"
//                             data-bs-target="#navbarSupportedContent"
//                             aria-controls="navbarSupportedContent"
//                             aria-expanded="false"
//                             aria-label="Toggle navigation"
//                         >
//                             <span className="navbar-toggler-icon"></span>
//                         </button>
//                         <div
//                             className="collapse navbar-collapse"
//                             id="navbarSupportedContent"
//                         >
//                             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                                 <li className="nav-item">
//                                     <a
//                                         className="nav-link active"
//                                         aria-current="page"
//                                         href="/AdminHome"
//                                     >
//                                         Management Home
//                                     </a>
//                                 </li>
//                                 &nbsp;
//                                 <li className="nav-item">
//                                     <a
//                                         className="nav-link"
//                                         aria-current="page"
//                                         href="/"
//                                     >
//                                         Home
//                                     </a>
//                                 </li>
//                                 &nbsp;
//                                 <li className="nav-item">
//                                     <a
//                                         className="nav-link"
//                                         aria-current="page"
//                                         href="/hres"
//                                     >
//                                         Requisitions{" "}
//                                     </a>
//                                 </li>
//                                 &nbsp;
//                                 <li className="nav-item">
//                                     <a
//                                         className="nav-link"
//                                         aria-current="page"
//                                         href="/allCustomer"
//                                     >
//                                         Employees
//                                     </a>
//                                 </li>
//                                 &nbsp; &nbsp;
//                                 <li className="nav-item">
//                                     <a
//                                         className="nav-link"
//                                         aria-current="page"
//                                         href="/supplierH"
//                                     >
//                                         Suppliers
//                                     </a>
//                                 </li>
//                                 &nbsp;
//                                 <li className="nav-item">
//                                     <a
//                                         className="nav-link"
//                                         aria-current="page"
//                                         href="/AllServices"
//                                     >
//                                         Procurement
//                                     </a>
//                                 </li>
//                                 &nbsp; &nbsp;

//                                 <a href='/login'>
//                                     <Button className='landingButton'>Login</Button>
//                                 </a>
//                                 <a href='/register'>
//                                     <Button className='landingButton' variant='outline-primary'>
//                                         SignUp
//                                     </Button>
//                                 </a>

//                             </ul>
//                         </div>
//                     </div>
//                     <NavDropdown title="Features" id="navbarScrollingDropdown">
//                         {/* <NavDropdown.Item ><Link to='/category'>Product</Link></NavDropdown.Item> */}
//                         <NavDropdown.Divider />
//                         <NavDropdown.Item   onClick={logoutHandler}>
//                         Logout
//                         </NavDropdown.Item>
//                     </NavDropdown>
//                 </nav>
//             </div>
//         );
//     }
// }


import React from 'react'
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/userActions'



const Header = ({ history, setSearch }) => {

    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const logoutHandler = () => {
        dispatch(logout());
    }

    return (
        <div>
            <Navbar bg="success" expand="lg" variant='dark'>
                <Container>
                    <Navbar.Brand href="/">Under Water</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className='m-auto'>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                {/* <Button variant="outline-success">Search</Button> */}
                            </Form>
                        </Nav>
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1"><Link to='/home'>Home</Link></Nav.Link>
                            <Nav.Link href="#action2">Courses</Nav.Link>
                            <Nav.Link href="#action2">Events</Nav.Link>
                            <Nav.Link href="#action2"><Link to='/category'>Counceling</Link></Nav.Link>
                            <Nav.Link href="#action2">Donation</Nav.Link>
                            <NavDropdown title="Features" id="navbarScrollingDropdown">
                                {/* <NavDropdown.Item ><Link to='/category'>Product</Link></NavDropdown.Item> */}
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={logoutHandler}>
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header