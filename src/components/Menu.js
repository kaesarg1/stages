import React from "react";
import logo from '../images/logo-black.png';
import { Container, Col, Navbar, Nav, Form } from "react-bootstrap";
import { Link } from "react-router-dom";


export default class Menu extends React.Component {
  
  render() {

    return (
  <Container fluid data-testid="Menu-1">
    <Navbar className="bg-white"  expand="lg">
      <Link className="selected" to="/" >
        <img src={logo} className="App-logo" alt="logo-black"  height="80" ></img>
      </Link>
      <Col></Col>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="btn bg-success text-white m-2" to="/Stage">Trouvez votre stage</Link>
          <Link className="btn bg-success text-white m-2" to="/Stagiaire">Trouvez votre futur stagiaire</Link>
        </Nav>        
        <Col></Col>
        <Form inline>

          <Link className="btn d-inline-flex bg-warning text-dark m-2"   to="/Connexion">Connexion</Link>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  </Container>


    );
  }
}




