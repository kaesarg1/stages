import React from "react"
import { Container, Col, Row, } from "react-bootstrap";
import '../styles/text.css'

function Apropos(props) {
  return (
    <Container fluid className="text-center mt-5" data-testid="Apropos-1">
        <Row className="d-flex justify-content-center">
            <Col >
                <h3>À propos</h3>
            </Col>
        </Row>
        <Row className="d-flex justify-content-center">
            <Col className="col-4 text-justify">
                <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum.
                </p>
            </Col>
            <Col className="col-4 text-justify">
                <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum.
                </p>
            </Col>
        </Row>
  
    </Container>
  )
}
 
export default Apropos;