import React from 'react';
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import { headerImg } from "../../assets";
import { HashLink } from 'react-router-hash-link';
import {BrowserRouter as Router } from "react-router-dom";
import './header.css';

  const Header = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = [ "Frontend Engineer", "Web Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return(
    <section className="header" id="home">
      <Router>
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">welcome to my portfolio</span>
              <h1>{"Hi I'm Marina "}<br></br><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Frontend engineer", "Web Designer"]'><span className="wrap">{text}</span></span></h1>
              <p>初めましてmarinaです 人々の生活を豊かにするサービスを提供するため、UI/UXを意識した設計・デザインから開発まで対応出来るように日々スキルを磨いております</p>
              <HashLink to='#contact'>
                <button>contact<ArrowRightCircle size={25} /></button>
              </HashLink>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="Header img" />
            </Col>
          </Row>
        </Container>
      </Router>
    </section>
  )
} ;

export  default Header;