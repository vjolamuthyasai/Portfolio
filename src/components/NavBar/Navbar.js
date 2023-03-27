import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {
  AiFillStar,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser,
} from 'react-icons/ai';
import { CgFileDocument, CgGitFork } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './Navbar.css';

const NavBar = () => {
  const [expand, updateExpander] = useState(false);
  const [navColor, updateNavbar] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  };

  window.addEventListener('scroll', scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColor ? 'sticky' : 'navbar'}
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpander(expand ? false : 'expanded');
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpander(false)}>
                <AiOutlineHome style={{ marginBottom: '2px' }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpander(false)}
              >
                <AiOutlineUser style={{ marginBottom: '2px' }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpander(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: '2px' }}
                />{' '}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpander(false)}
              >
                <CgFileDocument style={{ marginBottom: '2px' }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/vjolamuthyasai/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: '1.2em' }} />{' '}
                <AiFillStar style={{ fontSize: '1.1em' }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
