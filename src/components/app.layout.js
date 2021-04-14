import React from "react";
import {Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../images/logo-black.png';

import AddStage from "./AddStage";
import AddStagiaire from "./AddStagiaire";
import EditStage from "./EditStage";
import EditStagiaire from "./EditStagiaire";
import auth from "./auth";

export const AppLayout = props => {
  return (
    <Container fluid>
        <Container fluid>
            <Row>
                <Col className="col-3">
                    <img src={logo} className="App-logo" alt="logo-white" height="80"></img>
                </Col>
                <Col className="col-6"></Col>
                <Col className="col-3-inline mt-3">
                    <Link className="btn btn-outline-primary" onClick={() => {
                        auth.logout(() => {
                        props.history.push("/");
                        });
                        }}>Déconnexion<i class="fas fa-sign-out-alt fa"></i></Link>
                </Col>
            </Row>
        </Container>
        <Container fluid>
            <Row>
                <Col className="col-9 main text-center mb-5">
                    <h3>Gestion de Stages et Stagiaires</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <AddStage/>
                    <AddStagiaire/>
                </Col>
                <Col>
                    <EditStage/>
                    <EditStagiaire/>
                </Col>
            </Row>
        </Container>
  </Container>
  
  );
};
