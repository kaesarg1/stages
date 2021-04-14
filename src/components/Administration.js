import React from "react"
import {Container, Row, Col  } from "react-bootstrap";
import Menuadmin from './Menuadmin';
import Sidenav from './Sidenav';
import AddStage from "./AddStage";
import AddStagiaire from "./AddStagiaire";
import EditStage from "./EditStage";
import EditStagiaire from "./EditStagiaire";
import '../styles/administration.css';



export const Administration = props => {
  return (
    <Container fluid>
      <Row>
        <Col className="col-3 nav">
            <Sidenav/>
        </Col>
          <Col className="col-9 main">
              <Menuadmin/>
          </Col>
          <Col className="col-9 main text-center mb-5">
              <h3>Gestion de Stages et Stagiaires</h3>
          </Col>
          <Col>
            <AddStage/>
            <AddStagiaire/>
            <EditStage/>
            <EditStagiaire/>
          </Col>
        </Row>
    </Container>
    )
  }

export default Administration;


