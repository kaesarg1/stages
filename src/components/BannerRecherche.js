import React from "react"
import { Container, Row, Col, ListGroup } from "react-bootstrap";
 
function BannerRecherche(props) {
  return (
    <Container className="Recherche">
      <Container fluid className="bg-light d-flex justify-content-center mt-5">
        <Row className="mt-5"> 
          <Col className="title">
            <h3>Ils sont à la recherche d'un stage :</h3>
          </Col>
        </Row>
      </Container>
      <Container fluid className="bg-light d-flex justify-content-center mb-5">
        <Row> 
          <Col className="col m-2">
            <ListGroup className="list-group-flush col">
              <ListGroup.Item className="text-primary bg-light" to="">Graphic Design</ListGroup.Item>
              <ListGroup.Item className="text-primary bg-light" to="">Designer jobs</ListGroup.Item>
              <ListGroup.Item className="text-primary bg-light" to="">Frontend Developer jobs</ListGroup.Item>
              <ListGroup.Item className="text-primary bg-light" to="">Developer jobs</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col  className="col m-2">
            <ListGroup className="list-group-flush col m-auto">
              <ListGroup.Item className="text-primary bg-light" to="">Resources jobs</ListGroup.Item>
              <ListGroup.Item className="text-primary bg-light" to="">Marketing online jobs</ListGroup.Item>
              <ListGroup.Item className="text-primary bg-light" to="">Mobile Developer jobs</ListGroup.Item>
              <ListGroup.Item className="text-primary bg-light" to="">App Developer jobs</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col  className="col m-2">
              <ListGroup className="list-group-flush col">
                <a className="list-group-item bg-light" to="">Product Manager jobs</a>
                <a className="list-group-item bg-light" to="">Sales jobsSales jobs</a>
                <a className="list-group-item bg-light" to="">Logo Design jobs</a>
                <a className="list-group-item bg-light" to="">Seo jobs</a>
              </ListGroup>
          </Col>
          <Col  className="col m-2">
              <ListGroup className="list-group-flush col">
                <ListGroup.Item className="text-primary bg-light" to="">Graphic Design</ListGroup.Item>
                <ListGroup.Item className="text-primary bg-light" to="">Android jobs </ListGroup.Item>
                <ListGroup.Item className="text-primary bg-light" to="">Logo Design jobs</ListGroup.Item>
                <ListGroup.Item className="text-primary bg-light" to="">Seo jobs</ListGroup.Item>
              </ListGroup>
          </Col >
        </Row>
        

      </Container>
    </Container>
  )
}
 
export default BannerRecherche;