import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <div className="hamburgur">
            <i className="fa fa-bars inner" onClick={handleShow} aria-hidden="true" style={{ cursor: "pointer" }}></i>
            <h2 className='mt-2 h2_right' style={{ color: "#6C63FF" }}>
              <NavLink to="/" style={{ textDecoration: "none" }}>Ashish Nagal</NavLink>
            </h2>
          </div>

          <Nav className="nav">
            <div className="nav-links mt-2">
              <NavLink to="/" className="text-decoration-none">Home</NavLink>
              <NavLink to="/about" className="text-decoration-none">About</NavLink>
              <NavLink to="/playlist" className="text-decoration-none">Projects</NavLink>
              <NavLink to="/contact" className="text-decoration-none">Contact</NavLink>
              <Button variant="danger" className="youtube-btn">
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-light">YouTube</a>
              </Button>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
