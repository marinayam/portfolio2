import { Container, Row, Col } from "react-bootstrap";
import { logo } from "../../assets";
import './footer.css';


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col className="footer__logo" size={12} md={6} sm={12}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} className="text-center">
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}