import React from "react"
import { Container, Row, Col } from "react-bootstrap";
import {  Link } from "react-router-dom";

function Footer(props) {
  return (
    <Container fluid className="footer justify-content-center bg-white" data-testid="Footer-1">
      <Row>
        <Col className="col-6">
            <p>&copy; {new Date().getFullYear()} Copyright- eStage - Projet éducationnel</p>
        </Col>
     
        <Col className="col">
            <Link  to="/">Accueil</Link>
        </Col>
        <Col className="col">
            <Link  to="/Apropos">À propos</Link>
        </Col>
        <Col className="col">
            <Link to="/Confidentialite">Confidentialité</Link>
        </Col>
        <Col className="col">
            <Link to="/Contact">Nous joindre</Link>
        </Col>
        <Col className="col">
            <Link to="/Partenaires">Partenaires</Link>
        </Col>
      </Row>
    </Container>
  )
}
 
export default Footer;