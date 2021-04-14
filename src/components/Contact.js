import React from 'react'
import '../styles/text.css'
import { Container, Col, Row, Form, NavLink } from "react-bootstrap";

export const Contact = () => {
    return (
        <Container fluid className="mt-5">
            <Row className="d-flex text-center justify-content-center">
                <Col >
                    <h3>Contact</h3>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col className=" col-4">
                       
                        <Form>
                            <Form.Group>
                                <Form.Label for="exampleInputPassword1">Nom</Form.Label>
                                <Form.Control type="password" id="exampleInputPassword1" placeholder="Nom"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label for="exampleInputEmail1">Email</Form.Label>
                                <Form.Control type="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Entrez email"></Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Message"/>
                            </Form.Group>
                            
                            <NavLink type="submit" className="btn btn-primary mt-3">Submit</NavLink>
                        </Form>
                    </Col>

            </Row>
  
        </Container>
    )
}

export default Contact