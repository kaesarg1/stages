import React from "react";
import auth from "./auth";
import App from './App';
import { Container, Button, Row } from "react-bootstrap";


export const LandingPage = props => {
  return (
    <Container fluid>
      <App/>
      <Container className="text-center">
        <Row>
            <Button
            onClick={() => {
              auth.login(() => {
                props.history.push("/app");
              });
            }}
          >
            Acceder à la gestion de Stage et Stagiaires
          </Button>
        </Row>
      </Container>
  
    </Container>
  );
};
