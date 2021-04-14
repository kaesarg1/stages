import React from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'
import '../styles/Carousel.css';




function NewComponent(props) {
  return (
    <Container fluid>
        <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 car1"
          />
          <Carousel.Caption>
            <Row>
                <Col className="col-xl-9 mx-auto">
                  <h1 className="mb-5 text-white">Trouvez votre Stage</h1>
                </Col>
                <Col className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                  <Form>
                    <Row>
                      <Col className="col-12 col-md-9 mb-2 mb-md-0">
                        <Form.Control type="text" placeholder="Mot clé"></Form.Control>
                      </Col>
                      <Col className="col-12 col-md-3">
                        <Button type="submit" className="btn btn-block  btn-warning">Recherchez</Button>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 car2"
          />
      
          <Carousel.Caption>
            <Row>
                <Col className="col-xl-9 mx-auto">
                  <h1 className="mb-5 text-white">Trouvez votre Stage</h1>
                </Col>
                <Col className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                  <Form>
                    <Row>
                      <Col className="col-12 col-md-9 mb-2 mb-md-0">
                        <Form.Control type="text" placeholder="Mot clé"></Form.Control>
                      </Col>
                      <Col className="col-12 col-md-3">
                        <Button type="submit" className="btn btn-block  btn-warning">Recherchez</Button>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 car3"
          />
      
          <Carousel.Caption>
            <Row>
                <Col className="col-xl-9 mx-auto">
                  <h1 className="mb-5 text-white">Trouvez votre Stage</h1>
                </Col>
                <Col className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                  <Form>
                    <Row>
                      <Col className="col-12 col-md-9 mb-2 mb-md-0">
                        <Form.Control type="text" placeholder="Mot clé"></Form.Control>
                      </Col>
                      <Col className="col-12 col-md-3">
                        <Button type="submit" className="btn btn-block  btn-warning">Recherchez</Button>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
    
  )
}
 
export default NewComponent;