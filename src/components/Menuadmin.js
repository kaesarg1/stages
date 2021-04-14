import React from "react";
import logo from '../images/logo-black.png';
import { Container, Col,  Row, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import auth from "./auth";
 
export const Menuadmin = props => {
  return (
    <Container fluid>
      <Row>
        <Col className="col-3">
            <Link  to="/Administration">
                    <img src={logo} className="App-logo" alt="logo-white"></img>
            </Link>
        </Col>
        
        <Col className="col-3">
          <Link className="btn btn-outline-primary"><i class="fas fa-plus" to="#AddStage"></i> Ajouter une offre de Stage</Link>
        </Col>
        <Col className="col-3">
          <Link className="btn btn-outline-primary"><i class="fas fa-plus" to="#AddStagiarie"></i> Ajouter une demande de Stage</Link>
        </Col>
        <Col className="col-3">
        </Col>
        <Col className="col">
          {/* <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic" className="text-primary">
              <i class="fas fa-user-circle"></i> Utilisateur
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item className="text-primary" href="#/action-1" >Fiche</Dropdown.Item>
              <Dropdown.Item className="text-primary" href="#/action-2" >Déconnecter</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
        </Col>
        <Col className="col">
        </Col>
        <Col className="col m-auto notif">
          <i class="fas fa-bell fa-2x"></i>
        </Col>
        <Col className="col m-auto logout">
        <i class="fas fa-sign-out-alt fa-2x"></i>
          <Button onClick={() => {
          auth.logout(() => {
            props.history.push("/");
          });
        }}></Button>
        </Col>
      </Row>
    </Container>

  )
}
 
export default Menuadmin;