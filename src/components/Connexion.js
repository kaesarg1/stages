import React from "react"
import { Container, Row, Col, Form, Button,  } from "react-bootstrap";
import auth from "./auth";


export const Connexion = props => {
return(

    <Container fluid className="connexion">
      

        <Container className=" mt-5">
            <Row>
                <Col className="identification col-4">
                    <h3>Identification</h3>
                    <Form >
                        <Form.Group>
                            <Form.Label for="exampleInputEmail1">Email address</Form.Label>
                            <Form.Control type="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label for="exampleInputPassword1">Password</Form.Label>
                            <Form.Control type="password" id="exampleInputPassword1" placeholder="Password" required/>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox" className="mt-2">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={() => {
                            auth.login(() => {
                                props.history.push("/app");
                            });
                            }}>Submit</Button>
                    </Form>
                </Col>
                <Col className="nouvelutil col-8 mb-5">
                    <h3>Nouvel Utilisateur</h3>
                    <Form>
                        <Form.Row>
                            <Col>
                                <Form.Label>First name</Form.Label>
                                <Form.Control placeholder="First name" />
                            </Col>
                            <Col>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control placeholder="Last name" />
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={() => {
                            auth.login(() => {
                                props.history.push("/app");
                            });
                            }}>
                            Submit
                        </Button>
                        </Form>
                </Col>
            </Row>
        </Container>
    <Container fluid>
        <Row >
            <Col className="col-lg-6 order-lg-1 text-white showcase-img1"></Col>
            <Col className="col-lg-6 bg-light order-lg-2 my-auto showcase-text">
        
                <h4 className="lead bold mb-0">Etiam mattis est in tellus mattis
                maximus. Etiam non molestie metus.
                Donec quis mauris metus. Cras
                tempor varius odio, nec varius nisi
                sollicitudin ac. Praesent vitae
                elementum augue</h4>
            </Col>    
        </Row>
    
        <Row className="justify-content-center text-center mt-5">
            <a href="https://via.placeholder.com" ><img src="https://via.placeholder.com/1300x150?text=espace publicitaire" alt="placeholder"></img></a>
        </Row>

        </Container>
    </Container>
  );
};

export default Connexion