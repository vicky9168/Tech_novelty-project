import React from 'react'
import "./NavbarN.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../assets/logo.png"

const NavbarN = () => {
  return (
       <div className='i1'>
      <Navbar bg="dark" expand="lg" variant='dark'>
      <Container >
        <Navbar.Brand href=""><img src={logo} alt='logo' width='100px'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className=" N">
            <Nav.Link href="#" className='n-li'><strong >What we do</strong></Nav.Link>
            <Nav.Link href="#" className='n-li'><strong>Who are you</strong></Nav.Link>
            <Nav.Link href="#" className='n-li'><strong>career</strong></Nav.Link>
            <Nav.Link href="#" className='n-li'><strong>Contact</strong></Nav.Link>
          </Nav>
          {/* <img src={images} alt="search" width="25" className='search-icon' style={{color:"white",backgroundColor: "#343a40"}}/> */}
              <i class="far fa-search" style={{color:"white"}}></i>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarN
