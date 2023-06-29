import React, { useState, useEffect } from 'react';
import {Navbar, Container, Nav } from 'react-bootstrap';
import { logo } from "../../assets";
import githubIcon from '../../assets/github-icon.svg'
import { HashLink } from 'react-router-hash-link';
import {BrowserRouter as Router } from "react-router-dom";
import './navbar.css';

  const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, seScrolled ] =useState(false);

  // スクロールで背景色を表示
  useEffect(() => {
    const onScroll = () =>{
      if (window.scrollY > 50){
        seScrolled(true);
      } else{
        seScrolled(false);
      }
    }
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  // アクティブリンクの色変更
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="lg" className={scrolled ? 'scrolled' : ''} >
        <Container className='navbar__container'>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onclick={() => onUpdateActiveLink('skills')}>
                Skills
              </Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onclick={() => onUpdateActiveLink('projects')} >
                Projects
              </Nav.Link>
            </Nav> 
            <span className='navbar-text'>
              <div className='social-icon'>
                <a href='https://github.com/marinayam?tab=repositories'  target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt='' /></a>
              </div>
              <HashLink to='#contact'>
                <button><span>contact</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};

export default NavBar;